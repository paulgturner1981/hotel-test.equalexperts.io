var config = require('../../nightwatch.conf.js');

module.exports = { 
  'Hotel Test Assert Title': function (browser) {
    browser
      .url('http://hotel-test.equalexperts.io/')
      .waitForElementVisible('body')
      .assert.title('Hotel booking form')
      .saveScreenshot('hotel-booking-form.png')
      .end();
  }
};