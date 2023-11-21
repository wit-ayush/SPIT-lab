const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./db');
var cors = require('cors')

app.use(cors({origin:"*", credentials: true}))

const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

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

app.get('/api/login/:phone', (req, res) => {

  let sql = 'SELECT * FROM Clients WHERE contact_info = ?';

  db.query(sql, [req.params.phone], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

app.post('/api/createclient', (req, res) => {
  const { name_first, name_last, name_middle, contact_info, kyc, age } = req.body;

  const sql = 'INSERT INTO Clients (name_first, name_last, name_middle, contact_info, kyc, age) VALUES (?, ?, ?, ?, ?, ?)';
  const values = [name_first, name_last, name_middle, contact_info, kyc, age];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error creating user:', err);
      res.status(500).json({ message: err });
    } else {
      res.status(201).json({ message: 'User created successfully' });
    }
  });
});

app.put('/api/clients/:id', (req, res) => {
  const clientId = req.params.id;
  const { name_first, name_last, name_middle, contact_info, kyc, age } = req.body;

  const sql = `
    UPDATE Clients
    SET 
      name_first = ?,
      name_last = ?,
      name_middle = ?,
      contact_info = ?,
      kyc = ?,
      age = ?
    WHERE clientId = ?
  `;

  const values = [name_first, name_last, name_middle, contact_info, kyc, age, Number(clientId)];

  db.query(sql, values, (err, result) => {
    if (err) {
      res.status(500).json({ message: 'Internal Server Error' });
    } else {
      res.status(200).json({ message: 'User updated successfully' });
    }
  });
});

app.delete('/api/clients/:id', (req, res) => {
  const clientId = req.params.id;

  const sql = 'DELETE FROM Clients WHERE clientId = ?';

  db.query(sql, [clientId], (err, result) => {
    if (err) {
      console.error('Error deleting user:', err);
      res.status(500).json({ message: 'Internal Server Error' });
    } else {
      res.status(200).json({ message: 'User deleted successfully' });
    }
  });
});

app.get('/api/getStocks', (req, res) => {

  let sql = 'SELECT * FROM Stocks';

  db.query(sql, [req.params.phone], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

app.get('/api/getPortfolio', (req, res) => {

  let sql = 'SELECT * FROM Stocks';

  db.query(sql, [req.params.phone], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});