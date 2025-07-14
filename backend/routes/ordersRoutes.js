const express = require("express");
const Order = require("./models/Orders");

const router = express.Router();

// Add a new order
router.post("/add", async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");
    const product = new Order(req.body);
    await product.save();
    res.status(201).json({ message: "Order added", order });
  } catch (err) {
    res.status(500).json({ message: "Error adding order", error: err.message });
  }
});

// Example: routes/ordersRoutes.js
router.post("/", async (req, res) => {
  const newOrder = new Order({
    email: req.body.email,
    items: req.body.items,
    amount: req.body.amount,
    reference: req.body.reference,
    date: Date.now(),
  });

  try {
    const saved = await newOrder.save();
    res.status(201).json({ message: "Order saved", order: saved });
  } catch (err) {
    res.status(500).json({ message: "Error saving order", error: err.message });
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
