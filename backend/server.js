// server.js
const express = require("express");
const cors = require("cors");
require("dotenv").config(); // to load .env variables
const connectDB = require("./config/db");

const app = express();

connectDB(); // Connect to MongoDB

// Middleware
app.use(cors());
app.use(express.json()); // to parse JSON body from requests

const adminRoutes = require("./routes/adminRoutes");
app.use("/api/admin", adminRoutes);

const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);

const orderRoutes = require("./routes/ordersRoutes");
app.use("/api/orders", orderRoutes);



// Simple test route
app.get("/", (req, res) => {
  res.send("Backend is working 👌");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
