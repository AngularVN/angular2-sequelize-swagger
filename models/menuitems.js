'use strict';
module.exports = function(sequelize, DataTypes) {
  var MenuItems = sequelize.define('MenuItems', {
    mi_menu_name: DataTypes.STRING,
    mi_menu_description: DataTypes.TEXT,
    mi_image: DataTypes.STRING,
    mi_price: DataTypes.INTEGER,
    mi_category_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return MenuItems;
};