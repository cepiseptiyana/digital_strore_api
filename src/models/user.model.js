const db = require("../config/db");

const User = {
  getAll: (callback) => {
    db.query("SELECT * FROM users", callback);
  },

  getById: (id, callback) => {
    db.query("SELECT * FROM users WHERE user_id = ?", [id], callback);
  },

  create: (data, callback) => {
    db.query("INSERT INTO users SET ?", data, callback);
  },

  update: (id, data, callback) => {
    db.query("UPDATE users SET ? WHERE user_id = ?", [data, id], callback);
  },

  delete: (id, callback) => {
    db.query("DELETE FROM users WHERE user_id = ?", [id], callback);
  },
};

module.exports = User;
