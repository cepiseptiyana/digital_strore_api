const Orders = require("../models/orders.model.js");

// GET /api/users
exports.getAllOrders = (req, res) => {
  Orders.getAll((err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    console.log(result);
    res.json(result);
  });
};

exports.getOrdersById = (req, res) => {
  const id = req.params.id;
  Orders.getById(id, (err, result) => {
    if (err) return res.status(500).send(err);
    else res.json(result);
  });
};

exports.createOrders = (req, res) => {
  // isi req dari user
  const data = req.body;

  Orders.create(data, (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({
      message: "order created successfully",
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

  Orders.update(id, data, (err, result) => {
    if (err) return res.status(500).send(err);

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Order not Found",
      });
    }

    res.json({
      message: "Order updated",
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

  Orders.delete(id, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (result.affectedRows === 0) {
      return res.status(400).json({
        message: "Order not found or already deleted",
      });
    }

    res.json({
      message: "Order deleted",
    });
  });
};
