"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn("user", "is_verified", {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      }),
    ]);
  },

  async down(queryInterface, Sequelize) {
    return Promise.all([queryInterface.removeColumn("user", "is_verified")]);
  },
};
