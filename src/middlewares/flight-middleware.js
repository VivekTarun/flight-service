const { StatusCodes } = require('http-status-codes');
const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateCreateRequest(req, res, next) {
    const {
        flightNumber,
        airplaneId,
        departureAirportId,
        arrivalAirportId,
        arrivalTime,
        departureTime,
        price,
        totalSeats
    } = req.body;

    if (
        !flightNumber ||
        !airplaneId ||
        !departureAirportId ||
        !arrivalAirportId ||
        !arrivalTime ||
        !departureTime ||
        !price ||
        !totalSeats
    ) {
        ErrorResponse.message = 'Invalid data in the create flight request';
        ErrorResponse.error = new AppError(
            [
                'All fields: flightNumber, airplaneId, departureAirportId, arrivalAirportId, arrivalTime, departureTime, price, and totalSeats are required'
            ],
            StatusCodes.BAD_REQUEST
        );
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    next();
}

function validateUpdateRequest(req, res, next) {
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

    if (
        !flightNumber &&
        !airplaneId &&
        !departureAirportId &&
        !arrivalAirportId &&
        !arrivalTime &&
        !departureTime &&
        !price &&
        !boardingGate &&
        !totalSeats
    ) {
        ErrorResponse.message = 'Invalid data in the update flight request';
        ErrorResponse.error = new AppError(
            [
                'At least one of flightNumber, airplaneId, departureAirportId, arrivalAirportId, arrivalTime, departureTime, price, boardingGate, or totalSeats must be provided'
            ],
            StatusCodes.BAD_REQUEST
        );
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    next();
}

module.exports = {
    validateCreateRequest,
    validateUpdateRequest,
};
