const express = require('express');
const app = express();

app.use(express.json());

app.post('/wagmi', (req, res) => {
  const body = req.body || {};

  // 1. Handle Ping Test (Empty Body)
  if (
    Object.keys(body).length === 0 ||
    (typeof body.a === 'undefined' && typeof body.b === 'undefined')
  ) {
    return res.json({
      message: 'wagmi',
      timestamp: new Date().toISOString(),
      lang: 'Node.js'
    });
  }

  // 2. Handle Addition
  const { a, b } = body;

  if (
    typeof a !== 'number' || typeof b !== 'number' ||
    a < 0 || b < 0 || a + b > 100
  ) {
    return res.status(400).json({ error: 'Invalid input' });
  }

  return res.json({
    result: a + b,
    a,
    b,
    status: 'success'
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});









