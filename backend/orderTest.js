const cartListItems = [
  ["USA Unactivated SIM", 25, 2],
  ["PlayStation Gift Card", 100, 1],
  ["Netflix Premium Subscription", 60, 1],
  ["Amazon Gift Card", 50, 3],
  ["Spotify Gift Card", 30, 2]
];


const arrayOfProducts = cartListItems.map((item) => item[0]);
const orderData = {
  name: "David",
  email: "davido@gmail.com",
  items: arrayOfProducts, // Replace with your array of selected products
  amount: 1900, // Total amount in GHS
};

// Send order data to backend
fetch("https://novahub-backend.onrender.com/api/orders", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(orderData),
})
  .then((res) => res.json())
  .then((data) => {
    console.log("✅ Order saved:", data);
    alert("🧾 Order recorded successfully!");
  })
  .catch((err) => {
    console.error("❌ Failed to save order:", err);
    // alert("❌ Order not recorded, but payment was successful.");
  });
