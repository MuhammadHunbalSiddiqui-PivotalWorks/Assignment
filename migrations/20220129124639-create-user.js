'use strict';

const { User } = require("../models");

module.exports = {
  async up(queryInterface, Sequelize) {
    const rootUsers = [
      {
        name: "Ahmed"
      },
      {
        name: "Bilal"
      },
      {
        name: "Cavin"
      },
    ]

    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await User.bulkCreate(rootUsers)
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};