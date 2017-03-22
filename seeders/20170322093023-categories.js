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
    return queryInterface.bulkInsert('MenuCategories', [
      { mc_category: 'Rice', createdAt: new Date(), updatedAt: new Date() },
      { mc_category: 'Beef', createdAt: new Date(), updatedAt: new Date() },
      { mc_category: 'Noodles', createdAt: new Date(), updatedAt: new Date() },
      { mc_category: 'Chicken', createdAt: new Date(), updatedAt: new Date() },
      { mc_category: 'Vegetarian', createdAt: new Date(), updatedAt: new Date() },
      { mc_category: 'Vegan', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: function(queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('MenuCategories', null, {});
  }
};
