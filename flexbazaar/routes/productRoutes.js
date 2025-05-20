const express = require('express');
const router = express.Router();

// This data is now sourced from script.js in the public folder for frontend display.
// For the backend API, we can maintain a separate, potentially more detailed or secure, list.
const sampleProducts = [
  { id: 1, name: "Golden Widget API", price: "29.99", description: "A finely crafted golden widget, essential for any connoisseur.", imagePlaceholder: "https://via.placeholder.com/250/FFD700/000000?Text=API+GoldenWidget" },
  { id: 2, name: "Luxury Gear API", price: "199.50", description: "Top-tier luxury gear, unparalleled in quality and design.", imagePlaceholder: "https://via.placeholder.com/250/B8860B/FFFFFF?Text=API+LuxuryGear" },
  { id: 3, name: "Aurum Dust API", price: "75.00", description: "Pure aurum dust, shimmering with untold potential.", imagePlaceholder: "https://via.placeholder.com/250/FFDF00/000000?Text=API+AurumDust" },
  { id: 4, name: "Gilded Trinket API", price: "15.99", description: "A charming gilded trinket, perfect for any occasion.", imagePlaceholder: "https://via.placeholder.com/250/CFB53B/FFFFFF?Text=API+GildedTrinket" }
];

// GET /api/products - Returns all products
router.get('/', (req, res) => {
  res.status(200).json(sampleProducts);
});

module.exports = router;
