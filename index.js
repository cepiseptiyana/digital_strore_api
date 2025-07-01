// Ambil express app dari app.js
require("dotenv").config();
const app = require("./src/app");
const PORT = process.env.PORT || 3306;
const serverless = require("serverless-http");

module.exports = serverless(app);

// app.listen(PORT, () => {
//   console.log("running app port" + PORT);
// });
