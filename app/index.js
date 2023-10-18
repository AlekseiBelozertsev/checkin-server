const express = require("express");
const cors = require("cors");
const places = require("./routes/places");

const app = express();
app.use(cors());
app.use(places);
module.exports = app;
