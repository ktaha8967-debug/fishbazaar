require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const { db, initDatabase } = require('./db.js');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static frontend files
app.use(express.static(path.join(__dirname)));

// API: Get Categories
app.get('/api/categories', async (req, res) => {
  try {
    const categories = await db.getCategories();
    res.json(categories);
  } catch (err) {
    console.error("Error getting categories:", err);
    res.status(500).json({ error: 'Failed to retrieve categories' });
  }
});

// API: Get Products with filtering options
app.get('/api/products', async (req, res) => {
  try {
    const { category, search, max_price, super_offer } = req.query;
    const products = await db.getProducts({ category, search, max_price, super_offer });
    res.json(products);
  } catch (err) {
    console.error("Error getting products:", err);
    res.status(500).json({ error: 'Failed to retrieve products' });
  }
});

// API: Submit Quick Order
app.post('/api/orders', async (req, res) => {
  try {
    const { customerName, customerPhone, customerAddress, paymentMethod, cartItems, username } = req.body;

    if (!customerName || !customerPhone || !customerAddress || !cartItems || cartItems.length === 0) {
      return res.status(400).json({ error: 'Missing shipping details or cart items' });
    }

    const orderResult = await db.createOrder({
      customerName,
      customerPhone,
      customerAddress,
      paymentMethod,
      cartItems
    }, username || null);

    res.status(201).json({
      success: true,
      ...orderResult
    });
  } catch (err) {
    console.error("Error placing order:", err);
    res.status(500).json({ error: 'Order placement failed' });
  }
});

// API: User Registration
app.post('/api/auth/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ error: "Username and password are required" });
    }
    const result = await db.register(username, password);
    res.status(201).json({ success: true, username: result.username });
  } catch (err) {
    console.error("Error registering user:", err);
    res.status(400).json({ error: err.message || "Registration failed" });
  }
});

// API: User Login
app.post('/api/auth/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ error: "Username and password are required" });
    }
    const user = await db.login(username, password);
    if (!user) {
      return res.status(401).json({ error: "Invalid username or password" });
    }
    res.json({ success: true, username: user.username, isAdmin: user.isAdmin });
  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).json({ error: "Login failed" });
  }
});

// API: Get user's order history
app.get('/api/orders/history', async (req, res) => {
  try {
    const { username } = req.query;
    if (!username) {
      return res.status(400).json({ error: "Username is required" });
    }
    const orders = await db.getOrders(username);
    res.json(orders);
  } catch (err) {
    console.error("Error fetching order history:", err);
    res.status(500).json({ error: "Failed to fetch order history" });
  }
});

// API: Admin - Get all orders
app.get('/api/admin/orders', async (req, res) => {
  try {
    const orders = await db.getOrders();
    res.json(orders);
  } catch (err) {
    console.error("Error fetching all orders for admin:", err);
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

// API: Admin - Update order status
app.post('/api/admin/orders/:orderId/status', async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;
    if (!status) {
      return res.status(400).json({ error: "Status is required" });
    }
    await db.updateOrderStatus(orderId, status);
    res.json({ success: true, orderId, status });
  } catch (err) {
    console.error("Error updating order status:", err);
    res.status(500).json({ error: "Failed to update order status" });
  }
});

// API: Admin - Add Product
app.post('/api/admin/products', async (req, res) => {
  try {
    const newProduct = await db.addProduct(req.body);
    res.status(201).json({ success: true, product: newProduct });
  } catch (err) {
    console.error("Error adding product:", err);
    res.status(500).json({ error: "Failed to add product" });
  }
});

// API: Admin - Update Product
app.put('/api/admin/products/:productId', async (req, res) => {
  try {
    const { productId } = req.params;
    await db.updateProduct(productId, req.body);
    res.json({ success: true });
  } catch (err) {
    console.error("Error updating product:", err);
    res.status(500).json({ error: "Failed to update product" });
  }
});

// API: Admin - Delete Product
app.delete('/api/admin/products/:productId', async (req, res) => {
  try {
    const { productId } = req.params;
    await db.deleteProduct(productId);
    res.json({ success: true });
  } catch (err) {
    console.error("Error deleting product:", err);
    res.status(500).json({ error: "Failed to delete product" });
  }
});

// Initialize DB and Start Server
initDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`FreshCut Backend running at http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error("Database setup failed completely, starting server anyway...", err);
  app.listen(PORT, () => {
    console.log(`FreshCut Backend running at http://localhost:${PORT}`);
  });
});
