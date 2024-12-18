const {StatusCodes} = require('http-status-codes');
const {ErrorResponse} = require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateCreateRequest(req, res, next) {
    if(!req.body.modelNumber) {
        ErrorResponse.message = `Something went wrong while creating airplane`;
        
        ErrorResponse.error = new AppError(['Model Number not found in the incoming request in the correct form', StatusCodes.BAD_REQUEST]);
        return res.status(StatusCodes.BAD_REQUEST).json({ErrorResponse});
    }
    console.log("exiting middle ware");
    next();
}


function validateUpdateRequest(req, res, next) {
    // Check if at least one of the fields is provided for updating
    const { modelNumber, capacity } = req.body;

    if (!modelNumber && !capacity) {
        ErrorResponse.message = `Something went wrong while updating airplane`;
        ErrorResponse.error = new AppError([
            'At least one of modelNumber or capacity must be present in the update request',
            StatusCodes.BAD_REQUEST
        ]);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    console.log("Exiting update request validation middleware.");
    next();
}


module.exports = {
    validateCreateRequest,
    validateUpdateRequest,
    
}