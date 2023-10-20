const router = require("express").Router();
const placesController = require("../controllers/index");

const addPlaces = router.post("/addPlaces", placesController.addPlaces);
const getPlaces = router.get("/getPlaces", placesController.getPlaces);
const placesRoutes = {
  getPlaces,
  addPlaces,
};
module.exports = placesRoutes;
