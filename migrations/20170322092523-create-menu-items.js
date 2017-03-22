'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('MenuItems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mi_menu_name: {
        type: Sequelize.STRING
      },
      mi_menu_description: {
        type: Sequelize.TEXT
      },
      mi_image: {
        type: Sequelize.STRING
      },
      mi_price: {
        type: Sequelize.DECIMAL(10, 2)
      },
      mi_category_id: {
        type: Sequelize.INTEGER
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
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('MenuItems');
  }
};