// Admin Panel Application Logic
let allOrders = [];
let adminCategories = [];
let adminProducts = [];

document.addEventListener("DOMContentLoaded", () => {
  checkAdminAuth();
  setupAdminEventListeners();
});

// Authentication checks
function checkAdminAuth() {
  const adminSession = JSON.parse(localStorage.getItem('fishbazar_admin'));
  if (adminSession && adminSession.username && adminSession.isAdmin) {
    document.getElementById("adminLoginScreen").style.display = "none";
    document.getElementById("adminDashboardApp").style.display = "flex";
    document.getElementById("adminUserDisplay").innerText = adminSession.username;
    loadDashboardData();
  } else {
    document.getElementById("adminLoginScreen").style.display = "flex";
    document.getElementById("adminDashboardApp").style.display = "none";
  }
}

// Event Listeners setup
function setupAdminEventListeners() {
  // Login form submission
  const loginForm = document.getElementById("adminLoginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const username = document.getElementById("adminUsername").value.trim();
      const password = document.getElementById("adminPassword").value;
      const errorMsg = document.getElementById("loginErrorMessage");

      try {
        const res = await fetch('/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password })
        });
        const data = await res.json();
        if (data.success) {
          if (data.isAdmin) {
            localStorage.setItem('fishbazar_admin', JSON.stringify({
              username: data.username,
              isAdmin: true
            }));
            errorMsg.style.display = "none";
            checkAdminAuth();
          } else {
            errorMsg.innerText = "Error: This account does not have administrative access.";
            errorMsg.style.display = "block";
          }
        } else {
          errorMsg.innerText = data.error || "Invalid username or password.";
          errorMsg.style.display = "block";
        }
      } catch (err) {
        console.error(err);
        errorMsg.innerText = "Failed to communicate with authorization server.";
        errorMsg.style.display = "block";
      }
    });
  }

  // Sidebar Menu Tab switching
  const menuItems = document.querySelectorAll(".menu-item[data-tab]");
  menuItems.forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      menuItems.forEach(m => m.classList.remove("active"));
      item.classList.add("active");

      const tab = item.getAttribute("data-tab");
      document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
      document.getElementById(`tab-${tab}`).classList.add("active");
    });
  });

  // Order search trigger
  const orderSearch = document.getElementById("orderSearchInput");
  if (orderSearch) {
    orderSearch.addEventListener("input", (e) => {
      renderOrdersTable(e.target.value);
    });
  }

  // Product search trigger
  const productSearch = document.getElementById("productSearchInput");
  if (productSearch) {
    productSearch.addEventListener("input", () => {
      renderProductsTable();
    });
  }

  // Product category filter trigger
  const productCatFilter = document.getElementById("productCategoryFilter");
  if (productCatFilter) {
    productCatFilter.addEventListener("change", () => {
      renderProductsTable();
    });
  }

  // Product modal form submission
  const productForm = document.getElementById("productForm");
  if (productForm) {
    productForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const productId = document.getElementById("editProductId").value;
      
      const categoryIds = [];
      const checkedBoxes = document.querySelectorAll("#productCategoriesCheckboxContainer input:checked");
      checkedBoxes.forEach(cb => categoryIds.push(cb.value));

      const payload = {
        name: document.getElementById("prodName").value,
        weight: document.getElementById("prodWeight").value,
        price: parseInt(document.getElementById("prodPrice").value),
        oldPrice: parseInt(document.getElementById("prodOldPrice").value || document.getElementById("prodPrice").value),
        discount: parseInt(document.getElementById("prodDiscount").value || 0),
        image: document.getElementById("prodImage").value || 'https://images.unsplash.com/photo-1534482421-64566f976cfa?auto=format&fit=crop&w=600&q=80',
        categoryIds: categoryIds,
        isSuperOffer: document.getElementById("prodIsSuperOffer").checked
      };

      try {
        let url = '/api/admin/products';
        let method = 'POST';
        
        if (productId) {
          url = `/api/admin/products/${productId}`;
          method = 'PUT';
        }

        const res = await fetch(url, {
          method: method,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        const resData = await res.json();
        if (resData.success) {
          alert(productId ? "Product updated successfully!" : "Product created successfully!");
          closeProductModal();
          await loadProductsData();
          renderProductsTable();
        } else {
          alert("Action failed: " + resData.error);
        }
      } catch (err) {
        console.error(err);
        alert("Server error occurred processing product save request.");
      }
    });
  }
}

// Global Log out function
window.adminLogout = function() {
  localStorage.removeItem('fishbazar_admin');
  checkAdminAuth();
};

// Main Data Fetch loader
async function loadDashboardData() {
  await Promise.all([
    loadCategoriesData(),
    loadOrdersData(),
    loadProductsData()
  ]);
  
  calculateMetrics();
  renderOrdersTable();
  renderProductsTable();
}

async function loadCategoriesData() {
  try {
    const res = await fetch('/api/categories');
    adminCategories = await res.json();
    
    // Populate filter selectors and modal list checkboxes
    const catSelect = document.getElementById("productCategoryFilter");
    if (catSelect) {
      catSelect.innerHTML = '<option value="all">All Categories</option>' + 
        adminCategories.map(c => `<option value="${c.id}">${c.name}</option>`).join('');
    }

    const checkboxContainer = document.getElementById("productCategoriesCheckboxContainer");
    if (checkboxContainer) {
      checkboxContainer.innerHTML = adminCategories.map(c => `
        <label>
          <input type="checkbox" value="${c.id}">
          ${c.name}
        </label>
      `).join('');
    }
  } catch (err) {
    console.error("Error loading categories:", err);
  }
}

async function loadOrdersData() {
  try {
    const res = await fetch('/api/admin/orders');
    allOrders = await res.json();
  } catch (err) {
    console.error("Error loading orders:", err);
  }
}

async function loadProductsData() {
  try {
    const res = await fetch('/api/products');
    adminProducts = await res.json();
  } catch (err) {
    console.error("Error loading products:", err);
  }
}

// Analytics Metrics Calculations
function calculateMetrics() {
  const totalOrders = allOrders.length;
  const totalRevenue = allOrders.reduce((acc, order) => {
    // Only calculate revenue for non-cancelled orders
    return order.status !== 'Cancelled' ? acc + order.total : acc;
  }, 0);
  const avgOrder = totalOrders > 0 ? Math.round(totalRevenue / totalOrders) : 0;

  document.getElementById("statTotalOrders").innerText = totalOrders;
  document.getElementById("statTotalRevenue").innerText = `৳${totalRevenue}`;
  document.getElementById("statAvgOrder").innerText = `৳${avgOrder}`;

  // Populate recent 5 orders table
  const recent = allOrders.slice(0, 5);
  const recentBody = document.getElementById("recentOrdersTableBody");
  if (recentBody) {
    if (recent.length === 0) {
      recentBody.innerHTML = '<tr><td colspan="6" style="text-align: center;">No orders recorded yet.</td></tr>';
      return;
    }
    recentBody.innerHTML = recent.map(o => `
      <tr>
        <td><strong>${o.orderId}</strong></td>
        <td>${o.customerName}</td>
        <td>${o.customerPhone}</td>
        <td>৳${o.total}</td>
        <td><span class="status-badge ${o.status.toLowerCase()}">${o.status}</span></td>
        <td>${new Date(o.createdAt).toLocaleDateString()}</td>
      </tr>
    `).join('');
  }
}

// Render Orders with filter/search
function renderOrdersTable(filterQuery = '') {
  const container = document.getElementById("ordersTableBody");
  if (!container) return;

  const query = filterQuery.toLowerCase().trim();
  const filtered = allOrders.filter(o => {
    return o.orderId.toLowerCase().includes(query) || 
           o.customerName.toLowerCase().includes(query) || 
           o.customerPhone.includes(query);
  });

  if (filtered.length === 0) {
    container.innerHTML = '<tr><td colspan="7" style="text-align: center;">No matching orders found.</td></tr>';
    return;
  }

  container.innerHTML = filtered.map(o => {
    const itemsList = o.items.map(i => `${i.productName} (x${i.quantity})`).join(', ');
    return `
      <tr>
        <td><strong>${o.orderId}</strong></td>
        <td>
          <div style="font-weight: bold;">${o.customerName}</div>
          <div style="font-size: 12px; color: var(--text-muted);">${o.customerPhone}</div>
          ${o.username ? `<div style="font-size: 11px; color: var(--primary);">👤 User: ${o.username}</div>` : ''}
        </td>
        <td style="max-width: 250px; font-size: 13px;">${o.customerAddress}</td>
        <td style="max-width: 250px; font-size: 13px; font-style: italic;">${itemsList}</td>
        <td>
          <div style="font-weight: bold;">৳${o.total}</div>
          <div style="font-size: 11px; color: var(--text-muted);">Method: ${o.paymentMethod}</div>
        </td>
        <td>
          <select class="action-select" onchange="updateOrderStatus('${o.orderId}', this.value)">
            <option value="Pending" ${o.status === 'Pending' ? 'selected' : ''}>Pending</option>
            <option value="Processing" ${o.status === 'Processing' ? 'selected' : ''}>Processing</option>
            <option value="Shipped" ${o.status === 'Shipped' ? 'selected' : ''}>Shipped</option>
            <option value="Cancelled" ${o.status === 'Cancelled' ? 'selected' : ''}>Cancelled</option>
          </select>
        </td>
        <td>
          <button onclick="deleteOrderPlaceholder('${o.orderId}')" class="action-btn-sm" style="color: var(--danger);"><i class="fa fa-trash"></i></button>
        </td>
      </tr>
    `;
  }).join('');
}

// Update Order status API trigger
window.updateOrderStatus = async function(orderId, status) {
  try {
    const res = await fetch(`/api/admin/orders/${orderId}/status`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status })
    });
    const data = await res.json();
    if (data.success) {
      // Update local state and metrics
      const order = allOrders.find(o => o.orderId === orderId);
      if (order) order.status = status;
      calculateMetrics();
      alert(`Order ${orderId} status set to: ${status}`);
    } else {
      alert("Failed to update status: " + data.error);
    }
  } catch (err) {
    console.error(err);
    alert("Connection error trying to update status.");
  }
};

// Render Products with Category filter and search query
function renderProductsTable() {
  const container = document.getElementById("productsTableBody");
  if (!container) return;

  const searchQuery = document.getElementById("productSearchInput").value.toLowerCase().trim();
  const categoryFilter = document.getElementById("productCategoryFilter").value;

  const filtered = adminProducts.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery);
    const matchesCategory = categoryFilter === 'all' || (p.categoryIds && p.categoryIds.includes(categoryFilter));
    return matchesSearch && matchesCategory;
  });

  if (filtered.length === 0) {
    container.innerHTML = '<tr><td colspan="7" style="text-align: center;">No matching products found.</td></tr>';
    return;
  }

  container.innerHTML = filtered.map(p => {
    const categoriesNames = p.categoryIds.map(cid => {
      const c = adminCategories.find(cat => cat.id === cid);
      return c ? c.name : 'Unknown';
    }).join(', ');

    return `
      <tr>
        <td><img src="${p.image}" class="product-thumb-sm" alt="Thumbnail"></td>
        <td style="font-weight: bold; max-width: 250px;">${p.name}</td>
        <td style="font-size: 13px; color: var(--text-muted);">${categoriesNames || 'No Category'}</td>
        <td>${p.weight}</td>
        <td>৳${p.price}</td>
        <td>
          ${p.discount > 0 ? `<span style="color: var(--success); font-weight: bold;">${p.discount}% OFF</span>` : 'None'}
          ${p.isSuperOffer ? `<br><span style="color: var(--warning-dark); font-size: 11px; font-weight: bold;">🔥 Super Offer</span>` : ''}
        </td>
        <td>
          <div style="display: flex; gap: 8px;">
            <button onclick="openProductModal('${p.id}')" class="action-btn-sm" title="Edit"><i class="fa fa-edit"></i></button>
            <button onclick="deleteProduct('${p.id}')" class="action-btn-danger-sm" title="Delete"><i class="fa fa-trash"></i></button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

// Add/Edit Product Modal triggers
window.openProductModal = function(productId = '') {
  document.getElementById("productModalOverlay").classList.add("active");
  const form = document.getElementById("productForm");
  form.reset();

  // Reset checkboxes
  const checkboxes = document.querySelectorAll("#productCategoriesCheckboxContainer input");
  checkboxes.forEach(cb => cb.checked = false);

  if (productId) {
    document.getElementById("productModalTitle").innerText = "📦 Edit Product Details";
    document.getElementById("editProductId").value = productId;
    
    const prod = adminProducts.find(p => p.id === productId);
    if (prod) {
      document.getElementById("prodName").value = prod.name;
      document.getElementById("prodWeight").value = prod.weight;
      document.getElementById("prodPrice").value = prod.price;
      document.getElementById("prodOldPrice").value = prod.oldPrice || prod.price;
      document.getElementById("prodDiscount").value = prod.discount || 0;
      document.getElementById("prodImage").value = prod.image;
      document.getElementById("prodIsSuperOffer").checked = prod.isSuperOffer || false;

      // Select checkboxes
      if (prod.categoryIds) {
        prod.categoryIds.forEach(cid => {
          const cb = document.querySelector(`#productCategoriesCheckboxContainer input[value="${cid}"]`);
          if (cb) cb.checked = true;
        });
      }
    }
  } else {
    document.getElementById("productModalTitle").innerText = "📦 Add New Product";
    document.getElementById("editProductId").value = "";
  }
};

window.closeProductModal = function() {
  document.getElementById("productModalOverlay").classList.remove("active");
};

// Delete product
window.deleteProduct = async function(productId) {
  if (!confirm("Are you sure you want to permanently delete this product?")) return;

  try {
    const res = await fetch(`/api/admin/products/${productId}`, {
      method: 'DELETE'
    });
    const data = await res.json();
    if (data.success) {
      alert("Product deleted successfully.");
      await loadProductsData();
      renderProductsTable();
    } else {
      alert("Failed to delete: " + data.error);
    }
  } catch (err) {
    console.error(err);
    alert("Server communications failed.");
  }
};

window.deleteOrderPlaceholder = function(orderId) {
  alert("Order management policy: Placed orders cannot be permanently deleted. Set status to 'Cancelled' instead.");
};
