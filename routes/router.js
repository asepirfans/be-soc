const express = require('express');
const sensorC = require('../controllers/sensorController.js');

const router = express.Router();

router.post('/api/sensor', sensorC.createSensor);
router.get('/api/sensor', sensorC.getSensors);


module.exports = router