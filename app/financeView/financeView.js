'use strict';

angular.module('creditCardageApp.financeView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/financeView', {
    templateUrl: 'financeView/financeView.html',
    controller: 'financeViewCtrl'
  });
}])

.controller('financeViewCtrl', ['$http', function($http) {
  var vm = this;

  vm.showCard = function(card) {
    vm.cardShowing = card;
  }

  $http.get('cards.json').then(function(response){
    vm.cards = response.data;
  });

}]);
