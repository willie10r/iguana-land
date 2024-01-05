const express = require('express');
const mysql = require('mysql');

const app = express();
const port = process.env.PORT || 3006;

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '240nismo',
  database: 'iguana_land'
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err.stack);
    return;
  }
  console.log('Connected to MySQL database');
});

app.get('/api/data', (req, res) => {
  const query = 'SELECT * FROM food';
  db.query(query, (error, results) => {
    if (error) {
      console.error('Database query error:', error.stack);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(200).json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});