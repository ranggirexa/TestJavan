'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kepemilikan_aset extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Kepemilikan_aset.init({
    id_aset: DataTypes.INTEGER,
    id_identitas: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Kepemilikan_aset',
  });
  return Kepemilikan_aset;
};