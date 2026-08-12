require('dotenv').config();
const { Client } = require('pg');
const { categoriesData, productsData } = require('./data.js');

const client = new Client({
  connectionString: process.env.DATABASE_URL || `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
});

async function init() {
  try {
    console.log("Connecting to PostgreSQL...");
    await client.connect();
    console.log("Connected successfully!");

    // Create Tables
    console.log("Creating tables if they don't exist...");
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
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS order_items (
        id SERIAL PRIMARY KEY,
        order_id VARCHAR(20) REFERENCES orders(order_id) ON DELETE CASCADE,
        product_id VARCHAR(50) NOT NULL,
        product_name VARCHAR(255) NOT NULL,
        price INTEGER NOT NULL,
        quantity INTEGER NOT NULL
      );
    `);
    console.log("Tables created successfully!");

    // Seed Categories
    console.log("Seeding categories...");
    for (const cat of categoriesData) {
      await client.query(`
        INSERT INTO categories (id, name, logo)
        VALUES ($1, $2, $3)
        ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, logo = EXCLUDED.logo
      `, [cat.id, cat.name, cat.logo]);
    }
    console.log(`Seeded ${categoriesData.length} categories.`);

    // Seed Products
    console.log("Seeding products...");
    for (const prod of productsData) {
      await client.query(`
        INSERT INTO products (id, name, category_ids, weight, price, old_price, discount, image, is_super_offer)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
        ON CONFLICT (id) DO UPDATE SET 
          name = EXCLUDED.name, 
          category_ids = EXCLUDED.category_ids,
          weight = EXCLUDED.weight,
          price = EXCLUDED.price,
          old_price = EXCLUDED.old_price,
          discount = EXCLUDED.discount,
          image = EXCLUDED.image,
          is_super_offer = EXCLUDED.is_super_offer
      `, [
        prod.id, 
        prod.name, 
        prod.categoryIds, 
        prod.weight, 
        prod.price, 
        prod.oldPrice, 
        prod.discount, 
        prod.image, 
        prod.isSuperOffer
      ]);
    }
    console.log(`Seeded ${productsData.length} products.`);

    console.log("Database initialized successfully!");
  } catch(err) {
    console.error("Database initialization failed:", err);
  } finally {
    await client.end();
  }
}

init();
