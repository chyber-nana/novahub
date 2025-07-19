// ✅ Auto-redirect if already logged in
const token = sessionStorage.getItem("adminToken");
let currentlyEditingProductName = "";
if (!token) {
  alert("Access denied. Please log in first.");
  window.location.href = "admin.html"; // or your actual dashboard file
}

const loader = document.getElementById("loader");
function logout() {
  // Clear both sessionStorage and localStorage (for safety)
  sessionStorage.removeItem("adminToken");
  sessionStorage.removeItem("adminUsername");

  localStorage.removeItem("adminToken");
  localStorage.removeItem("adminUsername");

  // Redirect to login page
  window.location.href = "admin.html";
}

let inactivityTimer;

function startInactivityTimer() {
  clearTimeout(inactivityTimer); // Clear existing timer if any
  inactivityTimer = setTimeout(() => {
    // alert("You've been logged out due to inactivity.");
    logout(); // Your logout function
  }, 1 * 60 * 1000); // 30 minutes in milliseconds
}

// List of events that count as activity
["click", "mousemove", "keydown", "scroll", "touchstart"].forEach((event) => {
  window.addEventListener(event, startInactivityTimer);
});

startInactivityTimer();

function getAuthHeaders() {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

async function fetchProducts() {
  try {
    const res = await fetch(
      "https://novahub-backend.onrender.com/api/products/all"
    );
    const resOrders = await fetch(
      "https://novahub-backend.onrender.com/api/orders/all"
    );
    const orders = await resOrders.json();
    const products = await res.json(); // this is an array of product objects

    console.log(products); // for debugging
    console.log(orders); // for debugging
    return [products, orders];
  } catch (err) {
    console.error("Failed to fetch products:", err);
    return [];
  }
}

async function addProduct(productData) {
  try {
    const res = await fetch(
      "https://novahub-backend.onrender.com/api/products/add",
      {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify(productData),
      }
    );

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Failed to add product");

    alert("✅ Product added!");
    console.log(data.product);
  } catch (err) {
    console.error("Add Product Error:", err);
    alert("❌ " + err.message);
  }
  editForm.classList.add("hidden");
}

async function updateProduct(productId, updatedData) {
  try {
    const formData = new FormData();

    // Append all fields from updatedData (except image)
    for (const key in updatedData) {
      if (key !== "image") {
        formData.append(key, updatedData[key]);
      }
    }

    // Only append image if it's a File object
    if (updatedData.image instanceof File) {
      formData.append("image", updatedData.image); // must match your multer field name
    }

    const res = await fetch(
      `https://novahub-backend.onrender.com/api/products/${productId}`,
      {
        method: "PUT",
        headers: getAuthHeaders(), // make sure this doesn't set Content-Type manually!
        body: formData,
      }
    );

    const contentType = res.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      const text = await res.text();
      throw new Error(`Expected JSON, got: ${text.substring(0, 100)}...`);
    }

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Failed to update");

    alert("✏️ Product updated!");
    console.log(data.product);
  } catch (err) {
    console.error("Update Error:", err);
    alert("❌ " + err.message);
    throw err;
  }
}


async function deleteProduct(productId) {
  try {
    const res = await fetch(
      `https://novahub-backend.onrender.com/api/products/${productId}`,
      {
        method: "DELETE",
        headers: getAuthHeaders(),
      }
    );

    // Add the error handling check
    const contentType = res.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      const text = await res.text();
      throw new Error(`Expected JSON, got: ${text.substring(0, 100)}...`);
    }

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Failed to delete");

    alert("🗑️ Product deleted");
    console.log(data);
  } catch (err) {
    console.error("Delete Error:", err);
    alert("❌ " + err.message);
    throw err;
  }
}

async function getProductIdByName(name) {
  const products = await fetchProducts(); // Fetch all from DB
  const trimmedName = name.trim().toLowerCase();

  const found = products[0].find(
    (p) => p.ItemName.trim().toLowerCase() === trimmedName
  );
  console.log("Looking for:", trimmedName);
  products[0].forEach((p) => console.log("→", p.ItemName.toLowerCase()));

  if (found) {
    console.log("✅ Found ID:", found._id);
    return found._id;
  } else {
    console.warn("❌ Product not found with name:", name);
    return null;
  }
}

const submitProduct = document.getElementById("submitProduct");
const cancelAddProduct = document.getElementById("cancelAddProduct");
const addProductButton = document.getElementById("addProductButton");

addProductButton.addEventListener("click", () => {
  document.querySelector(".formContainer").classList.remove("hidden");
});

cancelAddProduct.addEventListener("click", () => {
  document.querySelector(".formContainer").classList.add("hidden");
});

function capitalizeWords(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const addProductForm = document.getElementById("addProductForm");
const editProductForm = document.getElementById("editProductForm");

addProductForm.addEventListener("submit", async function (e) {
  e.preventDefault();
  const productName = document.getElementById("productName");
  const productPrice = document.getElementById("productPrice");
  const productCategory = document.getElementById("productCategory");
  const productStock = document.getElementById("productStock");

  const productObject = {
    ItemName: productName.value,
    ItemCategory: productCategory.value.toLowerCase(),
    Price: parseFloat(productPrice.value.split("-")[0]) || 0, // takes min price
    Stock: parseInt(productStock.value, 10) || 0,
    Status:
      productStatus.value.toLowerCase() === "in stock"
        ? "available"
        : "unavailable",
    Notes: productNotes.value || "",
    InStock: productInStock.value.toLowerCase() === "true",
  };

  addProduct(productObject);
});

const productsList = document.querySelector(".productsList");
const categoryItemName = document.querySelector(".categoryItemName");
const editProductButton = document.getElementById("editProductButton");
const editForm = document.getElementById("editProductForm");
const ordersList = document.querySelector(".newOrdersContainer");
// Usage
let numberOfProducts = 0;
const loadProducts = () => {
  productsList.innerHTML = `
                  <div class="loader-overlay" id="loader">
                                                          <div class="spinner"></div>
                                                       </div>
  `;

  loader.style.display = "flex";
  fetchProducts().then((products) => {
    // Now you can loop through products or display them
    console.log("Here");
    numberOfProducts = 0; // Reset the count for each load
    document.querySelectorAll(".loader-overlay").forEach((el) => el.remove());
    products[1].forEach((order) => {
      // if (order.orderStatus === "active") {
      ordersList.innerHTML += `                                                            
        <h3>👤 ${order.userName}</h3>
        <p>📧 <strong>Email:</strong> ${order.userEmail}</p>
        <p>🛍️ <strong>Products:</strong><br> ${order.productsNames
          .map((p) => `• ${p}`)
          .join("<br>")}</p>
        <p>💵 <strong>Total:</strong> GHS ${order.totalPrice}</p>
        `;
      // }
    });
    products[0].forEach((product) => {
      if (currentCategory.toLowerCase() === product.ItemCategory) {
        console.log("kok");
        // Remove any loader-overlay elements before displaying products
        productsList.innerHTML += `
                                                                <div class="product">
                                                              <div class="productDetails">
                                                                  <h3 class="pName">${product.ItemName}</h3>
                                                                  <p>Price: $${product.Price}</p>
                                                                  <button class="editProductButton" title="Edit">
                                                                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                                                                  </button>
                                                                  <button class="deleteProductButton" title="Delete">
                                                                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                                                                  </button>
                                                              </div>
                                                          </div>
        `;
      }
    });
    document.querySelector(".categoryItemName").textContent = currentCategory;
    document.querySelector(".categoryItemName").textContent +=
      " " + document.querySelectorAll(".product").length;

    // After products are rendered
    document.querySelectorAll(".deleteProductButton").forEach((button) => {
      button.addEventListener("click", async function () {
        const productCard = this.closest(".product");
        const productName = productCard.querySelector(".pName").textContent;

        // Confirm and delete logic here
        if (confirm(`Are you sure you want to delete "${productName}"?`)) {
          // Add backend deletion logic if needed
          let id = await getProductIdByName(productName);
          deleteProduct(id);
          loadProducts();
        }
      });
    });

    document.querySelectorAll(".editProductButton").forEach((button) => {
      button.addEventListener("click", function () {
        const productCard = this.closest(".product");
        const productName = productCard.querySelector(".pName").textContent;
        const foundProduct = products[0].find(
          (product) => product.ItemName === productName
        );

        const productNameBox = editForm.querySelector("#eproductName");
        const productPrice = editForm.querySelector("#eproductPrice");
        console.log(
          "✅ Setting category to:",
          capitalizeWords(foundProduct.ItemCategory)
        );
        const productCategory = editForm.querySelector("#eproductCategory");
        const productStock = editForm.querySelector("#eproductStock");
        const productInStock = editForm.querySelector("#eproductInStock");
        const productNotes = editForm.querySelector("#eproductNotes");
        currentlyEditingProductName = productName;

        if (foundProduct) {
          productNameBox.value = foundProduct.ItemName;
          productPrice.value = foundProduct.Price;
          productCategory.value = capitalizeWords(foundProduct.ItemCategory);
          productStock.value = foundProduct.Stock;
          productInStock.value = foundProduct.InStock;
          productNotes.value = foundProduct.Notes;
        } else {
          console.warn("Product not found");
        }

        editForm.parentElement.classList.remove("hidden");
      });
    });

    editForm.addEventListener("submit", async function (e) {
      e.preventDefault();

      const productName = document.querySelector("#eproductName").value;
      const productPrice = document.querySelector("#eproductPrice").value;
      const productCategory = document
        .querySelector("#eproductCategory")
        .value.toLowerCase();
      const productStock = document.querySelector("#eproductStock").value;
      const productStatus = document.querySelector("#eproductStatus").value;
      const productNotes = document.querySelector("#eproductNotes").value;
      const productInStock = document.querySelector("#eproductInStock").value;
      const imageFile = document.querySelector("#eproductImage").files[0];

      const id = await getProductIdByName(productName);
      if (!id) {
        alert("❌ Could not find product ID.");
        return;
      }

      const formData = new FormData();
      formData.append("ItemName", productName);
      formData.append("ItemCategory", productCategory);
      formData.append("Price", parseFloat(productPrice.split("-")[0]) || 0);
      formData.append("Stock", parseInt(productStock, 10) || 0);
      formData.append(
        "Status",
        productStatus.toLowerCase() === "in stock" ? "available" : "unavailable"
      );
      formData.append("Notes", productNotes || "");
      formData.append("InStock", productInStock.toLowerCase() === "true");

      // Only append image if a new one was selected
      if (imageFile) {
        formData.append("image", imageFile);
      }

      try {
        const res = await fetch(
          `https://novahub-backend.onrender.com/api/products/${id}`,
          {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${token}`, // 👈 DON'T set Content-Type — let browser set it automatically
            },
            body: formData,
          }
        );

        const contentType = res.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          const text = await res.text();
          throw new Error(`Expected JSON, got: ${text.substring(0, 100)}...`);
        }

        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Failed to update");

        alert("✏️ Product updated!");
        loadProducts();
      } catch (err) {
        console.error("Update Error:", err);
        alert("❌ " + err.message);
      }
    });

    // or save them to a global variable
    window.allProducts = products[0];
  });
};

const editCancelButton = document.getElementById("cancelEditProduct");

editCancelButton.addEventListener("click", () => {
  editForm.parentElement.classList.add("hidden");
});

const adminNameElement = document.getElementById("adminName");
const adminName = localStorage.getItem("adminUsername") || "Admin";
const currentPage = document.querySelector(".currentPage");
const sideBar = document.querySelector(".sideBar");
let menuShow = false;
currentPage.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent the click from propagating to the window
  if (!menuShow) {
    currentPage.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
        <span>Dashboard</span>
        `;
    document.querySelector(".sideBar").style.left = "0";
    menuShow = true;
  }
});

window.addEventListener("click", (e) => {
  currentPage.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
                <path d="M120-680v-80h720v80H120Zm0 480v-80h720v80H120Zm0-240v-80h720v80H120Z"/>
            </svg>
            <span>Dashboard</span>
        `;
  sideBar.style.left = "-500px";
  menuShow = false;
});

adminNameElement.textContent = adminName || "Admin"; // Fallback to "Admin" if not set
loadProducts();
const cancelLogout = document.getElementById("cancelLogout");
const logoutButton = document.getElementById("logout");

logoutButton.addEventListener("click", function () {
  document
    .getElementsByClassName("logoutScreenPopup")[0]
    .classList.remove("hidden");
});

cancelLogout.addEventListener("click", function () {
  document
    .getElementsByClassName("logoutScreenPopup")[0]
    .classList.add("hidden");
});

const categoryDisplay = document.getElementById("categoryDisplay");
let currentCategory = "Foreign Sim Cards";
const categoriesOfProducts = [
  "Foreign Sim Cards",
  "Gift Cards",
  "Virtual Credit Cards",
  "Payment Cards",
  "Telco Pre-paid Cards",
  "Subscriptions",
];
const categories = document.getElementById("categories1");

for (let item = 0; item < categories.children.length; item++) {
  categories.children[item].addEventListener("click", () => {
    for (let index = 0; index < categories.children.length; index++) {
      const element = categories.children[index];
      element.classList.remove("selected");
      // categoryDisplay.children[index].classList.remove("show")
    }
    categories.children[item].classList.add("selected");
    currentCategory = categoriesOfProducts[item];
    categoryItemName.textContent = currentCategory;
    loadProducts();
    // categoryDisplay.children[item].classList.add("show")
  });
}
