const { StatusCodes } = require('http-status-codes');
const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateCreateRequest(req, res, next) {
    const { name, code, address, cityId } = req.body;

    if (!name || !code || !cityId) {
        ErrorResponse.message = 'Invalid data in the create airport request';
        ErrorResponse.error = new AppError(
            ['All fields: name, code, address, and cityId are required'],
            StatusCodes.BAD_REQUEST
        );
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    next();
}

function validateUpdateRequest(req, res, next) {
    const { name, code, address, cityId } = req.body;

    if (!name && !code && !address && !cityId) {
        ErrorResponse.message = 'Invalid data in the update airport request';
        ErrorResponse.error = new AppError(
            ['At least one of name, code, address, or cityId must be provided'],
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
