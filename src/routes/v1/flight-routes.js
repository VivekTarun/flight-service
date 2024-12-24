const express = require('express');

const {FlightController} = require('../../controllers');
const { FlightMiddlware } = require('../../middlewares');
const router = express.Router();

router.post('/', FlightMiddlware.validateCreateRequest ,FlightController.createFlight);

// GET http://localhost:3000/api/v1/flights?trips=mum-del&price=1000-5000&travellers=2&tripDate=2024-12-25&sort=price_asc,departureTime_desc
router.get('/', FlightController.getAllFlights);

module.exports = router;