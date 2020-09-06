(function(){
    "strict"
    angular.module('public')
    .controller('myInfoController',myInfoController);
    myInfoController.$inject=['MenuService','$scope'];

    function myInfoController(MenuService,$scope){
        console.log(MenuService.user);
        if(MenuService.user==undefined){
            $scope.verUser=false;
            $scope.verUserMensaje=true;
            $scope.usermensaje="Not Signed Up Yet.";
            return;
        }
        $scope.verUser=true;
        $scope.verUserMensaje=false;
        $scope.usermensaje="";

        $scope.firstName=MenuService.user.firstName;
        $scope.lastName = MenuService.user.lastName;
        $scope.email=MenuService.user.email;
        $scope.phone=MenuService.user.phone;
        $scope.menu=MenuService.menu;
        $scope.menuRuta= "images/menu/" +MenuService.menu.category_short_name  +"/" + MenuService.menu.category_short_name + ".jpg"
    }
})()