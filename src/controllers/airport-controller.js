const { StatusCodes } = require('http-status-codes');
const { AirportService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

async function createAirport(req, res) {
    try {
        const { name, code, address, cityId } = req.body;

        const airport = await AirportService.createAirport({
            name,
            code,
            address,
            cityId,
        });
        SuccessResponse.data = airport;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

async function getAirports(req, res) {
    try {
        const airports = await AirportService.getAirports();
        SuccessResponse.data = airports;

        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

async function getAirport(req, res) {
    try {
        const airport = await AirportService.getAirport(req.params.id);
        SuccessResponse.data = airport;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

async function destroyAirport(req, res) {
    try {
        const airport = await AirportService.destroyAirport(req.params.id);
        SuccessResponse.data = airport;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

async function updateAirport(req, res) {
    try {
        const { id } = req.params;  // Extract the airport ID from the request params
        const { name, code, address, cityId } = req.body;  // Extract updated values from the request body

        // Update the airport with the new data
        const updatedAirport = await AirportService.updateAirport(id, {
            name,
            code,
            address,
            cityId,
        });

        // If the airport doesn't exist or update fails, return an error
        if (!updatedAirport) {
            return res.status(StatusCodes.NOT_FOUND).json({
                success: false,
                message: `Airport with ID ${id} not found`,
                data: {},
                error: {},
            });
        }

        // Return the updated airport in the success response
        SuccessResponse.data = updatedAirport;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        // Handle errors
        ErrorResponse.error = error;
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

module.exports = {
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirport,
};
