(function(){
	'use strict';

	angular.module('LunchCheck',[])
	.controller('LunchController',LunchController);

	LunchController.$inject = ["$scope"]

	function LunchController($scope){

		$scope.dishes = ""

		$scope.clear = function() {
			$scope.message = ""
		}

		$scope.checkLunch = function(){

			var dishes = $scope.dishes.split(',')
						.map(function(x) {
							return x.trim();
						})
						.filter(function(x){
							return x.length > 0;
						})

			if(dishes.length == 0){
				$scope.message = "Please enter data first.";
				return
			}

			var totalDishCount = dishes.length

			console.log(totalDishCount)

			if(totalDishCount>3){
				$scope.message = "Too much!"
			}else if(totalDishCount>0){
				$scope.message = "Enjoy!"
			}else{
				$scope.message = "Incorrect number of dishes."
			}

			
		}

	};
})();