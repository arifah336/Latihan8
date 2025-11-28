const express = require('express');
const app = express();
const PORT = 8001;

// Middleware agar server bisa membaca JSON
app.use(express.json());

// ROUTE TEST
app.get('/', (req, res) => {
  res.send('Hello, World');
});

// === IMPORT ROUTES ===

// User routes
const userRoutes = require('./routes/user.routes');

// Product routes
const productRoutes = require('./routes/products.routes');


// === REGISTER ROUTES ===

// Endpoint user
app.use('/api/users', userRoutes);

// Endpoint products
app.use('/api/products', productRoutes);


// === RUNNING SERVER ===
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
