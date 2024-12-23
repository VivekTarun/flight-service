const { StatusCodes } = require('http-status-codes');
const { FlightRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');
const { validateDateTime } = require('../utils/helpers/dataTime-helper');

const flightRepository = new FlightRepository();

async function createFlight(data) {
    try {
        // Validate departure and arrival times
        validateDateTime(data.departureTime, data.arrivalTime);

        // Create the flight in the repository
        const flight = await flightRepository.create(data);
        return flight;
    } catch (error) {
        // Handle validation errors explicitly
        if (error.name === 'ValidationError') {
            const explanation = error.errors.map((err) => err.message);
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }

        // Handle other errors (including those from validateDateTime)
        if (error instanceof Error) {
            throw new AppError(error.message, StatusCodes.BAD_REQUEST);
        }

        // Catch any unexpected errors
        throw new AppError('Cannot create a new flight object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createFlight
};
