const express = require('express');
const path = require('path'); // Required for serving HTML files

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware Setup
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from 'public'
app.use(express.json()); // Enable JSON request body parsing
app.use(express.urlencoded({ extended: true })); // Enable URL-encoded request body parsing

// Import API routes
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');

// Use API routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

// HTML Serving Routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'index.html')));
app.get('/products', (req, res) => res.sendFile(path.join(__dirname, 'views', 'products.html')));
app.get('/cart', (req, res) => res.sendFile(path.join(__dirname, 'views', 'cart.html')));
app.get('/checkout', (req, res) => res.sendFile(path.join(__dirname, 'views', 'checkout.html')));
app.get('/register', (req, res) => res.sendFile(path.join(__dirname, 'views', 'user-registration.html')));
app.get('/product-detail', (req, res) => res.sendFile(path.join(__dirname, 'views', 'product-detail.html'))); // Basic route for product detail page

// A catch-all for any other requests (optional, good for a simple SPA feel or 404s)
// For now, let's assume any unhandled path that's not an API call might be a direct HTML file request (if we add more HTML files later)
// Or, more simply, just let them 404 if not defined.

// Start Server
app.listen(PORT, () => {
  console.log(`Flexbazaar server running on http://localhost:${PORT}`);
});
