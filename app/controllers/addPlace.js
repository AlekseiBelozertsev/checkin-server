const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
// Set up mock data and later connect it to the client
const placesController = async (req, res) => {
  const place = await prisma.place.create({
    // here data must be switched to real data from client. "data: req.body"
    data: {
      id: 4,
      name: "Something",
      address: "Somewhere",
      country: "Lalaland",
      coordintes: ["-12.556", "54.6666"],
      createdAt: new Date().toISOString(),
    },
  });
  res.send(place);
};

module.exports = placesController;
