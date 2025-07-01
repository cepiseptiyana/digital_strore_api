const Products = require("../models/product.model.js");

// GET /api/users
exports.getAllUsers = (req, res) => {
  Products.getAll((err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result);
  });
};

exports.getUserById = (req, res) => {
  const id = req.params.id;
  Products.getById(id, (err, result) => {
    if (err) return res.status(500).send(err);
    else res.json(result[0]);
  });
};

exports.createProduct = (req, res) => {
  const data = req.body;
  Products.create(data, (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({
      message: "user created successfully",
      user: {
        ...data,
        product_id: result.insertId,
      },
    });
  });
};

exports.update = (req, res) => {
  const data = req.body;
  const { id } = req.params;
  const productId = Number(id);

  if (!Number.isInteger(productId) || productId <= 0) {
    return res.status(400).json({ message: "Invalid product ID" });
  }

  Products.update(id, data, (err, result) => {
    if (err) return res.status(500).send(err);

    if (result.affectedRows === 0) {
      return res.status(400).json({
        message: "Product not found or already deleted",
      });
    }

    res.json({ message: "Product updated", product: data });
  });
};

exports.remove = (req, res) => {
  const { id } = req.params;
  const productId = Number(id);

  if (!Number.isInteger(productId) || productId <= 0) {
    return res.status(400).json({ message: "Invalid product ID" });
  }

  Products.delete(id, (err, result) => {
    if (err) return res.status(500).send(err);
    if (result.affectedRows === 0) {
      return res.status(400).json({
        message: "Product not found or already deleted",
      });
    }

    res.json({
      message: "Deleted",
    });
  });
};
