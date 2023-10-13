const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
// Set up mock data and later connect it to the client
const placesController = async (req, res) => {
  const place = await prisma.place.create({data: {name: 'Something', address: 'Somewhere', country: 'Lalaland', coordintes: ['-12.556', '54.6666'], createdAt: '2020-07-10 15:00:00.000', id: '11', updatedAt: '2020-07-10 15:00:00.000'}});
};

module.exports = placesController;
