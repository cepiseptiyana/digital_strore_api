const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) {
    console.log("❌ Gagal koneksi ke database:");
    console.log(err);
    process.exit(1);
  }

  console.log("✅ Terhubung ke MySQL Database!");
});

module.exports = connection;
