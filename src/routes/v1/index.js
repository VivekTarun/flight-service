const express = require('express');

const airplaneRoutes = require('./airplane-routes');
const cityRoutes = require('./city-routes');
const airportRoutes = require('./airport-routes');
const flightRoutes = require('./flight-routes');

const router = express.Router();

router.use('/airplanes', airplaneRoutes);
router.use('/city', cityRoutes);
router.use('/airport', airportRoutes);
router.use('/flight', flightRoutes);

module.exports = router;