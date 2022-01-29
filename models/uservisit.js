'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserVisit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserVisit.belongsTo(models.User, {
        foreignKey: "userId",
        // as: "User",
      })
    }
  }
  UserVisit.init({
    pagename: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'UserVisit',
  });
  return UserVisit;
};