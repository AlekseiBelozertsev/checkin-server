const router = require("express").Router();
const placesController = require("../controllers/places");
const placesRoute = router.get("/places", placesController);
module.exports = placesRoute;
