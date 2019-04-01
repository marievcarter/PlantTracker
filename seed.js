const { db } = require('./server/db');
const { green, red } = require('chalk');
const { Plant } = require('./server/db/plant');

const plants = [
  {
    commonName: 'Ponytail Palm',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0013/3529/6118/products/Nursery-Pot-10_24a71bea-a503-4ef0-acae-29ce81f8eb86.jpg?v=1544499886',
    scientificName: 'Beaucarnea recurvata',
    age: 2,
    purchaseLocation: 'Grand St. asian market',
    sunDirection: 'south',
    lastWatering: '1/1/2000',
    lastFeeding: '1/1/2000',
    lastRepot: '1/1/2000',
    description:
      'Beaucarnea recurvata is a species of plant in the family Asparagaceae, native to the states of Tamaulipas, Veracruz and San Luis Potosí in eastern Mexico. Despite its common name, it is not closely related to the true palms. It has become popular in Europe and worldwide as an ornamental plant.',
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
    description:
      'Mitella diphylla is a clump forming, open woodland plant native to eastern North America.',
  },
  {
    commonName: 'Green Jelly Beans',
    imageUrl:
      'https://cdn11.bigcommerce.com/s-oqm1pc/images/stencil/631x631/products/1050/5030/rubitinctum_porknbeans_november__21501.1512101823.jpg?c=2',
    scientificName: 'Sedum rubrotinctum',
    age: 1,
    purchaseLocation: 'Leaf & Clay',
    sunDirection: 'south',
    lastWatering: '1/1/2000',
    lastFeeding: '1/1/2000',
    lastRepot: '1/1/2000',
    description:
      'Sedum rubrotinctum is an evergreen, succulent perennial with sprawling, leaning stems up to 8 inches (20 cm) tall. The leaves are jelly bean shaped, up to 0.8 inch (2 cm) long, green with red-brown tips which turn to bronze in the summer months. The flowers are small, star-shaped and yellow in color.',
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
    description:
      'Ficus retusa is a species of evergreen woody plant in the fig genus, native to the Malay Archipelago and Malesia floristic region. The species name has been widely mis-applied to Ficus microcarpa.',
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
