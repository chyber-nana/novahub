const express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const Product = require("../models/Product");

const router = express.Router();

// Configure Multer for memory storage
const upload = multer({ storage: multer.memoryStorage() });

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

// 🔼 Add a new product with image upload
router.put("/:id", upload.single("ImageURL"), async (req, res) => {
  console.log("🛠️ Update route hit");
  console.log("Body:", req.body);
  console.log("File:", req.file);

  try {
    const updateData = { ...req.body };

    // 🔄 If new image uploaded, re-upload to Cloudinary
    if (req.file) {
      const uploadResult = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "novahub" },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );
        stream.end(req.file.buffer);
      });

      updateData.ImageURL = uploadResult.secure_url; // Use proper field name
    }

    const updated = await Product.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });

    if (!updated) return res.status(404).json({ message: "Product not found" });

    res.json({ message: "✅ Product updated", product: updated });
  } catch (err) {
    res.status(500).json({ message: "❌ Server error", error: err.message });
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

// 🔄 Update a product by ID (including optional image update)
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const updateData = { ...req.body };

    if (req.file && req.file.path) {
      updateData.ImageURL = req.file.path; // Update image only if a new one is provided
    }

    const updated = await Product.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });

    if (!updated) return res.status(404).json({ message: "Product not found" });

    res.json({ message: "Product updated", product: updated });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// Delete a product by ID
router.delete("/:id", async (req, res) => {
  const productId = req.params.id;
  console.log("🧹 DELETE request for:", productId);

  try {
    const deleted = await Product.findByIdAndDelete(productId);

    if (!deleted) {
      console.warn("❌ No product found to delete");
      return res.status(404).json({ message: "Product not found" });
    }

    console.log("✅ Deleted:", deleted.ItemName);
    res.json({ message: "Product deleted", product: deleted });
  } catch (err) {
    console.error("🔥 DELETE Error:", err.message);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;
