const db = require("../config/db");

const Products = {
  getAll: (callback) => {
    db.query("SELECT * FROM products", callback);
  },

  getById: (id, callback) => {
    db.query("SELECT * FROM products WHERE product_id = ?", [id], callback);
  },

  create: (data, callback) => {
    db.query("INSERT INTO products SET ?", data, callback);
  },

  update: (id, data, callback) => {
    db.query(
      "UPDATE products SET ? WHERE product_id = ?",
      [data, id],
      callback
    );
  },

  delete: (id, callback) => {
    db.query("DELETE FROM products WHERE product_id = ?", [id], callback);
  },
};

module.exports = Products;
