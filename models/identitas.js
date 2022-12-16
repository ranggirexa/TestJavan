'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Identitas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Identitas.init({
    nama: DataTypes.STRING,
    jenis_kelamin: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Identitas',
  });
  Identitas.associate = function(models) {
    Identitas.hasMany(models.Relasi, {
      foreignKey: 'id_identitas_1',
      as: 'relasi'
    });
  };
  return Identitas;
};