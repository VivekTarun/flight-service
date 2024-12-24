'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Seats', [
      {
        row: '1',
        col: 'A',
        airplaneId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        row: '1',
        col: 'B',
        airplaneId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        row: '1',
        col: 'C',
        airplaneId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        row: '1',
        col: 'D',
        airplaneId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        row: '1',
        col: 'E',
        airplaneId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        row: '1',
        col: 'F',
        airplaneId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        row: '2',
        col: 'A',
        airplaneId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        row: '2',
        col: 'B',
        airplaneId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        row: '2',
        col: 'C',
        airplaneId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        row: '2',
        col: 'D',
        airplaneId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        row: '2',
        col: 'E',
        airplaneId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        row: '2',
        col: 'F',
        airplaneId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
