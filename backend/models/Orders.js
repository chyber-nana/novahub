const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    userName: { type: String, required: true }, // Name of the user who placed the order
    userEmail: { type: String, required: true }, // Email of the user who placed the order
    name: { type: String, required: true },
    type: { type: String, required: true }, // e.g. 'sim', 'gift card', 'prepaid'
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true }, // Reference to the Product model
    quantity: { type: Number, required: true, min: 1 }, // Quantity of the product ordered
    price: { type: Number, required: true }, // Price per unit of the product
    totalPrice: { type: Number, required: true },
    status: { type: String, default: "pending" } // e.g. 'pending', 'completed', 'cancelled'
}, { timestamps: true });

module.exports = mongoose.model("Orders", productSchema);
