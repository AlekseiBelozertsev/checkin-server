const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
// Set up mock data and later connect it to the client
const placesController = async (req, res) => {
  const receivedData = req.body;
  const place = await prisma.place.create({
    // here data must be switched to real data from client. "data: req.body"
    data: {
      id: receivedData.id,
      name: receivedData.name,
      address: receivedData.address,
      country: receivedData.country,
      coordintes: receivedData.coordintes,
      createdAt: receivedData.createdAt,
    },
  });
};

module.exports = placesController;
