const prisma = require("../prismaClient");
// Set up mock data and later connect it to the client
const addPlaceController = async (req, res) => {
  try {
    const receivedData = req.body;
    const getCountry = (value) => {
      if (value.includes(",")) {
        const splittedValue = value.split(",");
        const country = splittedValue[1];
        return country;
      } else {
        return value;
      }
    };
    const place = await prisma.place.create({
      data: {
        id: receivedData.id,
        name: receivedData.name,
        address: receivedData.address,
        country: getCountry(receivedData.country),
        coordinates: receivedData.coordinates,
        createdAt: receivedData.createdAt,
      },
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = addPlaceController;
