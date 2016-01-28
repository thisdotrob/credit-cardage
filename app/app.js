'use strict';

// Declare app level module which depends on views, and components
angular.module('creditCardageApp', [
  'ngRoute',
  'creditCardageApp.homeView',
  'creditCardageApp.financeView'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/homeView'});
}]);
