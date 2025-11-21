const express = require('express');
const app = express();
const PORT = 8001;

app.use(express.json());

// Route test
app.get('/', (req, res) => {
  res.send('Hello, World');
});

// Import user routes
const userRoutes = require('./routes/user.routes');

// Daftarkan routes
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
