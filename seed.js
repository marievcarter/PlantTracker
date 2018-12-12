const { db } = require('./server/db');
const { green, red } = require('chalk');
const { Plant } = require('./server/db/plant.js');
const { PlantDetail } = require('./server/db/plantDetail.js');

const plants = [
  {
    commonName: 'Ponytail Palm',
    imageUrl:
      'https://photos.google.com/album/AF1QipNwslSet8YgyRrPKEmcDv12bwpSCRItH0MfETVM/photo/AF1QipOUoL2wBVIf-_Bv2N8MC5yDtNRnD2GEJZD6v3J4',
    scientificName: 'Beaucarnea recurvata',
    age: 2,
  },
  {
    commonName: 'Ficus bonsai',
    imageUrl:
      'https://photos.google.com/album/AF1QipNwslSet8YgyRrPKEmcDv12bwpSCRItH0MfETVM/photo/AF1QipMT5ZWV0LSFqv3xV0a3yw5u6KGjag_WaMt6llEj',
    scientificName: 'Ficus retusa',
    age: 17,
  },
];

const plantDetails = [
  {
    purchaseLocation: 'Grand St. asian market',
    sunDirection: 'south',
    lastWatering: '1/1/2000',
    lastFeeding: '1/1/2000',
    lastRepot: '1/1/2000',
  },
  {
    purchaseLocation: 'NYC street market',
    sunDirection: 'south',
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
