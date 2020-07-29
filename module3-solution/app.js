(
    function(){
    'use strict';

    angular.module('NarrowItDownApp',[])
    .controller('NarrowItDownController',NarrowItDownController)
    .service('MenuSearchService',MenuSearchService)
    .constant('ApiBasePath',"https://davids-restaurant.herokuapp.com")
    .component('foundItems',{
        templateUrl:'itemsList.html',
        controller:myAppComponentCtrl,
        bindings:{
            foundItems:'<',
            onRemove:'&'
        }
    });

    myAppComponentCtrl.$inject = ['$scope', '$element']
    function myAppComponentCtrl($scope, $element) {
    var $ctrl = this;

    $ctrl.removeItem=function(index){
        console.log(index);
        $ctrl.foundItems.splice(index,1);
    }

    }


   
    NarrowItDownController.$inject=['MenuSearchService','$filter','$scope'];
    function NarrowItDownController(MenuSearchService,$filter,$scope){
        var ctrl=this;
        //const listadoAux=[];
        ctrl.onremove=function(index){
            console.log(index);
            ctrl.listadoMenu.splice(index,1);
        }

        ctrl.getMatchedMenuItems=function(pDescription){
            console.log(pDescription);
            var MenuSearchServicePromesa = MenuSearchService.getMatchedMenuItems();

            MenuSearchServicePromesa.then(function(response){

                console.log('antes del filtrado');

                $scope.msjResultado="";
                ctrl.items =$filter('filter')( response.data.menu_items,pDescription);
                // console.log(ctrl.listadoMenu);
                // ctrl.items=ctrl.listadoMenu;

                // console.log('despues del filtrado');
                // console.log(ctrl.listadoMenu.length);
                if (ctrl.items.length==0)
                {
                    $scope.msjResultado="Nothing found";   
                }
            })
            .catch(function(error){
                console.log(error);
            })
        }

    }

    MenuSearchService.$inject=['$http','ApiBasePath'];
    function MenuSearchService($http,ApiBasePath){
        var service=this;

        service.getMatchedMenuItems=function(){
            var response = $http({
                method:"GET",
                url:(ApiBasePath + "/menu_items.json") //,
                // params:{
                //     category:pDescription
                // }
            });

            return response;
        };
    }


})();