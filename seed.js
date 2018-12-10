const { db } = require('./server/db');
const { green, red } = require('chalk');
const { Plant } = require('./server/db/plant.js');
const { PlantDetail } = require('./server/db/plantDetail.js');

const plants = [
  {
    commonName: 'Ponytail Palm',
    scientificName: null,
    age: 2,
  },
];

const plantDetails = [
  {
    purchaseLocation: 'lskdfj',
    sunDirection: 'lsdkfj',
    lastWatering: '1/1/2000',
    lastFeeding: '1/1/2000',
    lastRepot: '1/1/2000',
  },
];

const seed = async () => {
  await db.sync({ force: true });

  await Promise.all(plants.map(plant => Plant.create(plant))).then(
    Promise.all(plantDetails.map(detail => PlantDetail.create(detail)))
  );

  console.log(green('Seeding success!'));
  db.close();
};

seed().catch(err => {
  console.error(red('Something went wrong!'));
  console.error(err);
  db.close();
});
