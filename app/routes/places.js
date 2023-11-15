const router = require("express").Router();
const placesController = require("../controllers/index");

const addPlaces = router.post("/addPlaces", placesController.addPlaces);
const getPlaces = router.get("/getPlaces", placesController.getPlaces);
const getPlace = router.get("/getPlaces/:id", placesController.getPlace);
const deletePlace = router.get("/getPlaces/:id", placesController.deletePlace);

const placesRoutes = {
  getPlaces,
  addPlaces,
  getPlace,
  deletePlace,
};
module.exports = placesRoutes;
