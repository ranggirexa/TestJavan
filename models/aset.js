'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Aset extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Aset.init({
    nama_aset: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Aset',
    freezeTableName: true,
  });
  Aset.associate = function(models) {
    Aset.hasMany(models.Kepemilikan_aset, {
      foreignKey: 'id_aset',
      as: 'aset'
    });
  };
  return Aset;
};