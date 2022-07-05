const express = require('express');
const app = express();
require('dotenv').config();

const cors = require('cors');
app.use(cors());

const PORT = process.env.SERVER_PORT || 3000;
const mysql = require('mysql2/promise');
console.log(process.env.DB_HOST, process.env.DB_PASSWORD);

let pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

app.get('/api/1.0/products', async (req, res) => {
  try {
    let [result] = await pool.execute('SELECT * FROM products');
    res.json(result);
  } catch (e) {
    console.error(e);
    res.status(500).json({ code: 1 });
  }
});

app.listen(PORT, () => {
  console.log(`server start at ${PORT}`);
});
