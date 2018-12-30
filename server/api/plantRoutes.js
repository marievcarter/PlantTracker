const router = require('express').Router();
const { Plant } = require('../db/plant.js');
const Sequelize = require('sequelize');

// GET api/plants
router.get('/', async (req, res, next) => {
  try {
    const plants = await Plant.findAll({ order: [['id', 'ASC']] });
    res.json(plants);
  } catch (err) {
    next(err);
  }
});

// GET api/plants/:plantId
router.get('/:plantId', async (req, res, next) => {
  try {
    const plant = await Plant.findAll({
      where: { id: req.params.plantId },
      //include: PlantDetail,
    });
    res.status(200).json(plant);
  } catch (err) {
    next(err);
  }
});

// POST api/plants
router.post('/', async (req, res, next) => {
  try {
    const newPlant = await Plant.create(req.body);
    res.json(newPlant);
  } catch (err) {
    next(err);
  }
});

// PUT api/plants/plantId/editPlant
router.put('/:plantId/editPlant', async (req, res, next) => {
  try {
    await Plant.update(
      {
        commonName: req.body.commonName,
        scientificName: req.body.scientificName,
        imageUrl: req.body.imageUrl,
        age: req.body.age,
        sunDirection: req.body.sunDirection,
        lastWatering: req.body.lastWatering,
        lastFeeding: req.body.lastFeeding,
        lastRepot: req.body.lastRepot,
        description: req.body.description,
      },
      { where: { id: req.params.plantId } }
    );
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

// PUT api/plants
router.put('/', async (req, res, next) => {
  try {
    await Plant.update(
      {
        [req.body.field]: Sequelize.fn('NOW'),
      },
      { where: { id: req.body.id } }
    );
    console.log(Sequelize.fn('NOW'));
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/plants/plantId
router.delete('/:plantId', async (req, res, next) => {
  try {
    id = req.params.plantId;
    await Plant.destroy({ where: { id } });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
