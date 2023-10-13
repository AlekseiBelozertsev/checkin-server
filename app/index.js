const express = require("express");
const places = require("./routes/places");

const app = express();
app.use(places);
module.exports = app;
