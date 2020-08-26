(function () {
'use strict';

angular.module('ShoppingList')
.controller('MainShoppingListController', MainShoppingListController);


MainShoppingListController.$inject = ['items'];
function MainShoppingListController(items) {
  console.log("en el controller v1");
  var mainList = this;
  mainList.items = items;
}

})();
