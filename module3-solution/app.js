(
    function(){
    'use strict';

    angular.module('myApp',[])
    .controller('myAppCtrl',myAppCtrl)
    .service('myAppService',myAppService)
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

    $ctrl.eliminarItemNv=function(index){
        console.log(index);
        $ctrl.foundItems.splice(index,1);
    }

    }


   
    myAppCtrl.$inject=['myAppService','$filter','$scope'];
    function myAppCtrl(myAppService,$filter,$scope){
        var ctrl=this;
        //const listadoAux=[];
        ctrl.onremove=function(index){
            console.log(index);
            ctrl.listadoMenu.splice(index,1);
        }

        ctrl.obtenerListadoMenu=function(pDescription){
            console.log(pDescription);
            var myAppServicePromesa = myAppService.getListadoMenu();

            myAppServicePromesa.then(function(response){

                console.log('antes del filtrado');

                $scope.msjResultado="";
                ctrl.listadoMenu =$filter('filter')( response.data.menu_items,pDescription);
                console.log(ctrl.listadoMenu);
                ctrl.items=ctrl.listadoMenu;

                console.log('despues del filtrado');
                console.log(ctrl.listadoMenu.length);
                if (ctrl.listadoMenu.length==0)
                {
                    $scope.msjResultado="Nothing found";   
                }
            })
            .catch(function(error){
                console.log(error);
            })
        }

    }

    myAppService.$inject=['$http','ApiBasePath'];
    function myAppService($http,ApiBasePath){
        var service=this;

        service.getListadoMenu=function(){
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