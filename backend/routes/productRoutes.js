const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

// Add a new product
router.post("/add", async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json({ message: "Product added", product });
  } catch (err) {
    res.status(500).json({ message: "Error adding product", error: err.message });
  }
});

// Get all products
router.get("/all", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Error fetching products" });
  }
});

module.exports = router;
