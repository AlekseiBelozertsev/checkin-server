const prisma = require("../prismaClient");

const deletePlaceController = async (req, res) => {
  try {
    const id = req.params.id;
    await prisma.place.delete({
      where: {
        id: id,
      },
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = deletePlaceController;
