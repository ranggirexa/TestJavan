'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Kepemilikan_aset', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_aset: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {        
          model: 'Aset',
          key: 'id'
        }
      },
      id_identitas: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {        
          model: 'Identitas',
          key: 'id'
        }
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
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Kepemilikan_aset');
  }
};