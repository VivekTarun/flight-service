'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Airplane, {
        foreignKey: 'airplaneId',
        as: 'airplaneDetails',
      });
      this.belongsTo(models.Airport, {
        foreignKey: 'departureAirportId',
        as: 'departureAirport',
      })
      this.belongsTo(models.Airport, {
        foreignKey: 'arrivalAirportId',
        as: 'arrivalAirport',
      })
    }
  }
  Flight.init({
    flightNumber: {
      type: DataTypes.STRING,
      allowNull: false, // Ensures flight number is required
    },
    airplaneId: {
      type: DataTypes.INTEGER,
      allowNull: false, // Ensures airplaneId is required
    },
    departureAirportId: {
      type: DataTypes.STRING,
      allowNull: false, // Ensures departureAirportId is required
    },
    arrivalAirportId: {
      type: DataTypes.STRING,
      allowNull: false, // Ensures arrivalAirportId is required
    },
    arrivalTime: {
      type: DataTypes.DATE,
      allowNull: false, // Ensures arrivalTime is required
    },
    departureTime: {
      type: DataTypes.DATE,
      allowNull: false, // Ensures departureTime is required
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false, // Ensures price is required
    },
    boardingGate: {
      type: DataTypes.STRING,
      allowNull: true, // Optional field
    },
    totalSeats: { // Total seats available in the flight | Total seats left in the airplane.
      type: DataTypes.INTEGER,
      allowNull: false, // Ensures totalSeats is required
    },
  }, {
    sequelize,
    modelName: 'Flight',
  });
  return Flight;
};
