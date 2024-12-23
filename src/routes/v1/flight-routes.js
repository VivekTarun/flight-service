const express = require('express');

const {FlightController} = require('../../controllers');
const { FlightMiddlware } = require('../../middlewares');
const router = express.Router();

router.post('/', FlightMiddlware.validateCreateRequest ,FlightController.createFlight);


module.exports = router;