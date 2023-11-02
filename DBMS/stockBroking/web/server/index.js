const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const db = require('./db');

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/api/clients', (req, res) => {
  const sql = 'SELECT * FROM Clients';
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});