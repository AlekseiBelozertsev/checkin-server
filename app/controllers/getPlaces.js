// get places using prisma client
const prisma = require("../prismaClient");

const getPlacesController = async (req, res) => {
  try {
    const places = await prisma.place.findMany();
    res.send(places);
  } catch (e) {
    console.log(e);
  }
};

module.exports = getPlacesController;
