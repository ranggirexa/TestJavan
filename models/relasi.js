'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Relasi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Relasi.init({
    id_identitas_1: DataTypes.INTEGER,
    id_identitas_2: DataTypes.INTEGER,
    id_Jenis_relasi: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Relasi',
    freezeTableName: true,
  });
  // Relasi.associate = function(models) {
  //   Relasi.hasMany(models.Identitas, {as : 'identitas'})
  // }
  
  return Relasi;
};