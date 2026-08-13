// FreshCut Clone - PostgreSQL Sourced Application Logic
let products = [];
let categories = [];

// App State Management
let cart = JSON.parse(localStorage.getItem('freshcut_cart')) || [];
let activeCategory = 'all';
let searchQuery = '';
let priceFilter = 5000;
let superOfferFilter = false;

// DOM Selectors
document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

async function initApp() {
  await fetchCategories();
  
  const isCatalogPage = window.location.pathname.includes('products.html');
  if (isCatalogPage) {
    // Parse URL params for pre-selected category
    const urlParams = new URLSearchParams(window.location.search);
    const catParam = urlParams.get('category');
    if (catParam) {
      activeCategory = catParam;
    }
    await fetchProducts();
    setupCatalogFilters();
  } else {
    // Home Page - load all products and render in categorized sections
    await fetchHomeProducts();
  }
  
  updateCartUI();
  setupEventListeners();
}

// Fetch Categories from Database API
async function fetchCategories() {
  try {
    const res = await fetch('/api/categories');
    categories = await res.json();
    renderCategories();
  } catch (err) {
    console.warn("Express API failed, falling back to local data.js:", err);
    if (typeof categoriesData !== 'undefined') {
      categories = categoriesData;
      renderCategories();
    }
  }
}

// Fetch Products for the Grid (with filters)
async function fetchProducts() {
  try {
    const url = `/api/products?category=${activeCategory}&search=${encodeURIComponent(searchQuery)}&max_price=${priceFilter}&super_offer=${superOfferFilter}`;
    const res = await fetch(url);
    products = await res.json();
    renderProducts();
  } catch (err) {
    console.warn("Express API failed, falling back to local data.js:", err);
    if (typeof productsData !== 'undefined') {
      // Filter productsData locally
      products = productsData.filter(prod => {
        const matchesCategory = activeCategory === 'all' || (prod.categoryIds && prod.categoryIds.includes(activeCategory));
        const matchesSearch = prod.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesPrice = prod.price <= priceFilter;
        const matchesSuperOffer = !superOfferFilter || prod.isSuperOffer;
        return matchesCategory && matchesSearch && matchesPrice && matchesSuperOffer;
      });
      renderProducts();
    }
  }
}

// Fetch Products for Home Page sections
async function fetchHomeProducts() {
  try {
    const res = await fetch('/api/products');
    const allProducts = await res.json();
    renderHomeCategorizedSections(allProducts);
  } catch (err) {
    console.warn("Express API failed, falling back to local productsData for Home:", err);
    if (typeof productsData !== 'undefined') {
      renderHomeCategorizedSections(productsData);
    }
  }
}

// Render Categorized Sections on Home Page (limit to top 8 per category for professionalism)
function renderHomeCategorizedSections(allProducts) {
  const container = document.getElementById("homeCategorizedContainer");
  if (!container) return;

  let html = '';

  // Filter and display Super Offers first if any
  const superOffers = allProducts.filter(p => p.isSuperOffer).slice(0, 8);
  if (superOffers.length > 0) {
    html += `
      <div class="home-section-row" style="margin-bottom: 30px;">
        <div class="section-title-container">
          <h2 class="section-title">🔥 Super Hot Offers</h2>
          <a href="products.html" class="view-all-link">View All <i class="fa fa-angle-right"></i></a>
        </div>
        <div class="products-grid">
          ${superOffers.map(prod => renderSingleProductCard(prod)).join('')}
        </div>
      </div>
    `;
  }

  // Group other products by their categories
  categories.forEach(cat => {
    const catProducts = allProducts.filter(p => p.categoryIds && p.categoryIds.includes(cat.id)).slice(0, 8);
    if (catProducts.length > 0) {
      html += `
        <div class="home-section-row" style="margin-bottom: 30px; margin-top: 30px;">
          <div class="section-title-container">
            <h2 class="section-title">${cat.name}</h2>
            <a href="products.html?category=${cat.id}" class="view-all-link">View All <i class="fa fa-angle-right"></i></a>
          </div>
          <div class="products-grid">
            ${catProducts.map(prod => renderSingleProductCard(prod)).join('')}
          </div>
        </div>
      `;
    }
  });

  container.innerHTML = html;
}

// Render Categories Grid (horizontal icon menu)
function renderCategories() {
  const container = document.getElementById("categoriesContainer");
  if (!container) return;

  const allCat = { id: 'all', name: 'All Products', logo: null };
  const categoriesList = [allCat, ...categories];

  container.innerHTML = categoriesList.map(cat => `
    <div class="category-card ${activeCategory === cat.id ? 'active' : ''}" onclick="filterByCategory('${cat.id}')">
      <span class="category-icon">${cat.id === 'all' ? '🐟' : '📦'}</span>
      <h3>${cat.name}</h3>
    </div>
  `).join('');
}

// Render Catalog Grid (for products.html)
function renderProducts() {
  const container = document.getElementById("productsGrid");
  if (!container) return;

  if (products.length === 0) {
    container.innerHTML = `
      <div class="empty-cart-message" style="grid-column: 1 / -1;">
        <p style="font-size: 18px; font-weight: bold;">No products match your search/filter parameters.</p>
        <button onclick="clearFilters()" class="hero-btn" style="margin-top: 15px;">Reset Filters</button>
      </div>
    `;
    return;
  }

  container.innerHTML = products.map(prod => renderSingleProductCard(prod)).join('');
}


// Helper to render a single product card
function renderSingleProductCard(prod) {
  return `
    <div class="product-card">
      ${prod.discount > 0 ? `<span class="badge-discount">${prod.discount}% OFF</span>` : ''}
      <div class="product-img-box">
        <img src="${prod.image}" alt="${prod.name}" loading="lazy">
      </div>
      <div class="product-content">
        <h3 class="product-title" title="${prod.name}">${prod.name}</h3>
        <p class="product-weight">⚖️ Unit: ${prod.weight}</p>
        <div class="price-box">
          <span class="current-price">৳${prod.price}</span>
          ${prod.oldPrice > prod.price ? `<span class="old-price">৳${prod.oldPrice}</span>` : ''}
        </div>
        <button class="add-to-cart-btn" onclick="addToCart('${prod.id}')">
          <i class="fa fa-shopping-cart"></i> Add to Cart
        </button>
      </div>
    </div>
  `;
}

// Shopping Cart Actions
window.addToCart = async function(productId) {
  let product = products.find(p => p.id === productId);
  
  // If product not found in current list (Home page), fetch it from all products API
  if (!product) {
    try {
      const res = await fetch('/api/products');
      const all = await res.json();
      product = all.find(p => p.id === productId);
    } catch (e) {
      console.error(e);
    }
  }

  if (!product) return;

  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart();
  updateCartUI();
  openCartDrawer();
};

window.removeFromCart = function(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartUI();
};

window.changeQuantity = function(productId, delta) {
  const item = cart.find(item => item.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(productId);
  } else {
    saveCart();
    updateCartUI();
  }
};

function saveCart() {
  localStorage.setItem('freshcut_cart', JSON.stringify(cart));
}

// Update Cart DOM
function updateCartUI() {
  const cartBadges = document.querySelectorAll(".cart-count-badge");
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  cartBadges.forEach(badge => {
    badge.innerText = totalItems;
  });

  const popupCart = document.getElementById("popupCart");
  if (popupCart) {
    if (totalItems > 0) {
      popupCart.style.display = 'flex';
      popupCart.innerHTML = `🛒 ${totalItems} Items - ৳${getCartSubtotal()}`;
    } else {
      popupCart.style.display = 'none';
    }
  }

  const container = document.getElementById("cartItemsContainer");
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart-message">
        <p>Your shopping cart is empty!</p>
        <p style="font-size: 13px; margin-top: 5px;">Add premium fresh fish to start cooking.</p>
      </div>
    `;
    document.getElementById("cartSubtotalText").innerText = "৳0";
    document.getElementById("cartTotalText").innerText = "৳0";
    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-details">
        <h4 class="cart-item-title">${item.name}</h4>
        <span class="cart-item-price">৳${item.price}</span>
        <div class="quantity-controller">
          <button class="qty-btn" onclick="changeQuantity('${item.id}', -1)">-</button>
          <span class="qty-val">${item.quantity}</span>
          <button class="qty-btn" onclick="changeQuantity('${item.id}', 1)">+</button>
        </div>
      </div>
      <button class="cart-remove-item" onclick="removeFromCart('${item.id}')">🗑️</button>
    </div>
  `).join('');

  const subtotal = getCartSubtotal();
  const delivery = subtotal > 1500 ? 0 : 80;
  document.getElementById("cartSubtotalText").innerText = `৳${subtotal}`;
  document.getElementById("cartDeliveryChargeText").innerText = delivery === 0 ? "FREE" : `৳${delivery}`;
  document.getElementById("cartTotalText").innerText = `৳${subtotal + delivery}`;
}

function getCartSubtotal() {
  return cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
}

// Category filter click handler
window.filterByCategory = function(catId) {
  const isCatalogPage = window.location.pathname.includes('products.html');
  if (isCatalogPage) {
    activeCategory = catId;
    fetchProducts();
    renderCategories();
  } else {
    // Redirect to products page with category selection query
    window.location.href = `products.html?category=${catId}`;
  }
};

window.clearFilters = function() {
  activeCategory = 'all';
  searchQuery = '';
  priceFilter = 5000;
  superOfferFilter = false;
  
  const searchInputs = document.querySelectorAll(".search-input");
  searchInputs.forEach(i => i.value = '');
  
  const priceSlider = document.getElementById("priceSlider");
  if (priceSlider) priceSlider.value = 5000;
  
  const priceDisplay = document.getElementById("priceDisplay");
  if (priceDisplay) priceDisplay.innerText = "5000 BDT";

  fetchProducts();
  renderCategories();
};

window.openCartDrawer = function() {
  document.getElementById("cartDrawerOverlay").classList.add("active");
  document.getElementById("cartDrawer").classList.add("active");
};

window.closeCartDrawer = function() {
  document.getElementById("cartDrawerOverlay").classList.remove("active");
  document.getElementById("cartDrawer").classList.remove("active");
};

window.openCheckoutModal = function() {
  if (cart.length === 0) {
    alert("Please add items to your cart first.");
    return;
  }
  closeCartDrawer();
  const modal = document.getElementById("checkoutModalOverlay");
  modal.classList.add("active");

  // Render Order Summary
  const subtotal = getCartSubtotal();
  const delivery = subtotal > 1500 ? 0 : 80;
  document.getElementById("summarySubtotal").innerText = `৳${subtotal}`;
  document.getElementById("summaryDelivery").innerText = delivery === 0 ? "FREE" : `৳${delivery}`;
  document.getElementById("summaryTotal").innerText = `৳${subtotal + delivery}`;
};

window.closeCheckoutModal = function() {
  document.getElementById("checkoutModalOverlay").classList.remove("active");
};

// Set up UI sliders/filters
function setupCatalogFilters() {
  const priceSlider = document.getElementById("priceSlider");
  const priceDisplay = document.getElementById("priceDisplay");
  if (priceSlider && priceDisplay) {
    priceSlider.value = priceFilter;
    priceDisplay.innerText = `${priceFilter} BDT`;
  }
}

// Event Listeners setup
function setupEventListeners() {
  // Mobile search form
  const mobileSearchForm = document.getElementById("mobileSearchForm");
  if (mobileSearchForm) {
    mobileSearchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      searchQuery = mobileSearchForm.querySelector("input").value;
      const isCatalogPage = window.location.pathname.includes('products.html');
      if (isCatalogPage) {
        fetchProducts();
      } else {
        window.location.href = `products.html?search=${encodeURIComponent(searchQuery)}`;
      }
    });
  }

  // Desktop search forms
  const desktopSearchForms = document.querySelectorAll(".search-form");
  desktopSearchForms.forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      searchQuery = form.querySelector("input").value;
      const isCatalogPage = window.location.pathname.includes('products.html');
      if (isCatalogPage) {
        fetchProducts();
      } else {
        window.location.href = `products.html?search=${encodeURIComponent(searchQuery)}`;
      }
    });
    form.querySelector("input").addEventListener("input", (e) => {
      searchQuery = e.target.value;
      if (window.location.pathname.includes('products.html')) {
        fetchProducts();
      }
    });
  });

  // Price Range Slider
  const priceSlider = document.getElementById("priceSlider");
  const priceDisplay = document.getElementById("priceDisplay");
  if (priceSlider && priceDisplay) {
    priceSlider.addEventListener("input", (e) => {
      priceFilter = parseInt(e.target.value);
      priceDisplay.innerText = `${priceFilter} BDT`;
      fetchProducts();
    });
  }

  // Checkout Payment Selection
  const paymentCards = document.querySelectorAll(".payment-card");
  paymentCards.forEach(card => {
    card.addEventListener("click", () => {
      paymentCards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");
    });
  });

  // Checkout Form Submission (Sends to PostgreSQL API)
  const checkoutForm = document.getElementById("checkoutForm");
  if (checkoutForm) {
    checkoutForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const customerName = document.getElementById("customerName").value;
      const customerPhone = document.getElementById("customerPhone").value;
      const customerAddress = document.getElementById("customerAddress").value;
      const activePayment = document.querySelector(".payment-card.active").innerText;
      
      const loggedInUser = JSON.parse(localStorage.getItem('freshcut_user'));
      const orderPayload = {
        customerName,
        customerPhone,
        customerAddress,
        paymentMethod: activePayment,
        username: loggedInUser ? loggedInUser.username : null,
        cartItems: cart.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity
        }))
      };

      try {
        const res = await fetch('/api/orders', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(orderPayload)
        });
        
        const responseData = await res.json();
        
        if (responseData.success) {
          // Render Order Success Screen inside Modal
          const modalContent = document.querySelector(".checkout-modal");
          modalContent.innerHTML = `
            <div style="text-align: center; padding: 30px 10px;">
              <span style="font-size: 60px; display: block; margin-bottom: 15px;">🎉</span>
              <h2 style="color: var(--primary-dark); font-weight: bold; margin-bottom: 10px;">Order Placed!</h2>
              <p style="margin-bottom: 20px;">Thank you for shopping at FreshCut. Your order has been securely saved in PostgreSQL.</p>
              
              <div style="background-color: var(--bg-main); padding: 15px; border-radius: var(--radius-sm); text-align: left; margin-bottom: 25px;">
                <p><strong>Order Database ID:</strong> ${responseData.orderId}</p>
                <p><strong>Recipient Name:</strong> ${customerName}</p>
                <p><strong>Mobile Number:</strong> ${customerPhone}</p>
                <p><strong>Delivery Address:</strong> ${customerAddress}</p>
                <p><strong>Payment Method:</strong> ${activePayment}</p>
                <p style="border-top: 1px dashed var(--border-color); margin-top: 10px; padding-top: 10px;">
                  <strong>Total Paid Amount:</strong> ৳${responseData.total}
                </p>
              </div>
              
              <button onclick="resetShop()" class="hero-btn" style="width: 100%;">Continue Shopping</button>
            </div>
          `;
        } else {
          alert("Order failed: " + responseData.error);
        }
      } catch (err) {
        console.error(err);
        alert("Failed to submit order to database.");
      }
    });
  }
}

// Reset Shop State
window.resetShop = function() {
  cart = [];
  saveCart();
  updateCartUI();
  closeCheckoutModal();
  window.location.reload();
};
