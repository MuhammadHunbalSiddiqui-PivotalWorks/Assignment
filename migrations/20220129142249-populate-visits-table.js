'use strict';
const { UserVisit } = require("../models");

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const visits = [
      {
        pagename: "Dashboard",
        userId: 2
      },
      {
        pagename: "Profile",
        userId: 2
      },
      {
        pagename: "Product",
        userId: 2
      },
      {
        pagename: "Dashboard",
        userId: 1
      },
      {
        pagename: "Profile",
        userId: 1
      },
      {
        pagename: "Product",
        userId: 3
      },
    ]
    await UserVisit.bulkCreate(
      visits
    )
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    let where = {}
    await UserVisit.destroy({
      where
    })
  }
};
