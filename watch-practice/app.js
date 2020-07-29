var app = angular.module('juegoApp',[]);
app.controller('juegoAppCtrl',($scope)=>{
    $scope.juegos=['Metro 2033','Starcraft','Age of Empires','Warcraft'];
    $scope.addToGamesList=function(juego){
        $scope.gamesCounter++;
    };

    $scope.gamesCounter=0;

    $scope.$watch('gamesCounter',function(nuevoValor,antiguoValor){
        if(nuevoValor==2){
            alert('Muy bien!, ya tiene 2 juegos');
        }
    });

    $scope.$postLink =function(){
        console.log('ingreso a $postLink')
    }


})