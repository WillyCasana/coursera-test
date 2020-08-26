(function () {
    'use strict';
    
    angular.module('MenuApp')
    .controller('ItemCategoriesListController', ItemCategoriesListController);
    
    // 'item' is injected through state's resolve
    //al usar items viene del otro state
    ItemCategoriesListController.$inject = ['itemsxcat','MenuDataService']  
    function ItemCategoriesListController(itemsxcat,MenuDataService) {
        var ItemCategoriesList=this;
      
        ItemCategoriesList.obtenerItemsXCat=function(){
         return MenuDataService.obtenerUltimoValorPorCat();;
          
        }

    }
    
    })();