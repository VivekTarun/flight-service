const CrudRepository = require('./crud-repository');
const { Airport } = require('../models/')

class AirportRepository extends CrudRepository {
    constructor() {
        super(Airport)
    }

    async someRawQuery() {
        
    }
}

module.exports = AirportRepository;