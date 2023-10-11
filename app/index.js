const express = require("express");
const app = express();
app.use(require("./routes/places"));
module.exports = app;
