'use strict';

describe('creditCardageApp.financeView module', function() {


  beforeEach(module('creditCardageApp.financeView'));


  describe('financeView controller', function(){

    var ctrl;
    var httpBackend;

    beforeEach(inject(function($controller, $httpBackend) {
      ctrl = $controller('financeViewCtrl');
      httpBackend = $httpBackend;
      httpBackend
        .expectGET("cards.json")
        .respond(cards);
    }));

    it('should intialize with a list of cards', function() {
      httpBackend.flush();
      expect(ctrl.cards).toEqual(cards);
    });

  });
});
