# FreshCut Clone (PostgreSQL Backend)

This is a premium, fully working, functional clone of **FreshCut** (https://www.freshcut.com.bd/) with a Node.js Express backend and a PostgreSQL database.

## Features
- **100% Sourced Real Catalog:** Sourced 301 products and categories straight from the active live database CDN.
- **PostgreSQL Database Persistence:** Stores products, categories, orders, and order items.
- **Dynamic Search & Filtering:** Filter items by categories and price range via backend queries.
- **Complete Cart Drawer:** Add, remove, and adjust item quantities in the shopping cart.
- **Working Checkout:** Place quick orders which are saved into the PostgreSQL tables with dynamic invoice response.
- **Refined Styling:** Premium layout, matching colors, font adjustments, and fully responsive across mobile and desktop.

## Getting Started

### 1. Prerequisites
Ensure you have the following installed on your machine:
- **Node.js** (v14 or higher)
- **PostgreSQL** database server

### 2. Installation
Open your terminal in the project directory and run:
```bash
npm install
```

### 3. Database Configuration
1. Create a database in your PostgreSQL instance (e.g. `fish_bazar_db`).
2. Copy `.env.example` to a new file named `.env`:
   ```bash
   cp .env.example .env
   ```
3. Update the credentials in `.env` to match your local PostgreSQL connection settings:
   ```env
   DB_USER=postgres
   DB_PASSWORD=your_password
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=fish_bazar_db
   ```

### 4. Initialize and Seed Database
Run the seeding command to automatically create the tables and insert all categories and 301 fish products from the original website:
```bash
npm run init-db
```

### 5. Start Server
Run the local server:
```bash
npm start
```
Open **`http://localhost:5000`** in your browser to view the fully functional clone!
"# fishbazaar" 
