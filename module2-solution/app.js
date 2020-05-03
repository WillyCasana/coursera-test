(function(){
'use strict';

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService)

ToBuyController.$inject =['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService)
{
    var showList = this;
   // var result = false;
   
    showList.items=ShoppingListCheckOffService.getItems();
    showList.removeItem=function(itemIndex){
        ShoppingListCheckOffService.removeItem(itemIndex);
        //result = ShoppingListCheckOffService.getallBought();
    }

    showList.allBought = function(){
        return ShoppingListCheckOffService.getallBought();
    }

   /*  showList.allBought=ShoppingListCheckOffService.getallBought();
    console.log('ingreso'); */

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
    var showListB= this;
   
   
    showListB.items=ShoppingListCheckOffService.getItemsB();
    //showListB.nothingBought = ShoppingListCheckOffService.getnothingBought();
    showListB.nothingBought = function(){
        return ShoppingListCheckOffService.getnothingBought();
    }
}

function ShoppingListCheckOffService(){
    var service=this;


    var items=[{name:"cookies1", quantity:10},{name:"cookies2", quantity:20}, {name:"cookies3", quantity:10}
    ,{name:"cookies4", quantity:20}, {name:"cookies5", quantity:10}];

    var itemsB=[];


    var allBought=false;
    var nothingBought=true;

service.removeItem=function(itemIndex){
    var element = items[itemIndex];
    itemsB.push(element);
    items.splice(itemIndex,1);

    console.log(itemsB.length)

    if(itemsB.length>0)
    {
        nothingBought=false;
        console.log(nothingBought)
    }
        
    if(items.length==0)
        allBought=true;
}

service.getItems=function(){
    return items;
}

service.getItemsB = function(){
    return itemsB;
}

service.getallBought=function(){
    return allBought;
}

service.getnothingBought=function(){
    return nothingBought;
}

}

})()