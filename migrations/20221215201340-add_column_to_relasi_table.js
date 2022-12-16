'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await [
            queryInterface.addColumn(
             'Relasi',
             'id_identitas_2',
             Sequelize.INTEGER
          ),
          queryInterface.renameColumn(
            'Relasi', 'id_identitas', 'id_identitas_1')
        ];
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
