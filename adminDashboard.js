// ✅ Auto-redirect if already logged in
const token = localStorage.getItem("adminToken");
if (!token) {
  alert("Access denied. Please log in first.");
  window.location.href = "admin.html"; // or your actual dashboard file
}

async function fetchProducts() {
  try {
    const res = await fetch("http://localhost:5000/api/products/all");
    const products = await res.json(); // this is an array of product objects

    console.log(products); // for debugging
    return products;
  } catch (err) {
    console.error("Failed to fetch products:", err);
    return [];
  }
}

// Usage
fetchProducts().then(products => {
  // Now you can loop through products or display them
  products.forEach(product => {
    console.log(product.name, product.price);
  });

  // or save them to a global variable
  window.allProducts = products;
});


const adminNameElement = document.getElementById("adminName");
const adminName = localStorage.getItem("adminUsername") || "Admin";

adminNameElement.textContent = adminName || "Admin"; // Fallback to "Admin" if not set

const cancelLogout = document.getElementById("cancelLogout")
const logoutButton = document.getElementById("logout")

logoutButton.addEventListener("click", function() {
    document.getElementsByClassName("logoutScreenPopup")[0].classList.remove("hidden")
})

cancelLogout.addEventListener("click", function() {
    document.getElementsByClassName("logoutScreenPopup")[0].classList.add("hidden")
})

const logout = function logout() {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUsername");
    window.location.href = "admin.html";
  }

const categoryDisplay = document.getElementById("categoryDisplay")
let currentCategory = "fS"
const categoriesOfProducts = ["fS", "gC", "vCC", "pC", "tPC", "s"]
const categories = document.getElementById("categories")

for (let item = 0; item < categories.children.length; item++) {
categories.children[item].addEventListener("click", () => {
    for (let index = 0; index < categories.children.length; index++) {
        const element = categories.children[index];
        element.style.backgroundColor = "transparent"
        element.style.color = "#000"
        categoryDisplay.children[index].classList.remove("show")

    }
    categories.children[item].style.backgroundColor = "#339998"
    categories.children[item].style.color = "#fff"
    currentCategory = categoriesOfProducts[item]
    categoryDisplay.children[item].classList.add("show")
})

}

