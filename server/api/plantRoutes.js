const router = require('express').Router();
const { Plant } = require('../db/plant.js');
const { PlantDetail } = require('../db/plantDetail.js');

// GET api/plants
router.get('/', async (req, res, next) => {
  try {
    const plants = await Plant.findAll();
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

//POST api/plants
router.post('/', async (req, res, next) => {
  try {
    const newPlant = await Plant.create(req.body);
    res.json(newPlant);
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
