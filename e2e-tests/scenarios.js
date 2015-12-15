'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('app', function() {


  it('should automatically redirect to /Login when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/Login");
  });


  describe('Login', function() {

    beforeEach(function() {
      browser.get('index.html#/Login');
    });


    it('should render Login when user navigates to /Login', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for Login/);
    });

  });


  describe('Tasks', function() {

    beforeEach(function() {
      browser.get('index.html#/Tasks');
    });


    it('should render Tasks when user navigates to /Tasks', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for Tasks/);
    });

  });
});
