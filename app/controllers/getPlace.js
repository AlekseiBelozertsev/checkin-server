const prisma = require("../prismaClient");

const getPlaceController = async (req, res) => {
  try {
    const id = req.params.id;
    const place = await prisma.place.findUnique({
      where: {
        id: id,
      },
    });
    res.send(place);
  } catch (e) {
    console.log(e);
  }
};

module.exports = getPlaceController;
