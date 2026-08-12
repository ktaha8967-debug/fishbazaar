// Fish Bazar User Authentication and Order History Handler

document.addEventListener("DOMContentLoaded", () => {
  initAuthUI();
});

// Current User State
let currentUser = JSON.parse(localStorage.getItem('fishbazar_user')) || null;

function initAuthUI() {
  // Inject Authentication and History Modals into body
  injectAuthModals();
  // Update Navbar Auth Sections
  updateNavbarAuth();
}

function updateNavbarAuth() {
  const authSections = document.querySelectorAll(".nav-auth-section");
  authSections.forEach(section => {
    if (currentUser) {
      section.innerHTML = `
        <span style="font-size: 13px; color: var(--text-main); margin-right: 10px;">Hi, <strong>${currentUser.username}</strong></span>
        <a href="javascript:void(0)" onclick="openOrderHistoryModal()" style="font-size: 13px; margin-right: 10px;"><i class="fa fa-history"></i> My Orders</a>
        <a href="javascript:void(0)" onclick="userLogout()" style="font-size: 13px; color: #ef5350;"><i class="fa fa-sign-out-alt"></i> Logout</a>
      `;
    } else {
      section.innerHTML = `
        <a href="javascript:void(0)" onclick="openAuthModal('login')"><i class="fa fa-user"></i> Login</a>
        <span style="margin: 0 4px; color: var(--border-color);">/</span>
        <a href="javascript:void(0)" onclick="openAuthModal('register')">Register</a>
      `;
    }
  });
}

// User Actions
window.openAuthModal = function(type = 'login') {
  const overlay = document.getElementById("authModalOverlay");
  const loginForm = document.getElementById("authLoginFormContainer");
  const registerForm = document.getElementById("authRegisterFormContainer");
  
  if (!overlay) return;
  overlay.classList.add("active");
  
  if (type === 'login') {
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
  } else {
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
  }
};

window.closeAuthModal = function() {
  const overlay = document.getElementById("authModalOverlay");
  if (overlay) overlay.classList.remove("active");
  // Reset error states
  document.getElementById("authLoginError").style.display = 'none';
  document.getElementById("authRegisterError").style.display = 'none';
};

window.switchAuthForm = function(type) {
  window.openAuthModal(type);
};

window.userLogout = function() {
  localStorage.removeItem('fishbazar_user');
  currentUser = null;
  updateNavbarAuth();
  // Reload order placement state if on checkout etc.
  window.location.reload();
};

// Injected Modal HTML
function injectAuthModals() {
  if (document.getElementById("authModalOverlay")) return;

  const styleTag = document.createElement("style");
  styleTag.innerHTML = `
    /* Auth Modal Specific Styles */
    .auth-form-toggle {
      display: flex;
      justify-content: center;
      margin-top: 15px;
      font-size: 13px;
      color: var(--text-muted);
    }
    .auth-form-toggle a {
      color: var(--primary);
      margin-left: 5px;
      font-weight: bold;
    }
    .history-modal-body {
      max-height: 400px;
      overflow-y: auto;
      margin-top: 15px;
    }
    .history-table {
      width: 100%;
      border-collapse: collapse;
      text-align: left;
      font-size: 13px;
    }
    .history-table th {
      padding: 10px;
      background-color: var(--bg-main);
      color: var(--text-muted);
      font-weight: 600;
      border-bottom: 1px solid var(--border-color);
    }
    .history-table td {
      padding: 12px 10px;
      border-bottom: 1px solid var(--border-color);
      vertical-align: middle;
    }
  `;
  document.head.appendChild(styleTag);

  // Injected modal wrappers
  const modalHTML = `
    <!-- User Login & Register Modal -->
    <div class="modal-overlay" id="authModalOverlay">
      <div class="checkout-modal" style="max-width: 400px;">
        <button class="modal-close-btn" onclick="closeAuthModal()">&times;</button>
        
        <!-- Login Form Container -->
        <div id="authLoginFormContainer">
          <h3 class="modal-title">🔑 User Login</h3>
          <form id="authLoginForm">
            <div class="form-group">
              <label class="form-label" for="authUsername">Username / Email *</label>
              <input type="text" id="authUsername" class="form-control" placeholder="Enter username" required>
            </div>
            <div class="form-group">
              <label class="form-label" for="authPassword">Password *</label>
              <input type="password" id="authPassword" class="form-control" placeholder="Enter password" required>
            </div>
            <div id="authLoginError" class="error-text" style="display: none; margin-bottom: 15px; font-size: 12px;"></div>
            <button type="submit" class="checkout-btn" style="border: none; width: 100%;">Log In</button>
            <div class="auth-form-toggle">
              Don't have an account? <a href="javascript:void(0)" onclick="switchAuthForm('register')">Register Now</a>
            </div>
          </form>
        </div>

        <!-- Register Form Container -->
        <div id="authRegisterFormContainer" style="display: none;">
          <h3 class="modal-title">📝 Create Account</h3>
          <form id="authRegisterForm">
            <div class="form-group">
              <label class="form-label" for="regUsername">Choose Username *</label>
              <input type="text" id="regUsername" class="form-control" placeholder="Letters and numbers only" pattern="[a-zA-Z0-9]{3,20}" title="3-20 characters, alphanumeric only" required>
            </div>
            <div class="form-group">
              <label class="form-label" for="regPassword">Password *</label>
              <input type="password" id="regPassword" class="form-control" placeholder="Min 6 characters" minlength="6" required>
            </div>
            <div id="authRegisterError" class="error-text" style="display: none; margin-bottom: 15px; font-size: 12px;"></div>
            <button type="submit" class="checkout-btn" style="border: none; width: 100%;">Register Account</button>
            <div class="auth-form-toggle">
              Already have an account? <a href="javascript:void(0)" onclick="switchAuthForm('login')">Log In</a>
            </div>
          </form>
        </div>

      </div>
    </div>

    <!-- User Order History Modal -->
    <div class="modal-overlay" id="historyModalOverlay">
      <div class="checkout-modal" style="max-width: 750px; width: 90%;">
        <button class="modal-close-btn" onclick="closeOrderHistoryModal()">&times;</button>
        <h3 class="modal-title">📦 Your Order History</h3>
        <div class="history-modal-body" id="historyModalBody">
          <!-- Loaded dynamically -->
        </div>
      </div>
    </div>
  `;

  const containerDiv = document.createElement("div");
  containerDiv.innerHTML = modalHTML;
  document.body.appendChild(containerDiv);

  // Set up authentication submit handlers
  setupAuthFormHandlers();
}

function setupAuthFormHandlers() {
  const loginForm = document.getElementById("authLoginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const username = document.getElementById("authUsername").value.trim();
      const password = document.getElementById("authPassword").value;
      const errorDiv = document.getElementById("authLoginError");

      try {
        const res = await fetch('/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password })
        });
        const data = await res.json();
        if (data.success) {
          currentUser = { username: data.username };
          localStorage.setItem('fishbazar_user', JSON.stringify(currentUser));
          closeAuthModal();
          updateNavbarAuth();
          
          // Toast or message
          alert(`Welcome back, ${data.username}!`);
        } else {
          errorDiv.innerText = data.error || "Login failed.";
          errorDiv.style.display = 'block';
        }
      } catch (err) {
        console.error(err);
        errorDiv.innerText = "Connection error. Please try again.";
        errorDiv.style.display = 'block';
      }
    });
  }

  const registerForm = document.getElementById("authRegisterForm");
  if (registerForm) {
    registerForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const username = document.getElementById("regUsername").value.trim();
      const password = document.getElementById("regPassword").value;
      const errorDiv = document.getElementById("authRegisterError");

      try {
        const res = await fetch('/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password })
        });
        const data = await res.json();
        if (data.success) {
          // Auto login after success registration
          currentUser = { username: data.username };
          localStorage.setItem('fishbazar_user', JSON.stringify(currentUser));
          closeAuthModal();
          updateNavbarAuth();
          
          alert(`Registration successful! Welcome to Fish Bazar, ${data.username}.`);
        } else {
          errorDiv.innerText = data.error || "Registration failed.";
          errorDiv.style.display = 'block';
        }
      } catch (err) {
        console.error(err);
        errorDiv.innerText = "Connection error. Please try again.";
        errorDiv.style.display = 'block';
      }
    });
  }
}

// Order History Operations
window.openOrderHistoryModal = async function() {
  if (!currentUser) {
    window.openAuthModal('login');
    return;
  }

  const overlay = document.getElementById("historyModalOverlay");
  const body = document.getElementById("historyModalBody");
  
  if (!overlay || !body) return;
  overlay.classList.add("active");
  body.innerHTML = '<p style="text-align: center; padding: 20px;">Fetching order records...</p>';

  try {
    const res = await fetch(`/api/orders/history?username=${encodeURIComponent(currentUser.username)}`);
    const orders = await res.json();
    
    if (orders.length === 0) {
      body.innerHTML = `
        <div style="text-align: center; padding: 30px;">
          <p style="font-size: 16px; font-weight: 500;">You haven't placed any orders yet!</p>
          <a href="products.html" onclick="closeOrderHistoryModal()" class="hero-btn" style="margin-top: 15px; display: inline-block;">Shop Fresh Fish</a>
        </div>
      `;
      return;
    }

    body.innerHTML = `
      <table class="history-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>Items</th>
            <th>Total Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          ${orders.map(o => {
            const dateStr = new Date(o.createdAt).toLocaleDateString();
            const itemsStr = o.items.map(i => `${i.productName} (x${i.quantity})`).join(', ');
            return `
              <tr>
                <td><strong>${o.orderId}</strong></td>
                <td>${dateStr}</td>
                <td style="max-width: 250px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${itemsStr}">${itemsStr}</td>
                <td><strong>৳${o.total}</strong></td>
                <td><span class="status-badge ${o.status.toLowerCase()}">${o.status}</span></td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    `;
  } catch (err) {
    console.error(err);
    body.innerHTML = '<p style="text-align: center; color: var(--danger); padding: 20px;">Failed to load order history. Try again later.</p>';
  }
};

window.closeOrderHistoryModal = function() {
  const overlay = document.getElementById("historyModalOverlay");
  if (overlay) overlay.classList.remove("active");
};
