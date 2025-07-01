// Ambil express app dari app.js
require("dotenv").config();
const app = require("./src/app");

const PORT = process.env.PORT || 3306;

app.listen(PORT, () => {
  console.log("running app port" + PORT);
});
