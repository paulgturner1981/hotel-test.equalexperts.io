var config = require('../../nightwatch.conf.js');

module.exports = { 
  'Submit a booking': function (browser) {
    browser
      .useXpath()
      .url('http://hotel-test.equalexperts.io/')
      .waitForElementVisible('/html/body')
      .setValue('//*[@id="firstname"]', 'Test')
      .setValue('//*[@id="lastname"]', 'Booking')
      .setValue('//*[@id="totalprice"]', '100')
      .setValue('//*[@id="checkin"]', '2019-11-21')
      .setValue('//*[@id="checkout"]', '2019-11-26')
      .click('/html/body/div[1]/div[3]/div/div[7]/input')
      .pause(3000)
      .assert.containsText('/html/body', '2019-11-21')
        .assert.containsText('/html/body', '2019-11-26')
      .saveScreenshot('submit-a-booking.png')
      .end();
  }
};