// /* global describe beforeEach it */

// const { expect } = require('chai');
// const db = require('../index');
// const Plant = db.model('plant');

// describe('Plant model', () => {
//   beforeEach(() => {
//     return db.sync({ force: true });
//   });

//   describe('correctOrder', () => {
//     let testPlant;
//     beforeEach(async () => {
//       testPlant = await Plant.create({
//         commonName: 'Test Plant',
//         imageUrl: 'https://via.placeholder.com/150',
//         scientificName: 'test scientific name',
//         description: 'This is a test plant.',
//       });
//     });
//     it('returns true if the commonName is correct', () => {
//       expect(testPlant.commonName).to.be.equal('Test Plant');
//     });
//   });
// });
