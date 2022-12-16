'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Relasi', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_identitas: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {        
          model: 'Identitas',
          key: 'id'
        }
      },
      id_Jenis_relasi: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         
          model: 'Jenis_relasi',
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
    await queryInterface.dropTable('Relasi');
  }
};