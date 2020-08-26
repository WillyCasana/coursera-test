(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider',];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page v1
  .state('home', {
    url: '/',
    templateUrl: 'src/menulist/templates/home.template.html',
    controller:'CategoriesListControllerAux'
  })

  // category list
  .state('categoriesList', {
    url: '/categories-list',
    templateUrl: 'src/menulist/templates/main-categorieslist.template.html'
    ,
    controller: 'CategoriesListController as categoriesList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
       // return MenuDataService.getItems();
      }]
    }
  })

  //items Category v1
  .state('itemsCategory',{
    url:'/items-category/{itemCatId}',
    templateUrl:'src/menulist/templates/main-itemscategory.template.html',
    controller:'ItemCategoriesListController as ItemCategoriesList',
    resolve:{
      itemsxcat:['$stateParams','MenuDataService',
            function($stateParams,MenuDataService){
             // console.log("viene del routes2.js");
              return MenuDataService.getItemsForCategory($stateParams.itemCatId);
            
            }]
    }
  })

}

})();
