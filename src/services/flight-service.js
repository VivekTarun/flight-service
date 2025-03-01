const { StatusCodes } = require('http-status-codes');
const {Op} = require('sequelize');
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

async function getAllFlights(query) {
    let customFilter = {};
    let sortFilter = [];
    const endingTripTime = "23:59:59";
    //trips = mum-del
    if(query.trips) {
        [departureAirportId, arrivalAirportId] = query.trips.split("-");
        customFilter.departureAirportId = departureAirportId;
        customFilter.arrivalAirportId = arrivalAirportId;
        // TODO : add a check that they are not same.
    }
    if(query.price) {
        [minPrice, maxPrice] = query.price.split("-");
        customFilter.price = {
            [Op.between]: [minPrice, maxPrice]
        }
    }
    if(query.travellers) {
        customFilter.totalSeats = {
            [Op.gte]: query.travellers
        }
    }
    if(query.tripDate) {
        customFilter.departureTime = {
            [Op.between]: [query.tripDate, query.tripDate + endingTripTime]  
        }
    }
    if (query.sort) {
        const params = query.sort.split(",");
        sortFilter = params.map((param) => param.split("_"));
        console.log(sortFilter);
    }
    
    try {
        const flights = await flightRepository.getAllFlights(customFilter, sortFilter);
        return flights;
    } catch(error) {
        throw new AppError('Cannot fetch data of all the flights', StatusCodes.INTERNAL_SERVER_ERROR);
    }

}

module.exports = {
    createFlight,
    getAllFlights,
};
