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

  describe('financeView', function() {
    beforeEach(function() {
      browser.get('index.html#/financeView');
    });

    it('should list credit cards by ascending APR', function() {
      var expectedAPRs =  [ "17.4% APR", "18.9% APR", "22.9% APR", "28.2% APR"];
      var expectedNames = [
        "Halifax", "Sainsbury's", "Barclaycard Platinum", "Virgin Money"
      ].map(function(name) {
        return name + " Credit Card";
      });

      function getActuals(column) {
        return element.all(
          by.repeater('card in financeCtrl.cards').column(column)
        ).map(function(element) {
          return element.getText();
        });
      };

      var actualAPRs = getActuals('card.apr');
      var actualNames = getActuals('card.name');
      expect(actualAPRs).toEqual(expectedAPRs);
      expect(actualNames).toEqual(expectedNames);

    });

    describe('clicking on a card', function() {
      beforeEach(function() {
        element.all(by.css('.card-name-container')).first().click();
      });

      it('displays the card image', function() {
        var img = element.all(by.css('.card-image')).first();
        expect(img.isPresent()).toBe(true);
        expect(img.getAttribute('src')).toContain('img/CARD_315.png');
      });

      it('shows the card description', function() {
        var expected = 'Earn 3% Rewards in all supermarkets until 31st' +
          ' December (0.5% at their petrol stations).';
        var actual = element.all(by.css('.card-info')).first().getText()
        expect(actual).toEqual(expected);
      });

      it('shows the card cashback rate', function() {
        var actual = element.all(by.css('.card-cashback')).first().getText();
        expect(actual).toEqual("£50.10");
      })
    })

  });

});
