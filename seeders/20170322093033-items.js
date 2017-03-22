'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('MenuItems', [
      { mi_menu_name: 'Nasi Lemak Fried Chicken', mi_menu_description: 'Coconut rice with Fried Chicken topped with', mi_image: '', mi_price: 10, mi_category_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { mi_menu_name: 'Oriental Chicken Chopped Rice', mi_menu_description: 'Chicken Chopped served with Rice', mi_image: '', mi_price: 10, mi_category_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { mi_menu_name: 'Carbonara', mi_menu_description: 'Coconut rice with Fried Chicken topped with', mi_image: '', mi_price: 12, mi_category_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { mi_menu_name: 'Chicken Parmesan Cheese', mi_menu_description: 'Two breaded and lightly browned chicken breasts topped with marinara sauce', mi_image: '', mi_price: 12, mi_category_id: 1, createdAt: new Date(), updatedAt: new Date() },

    ], {});
  },

  down: function(queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('MenuItems', null, {});
  }
};
