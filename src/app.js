const express = require("express");
const app = express();

app.use(express.json());

// routes
const emailRoutes = require("./routes/email.routes");

app.use("/emails", emailRoutes);

app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

module.exports = app;