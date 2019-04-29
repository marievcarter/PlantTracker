const db = require('./server/db');
const { green, red } = require('chalk');
const { Plant, User, Event } = require('./server/db/models');

const users = [
  {
    firstName: 'Marie',
    lastName: 'Carter',
    email: 'marievcarter@gmail.com',
    password: 'password',
  },
  {
    firstName: 'Guest',
    lastName: 'User',
    email: 'guest@email.com',
    password: 'password',
  },
];

const plants = [
  {
    commonName: 'Ponytail Palm',
    imageUrl:
      'https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMjU4fQ&auto=format&fit=crop&w=1950&q=80',
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
      'https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMjU4fQ&auto=format&fit=crop&w=1950&q=80',
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
      'https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMjU4fQ&auto=format&fit=crop&w=1950&q=80',
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
      'https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMjU4fQ&auto=format&fit=crop&w=1950&q=80',
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
  {
    commonName: 'Ponytail Palm',
    imageUrl:
      'https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMjU4fQ&auto=format&fit=crop&w=1950&q=80',
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
    commonName: 'Ponytail Palm',
    imageUrl:
      'https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMjU4fQ&auto=format&fit=crop&w=1950&q=80',
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
    commonName: 'Ponytail Palm',
    imageUrl:
      'https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMjU4fQ&auto=format&fit=crop&w=1950&q=80',
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
    commonName: 'Ponytail Palm',
    imageUrl:
      'https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMjU4fQ&auto=format&fit=crop&w=1950&q=80',
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
    commonName: 'Ponytail Palm',
    imageUrl:
      'https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMjU4fQ&auto=format&fit=crop&w=1950&q=80',
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
    commonName: 'Ponytail Palm',
    imageUrl:
      'https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMjU4fQ&auto=format&fit=crop&w=1950&q=80',
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
    commonName: 'Ponytail Palm',
    imageUrl:
      'https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMjU4fQ&auto=format&fit=crop&w=1950&q=80',
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
];

const events = [
  {
    type: 'water',
    date: '2019-04-10 00:00:00',
    comments: 'parched',
  },
  {
    type: 'repot',
    date: '2019-04-19 00:00:00',
    comments: 'outgrew container',
  },
  {
    type: 'fertilize',
    date: '2019-04-12 00:00:00',
    comments: 'yellowing leaves',
  },
  {
    type: 'water',
    date: '2019-04-22 00:00:00',
    comments: '',
  },
  {
    type: 'water',
    date: '2019-04-25 00:00:00',
    comments: 'parched',
  },
  {
    type: 'repot',
    date: '2019-05-01 00:00:00',
    comments: 'outgrew container',
  },
  {
    type: 'water',
    date: '2019-04-11 00:00:00',
    comments: 'parched',
  },
  {
    type: 'repot',
    date: '2019-04-19 00:00:00',
    comments: 'outgrew container',
  },
];

const seed = async () => {
  await db.sync({ force: true });
  const [newUsers, newPlants, newEvents] = await Promise.all([
    User.bulkCreate(users, { returning: true, individualHooks: true }),
    Plant.bulkCreate(plants, { returning: true, individualHooks: true }),
    Event.bulkCreate(events, { returning: true, individualHooks: true }),
  ]);
  const [marie, guest] = newUsers;
  const [testPlant] = newPlants;
  await Promise.all(
    newPlants.map(plant => {
      plant.setUser(guest);
    })
  );
  await Promise.all(
    newEvents.map(event => {
      event.setPlant(testPlant);
    })
  );
};

async function runSeed() {
  console.log('seeding....');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

seed().catch(err => {
  console.error(red('Something went wrong!'));
  console.error(err);
  db.close();
});
