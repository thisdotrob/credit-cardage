'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('credit cardage app', function() {

  it('should automatically redirect to /homeView when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/homeView");
  });

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

  describe('navbar', function() {
    it('displays the main logo', function() {
      var img = element(by.id('logo'));
      expect(img.isPresent()).toBe(true);
      expect(img.getAttribute('src')).toContain('img/logo.svg');
    });

    it('displays the 7 nav buttons, in the correct order', function() {
      var expectedContents = [
        { image: 'img/home.png',      text: '' },
        { image: 'img/vehicles.png',  text: 'Vehicles' },
        { image: 'img/pet.png',       text: 'Home & pet' },
        { image: 'img/finances.png',  text: 'Finances' },
        { image: 'img/life.png',      text: 'Life' },
        { image: 'img/business.png',  text: 'Business' },
        { image: 'img/travel.png',    text: 'Travel' }
      ];
      var buttons = element(by.id('navbar')).all(by.css('.btn'));
      expect(buttons.count()).toBe(7);
      for (var i = 0; i < 7; i++) {
        var button = buttons.get(i)
        expect(button.getText()).toEqual(expectedContents[i].text)
        var imageSrc = button.element(by.tagName('img')).getAttribute('src');
        expect(imageSrc).toContain(expectedContents[i].image);
      }
    });

    it('can navigate to the finance tab amd back home', function() {
      var buttons = element(by.id('navbar')).all(by.css('.btn'));
      buttons.get(3).click();
      expect(browser.getLocationAbsUrl()).toMatch("/financeView");
      buttons.get(0).click();
      expect(browser.getLocationAbsUrl()).toMatch("/homeView");
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

    it('should list credit cards by ascending APR', function() {
      expect(element.all(by.repeater('card in financeCtrl.cards')).count()).toBe(4);
    });
  });

});
