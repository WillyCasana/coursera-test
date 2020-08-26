(function () {
    'use strict';
    
    angular.module('MenuApp')
    .service('MenuDataService',MenuDataService );

    MenuDataService.$inject =['$http','$stateParams']
    function MenuDataService($http,$stateParams){
        var service=this;

        console.log("MenuDataService cargado");
        console.log("El valor de $stateParams.itemCatId es :",$stateParams.itemCatId);

        var items=[];
        var itemsCategory=[];
       
        service.obtenerUltimoValorPorCat=function(){
            return itemsCategory;
        }

        $http({
            url:'https://davids-restaurant.herokuapp.com/categories.json',
            method:'Get'
        }).then(function(response){
            console.log('en el $http del menudata.service.js')
            items=response.data;
        },function(response){
            console.log(response.error);
        })
       
        service.getAllCategories =function(){
           
           return items;
        }

        service.getItemsForCategory=function(categoryShortName){
            $http({
                method:'Get',
                url:'https://davids-restaurant.herokuapp.com/menu_items.json?category=' + categoryShortName
            }).then(function(response){
                itemsCategory= response.data;
                console.log(categoryShortName);
                console.log(response.data);
            },function(response){
                console.log(response.error);
            })

            return itemsCategory;
        }
    }
    
    })();