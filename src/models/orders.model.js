const db = require("../config/db");

const Orders = {
  getAll: (callback) => {
    db.query("SELECT * FROM orders", callback);
  },

  getById: (id, callback) => {
    db.query("SELECT * FROM orders WHERE order_id = ?", [id], callback);
  },

  create: (data, callback) => {
    db.query("INSERT INTO orders SET ?", data, callback);
  },

  update: (id, data, callback) => {
    db.query("UPDATE orders SET ? WHERE order_id = ?", [data, id], callback);
  },

  delete: (id, callback) => {
    db.query("DELETE FROM orders WHERE order_id = ?", [id], callback);
  },
};

module.exports = Orders;
