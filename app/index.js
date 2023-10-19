const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const places = require("./routes/places");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use(places);
module.exports = app;
