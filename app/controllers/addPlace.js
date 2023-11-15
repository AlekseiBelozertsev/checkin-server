const prisma = require("../prismaClient");
const getLastValue = require("./tools/getLastValue");
// Set up mock data and later connect it to the client
const addPlaceController = async (req, res) => {
  try {
    const receivedData = req.body;
    const country = getLastValue(receivedData.country);
    await prisma.place.create({
      data: {
        id: receivedData.id,
        name: receivedData.name,
        address: receivedData.address,
        country: country,
        coordinates: receivedData.coordinates,
        createdAt: receivedData.createdAt,
      },
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = addPlaceController;
