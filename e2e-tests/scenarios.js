'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('credit cardage app', function() {


  it('should automatically redirect to /homeView when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/homeView");
  });


  describe('homeView', function() {

    beforeEach(function() {
      browser.get('index.html#/homeView');
    });


    it('should render homeView when user navigates to /homeView', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for home view/);
    });

  });


  describe('financeView', function() {

    beforeEach(function() {
      browser.get('index.html#/financeView');
    });


    it('should render financeView when user navigates to /financeView', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for finance view/);
    });

  });
});
