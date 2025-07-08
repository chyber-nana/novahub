const express = require("express");
const Order = require("../models/Orders");

const router = express.Router();

// Add a new order
router.post("/add", async (req, res) => {
  try {
    const product = new Order(req.body);
    await product.save();
    res.status(201).json({ message: "Order added", order });
  } catch (err) {
    res.status(500).json({ message: "Error adding order", error: err.message });
  }
});

// Get all order
router.get("/all", async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Error fetching orders" });
  }
});

module.exports = router;
