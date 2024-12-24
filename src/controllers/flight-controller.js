const { StatusCodes } = require('http-status-codes');
const { FlightService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

async function createFlight(req, res) {
    try {
        const {
            flightNumber,
            airplaneId,
            departureAirportId,
            arrivalAirportId,
            arrivalTime,
            departureTime,
            price,
            boardingGate,
            totalSeats
        } = req.body;

        const flight = await FlightService.createFlight({
            flightNumber,
            airplaneId,
            departureAirportId,
            arrivalAirportId,
            arrivalTime,
            departureTime,
            price,
            boardingGate,
            totalSeats
        });

        SuccessResponse.data = flight;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

async function getAllFlights(req, res) {
    try {
        const flights = await FlightService.getAllFlights(req.query);
        SuccessResponse.data = flights;

        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

module.exports = {
    createFlight,
    getAllFlights,

};
