'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('credit cardage app', function() {


  it('should automatically redirect to /homeView when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/homeView");
  });

  it('displays the main logo', function() {
    browser.get('index.html');
    var img = element(by.id('logo'));
    expect(img.isPresent()).toBe(true);
    expect(img.getAttribute('src')).toContain('img/logo.svg');
  })

  it('should not have any broken images', function () {
    browser.executeAsyncScript(function (callback) {
        var imgs = document.getElementsByTagName('img');
        var loaded = 0;
        for (var i = 0; i < imgs.length; i++) {
            if (imgs[i].naturalWidth > 0) {
                loaded = loaded + 1;
            };
        };
        callback(imgs.length - loaded);
     }).then(function (brokenImagesCount) {
        expect(brokenImagesCount).toBe(0);
    });
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
