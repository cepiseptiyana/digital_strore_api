const Payments = require("../models/payments.model.js");

// GET /api/users
exports.getAllOrders = (req, res) => {
  Payments.getAll((err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    console.log(result);
    res.json(result);
  });
};

exports.getOrdersById = (req, res) => {
  const id = req.params.id;
  Payments.getById(id, (err, result) => {
    if (err) return res.status(500).send(err);
    else res.json(result);
  });
};

exports.createOrders = (req, res) => {
  // isi req dari user
  const data = req.body;

  Payments.create(data, (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({
      message: "Payments created successfully",
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

  Payments.update(id, data, (err, result) => {
    if (err) return res.status(500).send(err);

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Payments not Found",
      });
    }

    res.json({
      message: "Payments updated",
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

  Payments.delete(id, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (result.affectedRows === 0) {
      return res.status(400).json({
        message: "Payments not found or already deleted",
      });
    }

    res.json({
      message: "Payments deleted",
    });
  });
};
