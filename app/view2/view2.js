'use strict';

angular.module('personality.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', function($scope, sharedResults) {
	var results = sharedResults.getResults();
	if (results.creative > 7){
		$scope.thought = "creative";
		$scope.personality = "crazy";
	} else if (results.boring > 7){
		$scope.thought = "boring";
		$scope.personality = "dull";
	} else if (results.genius > 7){
		$scope.thought = "precise";
		$scope.personality = "genius";
	} else {
		$scope.thought = "mixed";
		$scope.personality = "confused";		
	}
	// $scope.creativity = results.creative;
	// $scope.boring = results.boring;
	// $scope.genius = results.genius;
});