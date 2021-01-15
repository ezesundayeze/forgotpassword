require("express-async-errors");
require("dotenv").config();

const express = require("express");
const app = express();
const connection = require("./db");
const cors = require("cors");
const port = 8080;

(async function db() {
  await connection();
})();

app.use(cors());
app.use(express.json());

// API routes
app.use("/api/v1", require("./routes/index.route"));

app.use((error, req, res, next) => {
  res.status(500).json({ error: error.message });
});

app.listen(port, () => {
  console.log("Listening to Port ", port);
});

module.exports = app;
