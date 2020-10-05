const homePage = require('../Pages/GoogleHomePage');

const { Given, When, Then } = require('cucumber');
const searchValue = "Clover POS";


  Given(/^User visits google$/, function () {
      browser.url("/");
    });

  When(/^User searches for term "([^"]*)"$/, function (searchValue) {
     browser.$(homePage.googleLogo).waitForExist();
     browser.$(homePage.googleSearchField).setValue(searchValue);
     browser.keys('Enter');
    });

  Then(/^User will see expected first item in list of results$/, function () {
      const elem = browser.$(homePage.firstResult);
      const value = elem.getText();
  });

