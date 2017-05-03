angular.module('EventCMS')

.controller("ListCtrl", [
    "$scope", "$rootScope", "$state", "$log", "$stateParams", "$http",
    function($scope, $rootScope, $state, $log,  $stateParams, $http) {
    	$log.info("ListCtrl ran")
    	$scope.frequences = [{name:"yearly", value: 1}, {name:"half-yearly", value:2}]
    	$scope.selectedFr = {value:$scope.frequences[0]}


    	$scope.calcRange = function(start, end) {
		    var result = [];
		    for (var i = start; i <= end; i++) {
		        result.push(i);
		    }
		    return result;
		};
		$scope.range = $scope.calcRange(1, 10)

		$scope.calculateInterest = function(){
			if($scope.interestModel == 'simple'){
				$scope.finalInterest = $scope.principal * ($scope.rateInterest /100) * $scope.years
				$scope.total = $scope.principal + $scope.finalInterest
			}else{
				
				$scope.finalInterest = ($scope.principal* Math.pow((1 + (($scope.rateInterest)/($scope.selectedFr.value.value*100))), ($scope.selectedFr.value.value*$scope.years))) - $scope.principal;
				$scope.total = $scope.principal + $scope.finalInterest
			}
		}


}])