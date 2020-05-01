(function(){
'use strictic';

angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject=['$scope','$filter'];
function LunchCheckController($scope,$filter){
    var resultado=""
    $scope.resultadoColor = {};
    $scope.verificar= function(listadoP){

        if (listadoP  ==undefined || listadoP.length==0 )
        {
            $scope.resultadoColor.color='red';
            resultado="Please enter data first";   
            $scope.resultado=resultado; 
            
            return;
        }

        console.log('continuo');

        var elementos = listadoP.split(',');

       $scope.resultadoColor.color='blue';

        if (elementos.length <=3)
            resultado="Enjoy!";
        else if (elementos.length>3)
            resultado="Too much!";
      
        $scope.resultado=resultado; 

        
    }
}


})();