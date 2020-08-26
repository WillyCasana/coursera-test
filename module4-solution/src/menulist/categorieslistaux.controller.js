(function () {
    'use strict';
    
    angular.module('MenuApp')
    .controller('CategoriesListControllerAux', CategoriesListControllerAux);
    
    
    CategoriesListControllerAux.$inject = ['MenuDataService'];
    function CategoriesListControllerAux(MenuDataService) {
     //Usado para la carga inicial
      console.log('CategoriesListControllerAux cargado');
      var categoriesList = this;
      categoriesList.items=MenuDataService.getAllCategories();
    }
    
    })();
    
