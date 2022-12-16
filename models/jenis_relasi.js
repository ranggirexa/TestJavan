'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jenis_relasi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Jenis_relasi.init({
    jenis_relasi: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Jenis_relasi',
    freezeTableName: true,
  });
  Jenis_relasi.associate = function(models) {
    Jenis_relasi.hasMany(models.Relasi, {
      foreignKey: 'id_Jenis_relasi',
      as: 'nama_relasi'
    });
  };
  return Jenis_relasi;
};