(function () {
    'use strict';
    
    angular.module('MenuApp')
    .component('itemsCategory', {
      templateUrl: 'src/menulist/templates/itemscategorycomponent.template.html',
      bindings: {
        itemsxcat: '<'
      }
    });
    
    })();