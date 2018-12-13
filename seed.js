const { db } = require('./server/db');
const { green, red } = require('chalk');
const { Plant } = require('./server/db/plant.js');
const { PlantDetail } = require('./server/db/plantDetail.js');

const plants = [
  {
    commonName: 'Ponytail Palm',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/1025/1611/products/ponytail-palm-10_-growers-pot_600x.jpg?v=1537384947',
    scientificName: 'Beaucarnea recurvata',
    age: 2,
    purchaseLocation: 'Grand St. asian market',
    sunDirection: 'south',
    lastWatering: '1/1/2000',
    lastFeeding: '1/1/2000',
    lastRepot: '1/1/2000',
  },
  {
    commonName: "Bishop's cap",
    imageUrl:
      'https://worldofsucculents.com/wp-content/uploads/2018/03/Bishop%E2%80%99s-Cap-Astrophytum-myriostigma.jpg',
    scientificName: 'Astrophytum myriostigma',
    age: 1,
    purchaseLocation: 'Leaf & Clay',
    sunDirection: 'south',
    lastWatering: '1/1/2000',
    lastFeeding: '1/1/2000',
    lastRepot: '1/1/2000',
  },
  {
    commonName: 'Green Jelly Beans',
    imageUrl:
      'https://images.prod.meredith.com/product/bd3cadba1a55d081f9648acfe022a13a/1533383869656/l/jelly-bean-succulent-plant-sedum-rubrotictum-loves-the-sun-3-5-pot',
    scientificName: 'Sedum rubrotinctum',
    age: 1,
    purchaseLocation: 'Leaf & Clay',
    sunDirection: 'south',
    lastWatering: '1/1/2000',
    lastFeeding: '1/1/2000',
    lastRepot: '1/1/2000',
  },
  {
    commonName: 'Ficus bonsai',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/71qU61D3D6L._SY355_.jpg',
    scientificName: 'Ficus retusa',
    age: 1,
    purchaseLocation: 'NYC street market',
    sunDirection: 'south',
    lastWatering: '1/1/2000',
    lastFeeding: '1/1/2000',
    lastRepot: '1/1/2000',
  },
];

// const plantDetails = [
//   {
//     purchaseLocation: 'Grand St. asian market',
//     sunDirection: 'south',
//     lastWatering: '1/1/2000',
//     lastFeeding: '1/1/2000',
//     lastRepot: '1/1/2000',
//   },
//   {
//     purchaseLocation: 'NYC street market',
//     sunDirection: 'south',
//     lastWatering: '1/1/2000',
//     lastFeeding: '1/1/2000',
//     lastRepot: '1/1/2000',
//   },
// ];

const seed = async () => {
  await db.sync({ force: true });

  await Promise.all(plants.map(plant => Plant.create(plant))); //.then(
  //Promise.all(plantDetails.map(detail => PlantDetail.create(detail)))
  //);

  console.log(green('Seeding success!'));
  db.close();
};

seed().catch(err => {
  console.error(red('Something went wrong!'));
  console.error(err);
  db.close();
});
