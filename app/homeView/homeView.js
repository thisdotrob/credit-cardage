'use strict';

angular.module('creditCardageApp.homeView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/homeView', {
    templateUrl: 'homeView/homeView.html',
    controller: 'homeViewCtrl'
  });
}])

.controller('homeViewCtrl', [function() {

}]);
