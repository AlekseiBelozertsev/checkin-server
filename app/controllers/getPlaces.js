// get places using prisma client
const prisma = require("../prismaClient");

const getPlacesController = async (req, res) => {
  const places = await prisma.place.findMany();
  console.log(places);
};

module.exports = getPlacesController;
