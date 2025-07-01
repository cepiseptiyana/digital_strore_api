const express = require("express");
const app = express();

const userRoutes = require("./routes/user.route.js");
const productRoutes = require("./routes/product.route.js");
const orderRoutes = require("./routes/orders.route.js");
const paymentsRoutes = require("./routes/payments.route.js");

app.use(express.json());

// users
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/payments", paymentsRoutes);

module.exports = app;
