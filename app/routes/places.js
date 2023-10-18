const router = require("express").Router();
const placesController = require("../controllers/index");

const placesRoute = router.post("/places", placesController.addPlaces);
module.exports = placesRoute;
