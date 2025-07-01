const User = require("../models/user.model.js");

// GET /api/users
exports.getAllUsers = (req, res) => {
  User.getAll((err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    console.log(result);
    res.json(result);
  });
};

exports.getUserById = (req, res) => {
  const id = req.params.id;
  User.getById(id, (err, result) => {
    if (err) return res.status(500).send(err);
    else res.json(result);
  });
};

exports.createUser = (req, res) => {
  // isi req dari user
  const data = req.body;

  User.create(data, (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({
      message: "user created successfully",
      user: {
        user_id: result.insertId,
        ...data,
      },
    });
  });
};

exports.update = (req, res) => {
  const data = req.body;
  const { id } = req.params;
  const userId = Number(id);

  if (!Number.isInteger(userId) || userId <= 0) {
    return res.status(400).json({ message: "Invalid user ID" });
  }

  User.update(id, data, (err, result) => {
    if (err) return res.status(500).send(err);

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "User not Found",
      });
    }

    res.json({
      message: "Users updated",
      user: result,
    });
  });
};

exports.remove = (req, res) => {
  const { id } = req.params;
  const userId = Number(id);

  if (!Number.isInteger(userId) || userId <= 0) {
    return res.status(400).json({ message: "Invalid user ID" });
  }

  User.delete(id, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (result.affectedRows === 0) {
      return res.status(400).json({
        message: "User not found or already deleted",
      });
    }

    res.json({
      message: "User deleted",
    });
  });
};
