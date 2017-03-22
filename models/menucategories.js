'use strict';
module.exports = function(sequelize, DataTypes) {
  var MenuCategories = sequelize.define('MenuCategories', {
    mc_category: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return MenuCategories;
};