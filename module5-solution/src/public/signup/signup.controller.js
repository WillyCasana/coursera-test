(function(){
    "use strict";

    angular.module('public')
    .controller('SignUpController',SignUpController);

    SignUpController.$inject=['$scope','$http','MenuService'];

    function SignUpController($scope,$http,MenuService){
        var $ctrl= this;
        // $ctrl.reg.Submit=function(){
        //     $ctrl.reg.completed=true;
        console.log('En el controller SignUpController');
        $scope.Submit=function(user){
            MenuService.user=user;
            console.log(user);
            $scope.completed=true;
            consultarMenu(user.menuN);
        }

        function consultarMenu(menu){
            $http({
                url:'https://www.davidchuschinabistro.com/menu_items/' + menu + '.json',
                method:'Get'
            }).then(function(response){
                console.log('Correcto');
                $scope.mensajeSubmit="Your information has been saved";
                console.log(response.data);
                MenuService.menu=response.data;
            },function(responseError){
                console.log('Incorrecto');
                $scope.mensajeSubmit="No such menu number exists";
            })
        }

    }

 

}
)()
