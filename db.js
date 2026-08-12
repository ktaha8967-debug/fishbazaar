const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { Pool } = require('pg');

const LOCAL_DB_PATH = path.join(__dirname, 'local_db.json');

// Initialize Pool if database credentials are present
let pool = null;
let usePostgres = false;

if (process.env.DATABASE_URL || (process.env.DB_USER && process.env.DB_NAME)) {
  try {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL || `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
      connectionTimeoutMillis: 5000 // 5 seconds timeout to fail fast
    });
    usePostgres = true;
  } catch (err) {
    console.error("Failed to initialize PostgreSQL Pool, falling back to local JSON DB:", err.message);
    usePostgres = false;
  }
}

// Local JSON DB Helper functions
function readLocalDB() {
  if (!fs.existsSync(LOCAL_DB_PATH)) {
    // Seed database from data.js
    const { categoriesData, productsData } = require('./data.js');
    const initialDB = {
      categories: categoriesData,
      products: productsData.map(p => ({
        id: p.id,
        name: p.name,
        category_ids: p.categoryIds,
        weight: p.weight,
        price: p.price,
        old_price: p.oldPrice,
        discount: p.discount,
        image: p.image,
        is_super_offer: p.isSuperOffer || false
      })),
      orders: [],
      order_items: [],
      users: []
    };
    fs.writeFileSync(LOCAL_DB_PATH, JSON.stringify(initialDB, null, 2), 'utf8');
    return initialDB;
  }
  try {
    const data = fs.readFileSync(LOCAL_DB_PATH, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading local DB, returning empty:", err);
    return { categories: [], products: [], orders: [], order_items: [], users: [] };
  }
}

function writeLocalDB(data) {
  try {
    fs.writeFileSync(LOCAL_DB_PATH, JSON.stringify(data, null, 2), 'utf8');
  } catch (err) {
    console.error("Error writing to local DB:", err);
  }
}

// Hashing helper using Node's crypto
function hashPassword(password) {
  return crypto.createHash('sha256').update(password).digest('hex');
}

// Database Initialization
async function initDatabase() {
  if (usePostgres) {
    try {
      // Test the connection
      const client = await pool.connect();
      console.log("PostgreSQL connection established successfully.");
      
      // Create tables
      await client.query(`
        CREATE TABLE IF NOT EXISTS categories (
          id VARCHAR(50) PRIMARY KEY,
          name VARCHAR(100) NOT NULL,
          logo VARCHAR(255)
        );

        CREATE TABLE IF NOT EXISTS products (
          id VARCHAR(50) PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          category_ids TEXT[] NOT NULL,
          weight VARCHAR(50),
          price INTEGER NOT NULL,
          old_price INTEGER,
          discount INTEGER,
          image TEXT,
          is_super_offer BOOLEAN DEFAULT FALSE
        );

        CREATE TABLE IF NOT EXISTS orders (
          order_id VARCHAR(20) PRIMARY KEY,
          customer_name VARCHAR(100) NOT NULL,
          customer_phone VARCHAR(20) NOT NULL,
          customer_address TEXT NOT NULL,
          payment_method VARCHAR(50) NOT NULL,
          subtotal INTEGER NOT NULL,
          delivery_charge INTEGER NOT NULL,
          total INTEGER NOT NULL,
          status VARCHAR(20) DEFAULT 'Pending',
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          username VARCHAR(100)
        );

        CREATE TABLE IF NOT EXISTS order_items (
          id SERIAL PRIMARY KEY,
          order_id VARCHAR(20) REFERENCES orders(order_id) ON DELETE CASCADE,
          product_id VARCHAR(50) NOT NULL,
          product_name VARCHAR(255) NOT NULL,
          price INTEGER NOT NULL,
          quantity INTEGER NOT NULL
        );

        CREATE TABLE IF NOT EXISTS users (
          id SERIAL PRIMARY KEY,
          username VARCHAR(100) UNIQUE NOT NULL,
          password_hash VARCHAR(255) NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          is_admin BOOLEAN DEFAULT FALSE
        );
      `);

      // Seed categories and products if empty
      const catCount = await client.query("SELECT COUNT(*) FROM categories");
      if (parseInt(catCount.rows[0].count) === 0) {
        console.log("Seeding PostgreSQL categories...");
        const { categoriesData } = require('./data.js');
        for (const cat of categoriesData) {
          await client.query("INSERT INTO categories (id, name, logo) VALUES ($1, $2, $3)", [cat.id, cat.name, cat.logo]);
        }
      }

      const prodCount = await client.query("SELECT COUNT(*) FROM products");
      if (parseInt(prodCount.rows[0].count) === 0) {
        console.log("Seeding PostgreSQL products...");
        const { productsData } = require('./data.js');
        for (const p of productsData) {
          await client.query(
            "INSERT INTO products (id, name, category_ids, weight, price, old_price, discount, image, is_super_offer) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)",
            [p.id, p.name, p.categoryIds, p.weight, p.price, p.oldPrice, p.discount, p.image, p.isSuperOffer || false]
          );
        }
      }

      // Check if admin user exists, if not create default admin/admin123
      const adminCheck = await client.query("SELECT * FROM users WHERE username = 'admin'");
      if (adminCheck.rows.length === 0) {
        console.log("Creating default administrator account...");
        await client.query(
          "INSERT INTO users (username, password_hash, is_admin) VALUES ($1, $2, $3)",
          ['admin', hashPassword('admin123'), true]
        );
      }

      client.release();
      console.log("PostgreSQL database setup and validation completed successfully.");
    } catch (err) {
      console.warn("PostgreSQL connection or table setup failed. Gracefully falling back to JSON local DB.", err.message);
      usePostgres = false;
      initLocalDB();
    }
  } else {
    initLocalDB();
  }
}

function initLocalDB() {
  console.log("Using JSON file database fallback.");
  const db = readLocalDB();
  // Ensure default admin exists
  const hasAdmin = db.users.some(u => u.username === 'admin');
  if (!hasAdmin) {
    db.users.push({
      username: 'admin',
      password_hash: hashPassword('admin123'),
      is_admin: true,
      created_at: new Date().toISOString()
    });
    writeLocalDB(db);
  }
}

// Database Actions Wrapper
const db = {
  // Categories
  async getCategories() {
    if (usePostgres) {
      const res = await pool.query("SELECT * FROM categories");
      return res.rows;
    } else {
      return readLocalDB().categories;
    }
  },

  // Products
  async getProducts(filters = {}) {
    const { category, search, max_price, super_offer } = filters;
    if (usePostgres) {
      let queryText = 'SELECT * FROM products WHERE 1=1';
      const values = [];
      let paramIndex = 1;

      if (category && category !== 'all') {
        queryText += ` AND $${paramIndex} = ANY(category_ids)`;
        values.push(category);
        paramIndex++;
      }

      if (search) {
        queryText += ` AND name ILIKE $${paramIndex}`;
        values.push(`%${search}%`);
        paramIndex++;
      }

      if (max_price) {
        queryText += ` AND price <= $${paramIndex}`;
        values.push(parseInt(max_price));
        paramIndex++;
      }

      if (super_offer === 'true' || super_offer === true) {
        queryText += ` AND is_super_offer = TRUE`;
      }

      const result = await pool.query(queryText, values);
      return result.rows.map(p => ({
        id: p.id,
        name: p.name,
        categoryIds: p.category_ids,
        weight: p.weight,
        price: p.price,
        oldPrice: p.old_price,
        discount: p.discount,
        image: p.image,
        isSuperOffer: p.is_super_offer
      }));
    } else {
      const data = readLocalDB();
      return data.products.filter(p => {
        const matchesCategory = !category || category === 'all' || (p.category_ids && p.category_ids.includes(category));
        const matchesSearch = !search || p.name.toLowerCase().includes(search.toLowerCase());
        const matchesPrice = !max_price || p.price <= parseInt(max_price);
        const matchesSuperOffer = !super_offer || p.is_super_offer;
        return matchesCategory && matchesSearch && matchesPrice && matchesSuperOffer;
      }).map(p => ({
        id: p.id,
        name: p.name,
        categoryIds: p.category_ids,
        weight: p.weight,
        price: p.price,
        oldPrice: p.old_price,
        discount: p.discount,
        image: p.image,
        isSuperOffer: p.is_super_offer
      }));
    }
  },

  async addProduct(product) {
    const id = 'prod-' + Math.floor(100000 + Math.random() * 900000);
    const newProduct = {
      id,
      name: product.name,
      category_ids: product.categoryIds || [],
      weight: product.weight || '1kg',
      price: parseInt(product.price),
      old_price: parseInt(product.oldPrice || product.price),
      discount: parseInt(product.discount || 0),
      image: product.image || 'https://images.unsplash.com/photo-1534482421-64566f976cfa?auto=format&fit=crop&w=600&q=80',
      is_super_offer: product.isSuperOffer || false
    };

    if (usePostgres) {
      await pool.query(
        "INSERT INTO products (id, name, category_ids, weight, price, old_price, discount, image, is_super_offer) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)",
        [newProduct.id, newProduct.name, newProduct.category_ids, newProduct.weight, newProduct.price, newProduct.old_price, newProduct.discount, newProduct.image, newProduct.is_super_offer]
      );
    } else {
      const data = readLocalDB();
      data.products.push(newProduct);
      writeLocalDB(data);
    }
    return newProduct;
  },

  async updateProduct(id, product) {
    if (usePostgres) {
      await pool.query(
        "UPDATE products SET name = $1, category_ids = $2, weight = $3, price = $4, old_price = $5, discount = $6, image = $7, is_super_offer = $8 WHERE id = $9",
        [product.name, product.categoryIds, product.weight, parseInt(product.price), parseInt(product.oldPrice), parseInt(product.discount), product.image, product.isSuperOffer, id]
      );
    } else {
      const data = readLocalDB();
      const idx = data.products.findIndex(p => p.id === id);
      if (idx !== -1) {
        data.products[idx] = {
          ...data.products[idx],
          name: product.name,
          category_ids: product.categoryIds,
          weight: product.weight,
          price: parseInt(product.price),
          old_price: parseInt(product.oldPrice),
          discount: parseInt(product.discount),
          image: product.image,
          is_super_offer: product.isSuperOffer
        };
        writeLocalDB(data);
      }
    }
  },

  async deleteProduct(id) {
    if (usePostgres) {
      await pool.query("DELETE FROM products WHERE id = $1", [id]);
    } else {
      const data = readLocalDB();
      data.products = data.products.filter(p => p.id !== id);
      writeLocalDB(data);
    }
  },

  // Orders
  async createOrder(order, username = null) {
    const orderId = 'FB-' + Math.floor(100000 + Math.random() * 900000);
    const subtotal = order.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const deliveryCharge = subtotal > 1500 ? 0 : 80;
    const total = subtotal + deliveryCharge;

    if (usePostgres) {
      const client = await pool.connect();
      try {
        await client.query('BEGIN');
        await client.query(
          "INSERT INTO orders (order_id, customer_name, customer_phone, customer_address, payment_method, subtotal, delivery_charge, total, username) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)",
          [orderId, order.customerName, order.customerPhone, order.customerAddress, order.paymentMethod, subtotal, deliveryCharge, total, username]
        );
        for (const item of order.cartItems) {
          await client.query(
            "INSERT INTO order_items (order_id, product_id, product_name, price, quantity) VALUES ($1, $2, $3, $4, $5)",
            [orderId, item.id, item.name, item.price, item.quantity]
          );
        }
        await client.query('COMMIT');
      } catch (err) {
        await client.query('ROLLBACK');
        throw err;
      } finally {
        client.release();
      }
    } else {
      const data = readLocalDB();
      const newOrder = {
        order_id: orderId,
        customer_name: order.customerName,
        customer_phone: order.customerPhone,
        customer_address: order.customerAddress,
        payment_method: order.paymentMethod,
        subtotal,
        delivery_charge: deliveryCharge,
        total,
        status: 'Pending',
        created_at: new Date().toISOString(),
        username
      };
      data.orders.push(newOrder);
      for (const item of order.cartItems) {
        data.order_items.push({
          id: Math.floor(Math.random() * 1000000),
          order_id: orderId,
          product_id: item.id,
          product_name: item.name,
          price: item.price,
          quantity: item.quantity
        });
      }
      writeLocalDB(data);
    }
    return { orderId, subtotal, deliveryCharge, total };
  },

  async getOrders(username = null) {
    if (usePostgres) {
      let query = "SELECT * FROM orders";
      const params = [];
      if (username) {
        query += " WHERE username = $1";
        params.push(username);
      }
      query += " ORDER BY created_at DESC";
      const ordersRes = await pool.query(query, params);
      
      const orders = ordersRes.rows;
      // Get all order items
      const itemsRes = await pool.query("SELECT * FROM order_items");
      const items = itemsRes.rows;

      return orders.map(o => ({
        orderId: o.order_id,
        customerName: o.customer_name,
        customerPhone: o.customer_phone,
        customerAddress: o.customer_address,
        paymentMethod: o.payment_method,
        subtotal: o.subtotal,
        deliveryCharge: o.delivery_charge,
        total: o.total,
        status: o.status,
        createdAt: o.created_at,
        username: o.username,
        items: items.filter(item => item.order_id === o.order_id).map(i => ({
          productId: i.product_id,
          productName: i.product_name,
          price: i.price,
          quantity: i.quantity
        }))
      }));
    } else {
      const data = readLocalDB();
      let orders = data.orders;
      if (username) {
        orders = orders.filter(o => o.username === username);
      }
      orders = [...orders].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

      return orders.map(o => ({
        orderId: o.order_id,
        customerName: o.customer_name,
        customerPhone: o.customer_phone,
        customerAddress: o.customer_address,
        paymentMethod: o.payment_method,
        subtotal: o.subtotal,
        deliveryCharge: o.delivery_charge,
        total: o.total,
        status: o.status,
        createdAt: o.created_at,
        username: o.username,
        items: data.order_items.filter(item => item.order_id === o.order_id).map(i => ({
          productId: i.product_id,
          productName: i.product_name,
          price: i.price,
          quantity: i.quantity
        }))
      }));
    }
  },

  async updateOrderStatus(orderId, status) {
    if (usePostgres) {
      await pool.query("UPDATE orders SET status = $1 WHERE order_id = $2", [status, orderId]);
    } else {
      const data = readLocalDB();
      const order = data.orders.find(o => o.order_id === orderId);
      if (order) {
        order.status = status;
        writeLocalDB(data);
      }
    }
  },

  // Authentication
  async register(username, password) {
    const passwordHash = hashPassword(password);
    if (usePostgres) {
      await pool.query("INSERT INTO users (username, password_hash) VALUES ($1, $2)", [username, passwordHash]);
    } else {
      const data = readLocalDB();
      if (data.users.some(u => u.username === username)) {
        throw new Error("Username already exists");
      }
      data.users.push({
        username,
        password_hash: passwordHash,
        is_admin: false,
        created_at: new Date().toISOString()
      });
      writeLocalDB(data);
    }
    return { username };
  },

  async login(username, password) {
    const passwordHash = hashPassword(password);
    if (usePostgres) {
      const res = await pool.query("SELECT * FROM users WHERE username = $1 AND password_hash = $2", [username, passwordHash]);
      if (res.rows.length === 0) return null;
      const user = res.rows[0];
      return { username: user.username, isAdmin: user.is_admin };
    } else {
      const data = readLocalDB();
      const user = data.users.find(u => u.username === username && u.password_hash === passwordHash);
      if (!user) return null;
      return { username: user.username, isAdmin: user.is_admin || false };
    }
  }
};

module.exports = { db, initDatabase };
