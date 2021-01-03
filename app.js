(function () {

    'use strict';

    angular.module('lunchModule', [])
        .controller('LunchController', lunchController);

    lunchController.$inject = ['$scope'];

    function lunchController($scope) {
        $scope.dishes = '';
        $scope.message = '';

        $scope.checkIfTooMuch = function(){
            if($scope.dishes === ''){
                $scope.message = 'Please enter data first';
            }else {
                var dishesItems = $scope.dishes.split(',');
                if(!checkIfArrayNotEmpty(dishesItems)){
                    $scope.message = 'Please enter valid item separated by comma';
                }else if(checkIfArrayNotEmpty(dishesItems) && dishesItems.length <= 3){
                    $scope.message = 'Enjoy!';
                }else{
                    $scope.message = 'Too much!';
                }
            }
        }

        function checkIfArrayNotEmpty(arr){
            return arr.every(function(x){
                return x !== '';
            });
        }
    }
})();

