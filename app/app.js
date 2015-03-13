'use strict';

// Declare app level module which depends on views, and components
angular.module('personality', [
  'ngRoute',
  'personality.view1',
  'personality.view2',
  'personality.service'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);