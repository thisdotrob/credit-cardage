'use strict';

angular.module('creditCardageApp.financeView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/financeView', {
    templateUrl: 'financeView/financeView.html',
    controller: 'financeViewCtrl'
  });
}])

.controller('financeViewCtrl', [function() {

}]);
