const addPlaces = require("./addPlace");
const getPlaces = require("./getPlaces");
const getPlace = require("./getPlace");
const deletePlace = require("./deletePlace");

const controllers = {
  addPlaces: addPlaces,
  getPlaces: getPlaces,
  getPlace: getPlace,
  deletePlace: deletePlace,
};

module.exports = controllers;
