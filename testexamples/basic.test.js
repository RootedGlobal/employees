/*This is a basic test to make sure mocha, and selenium are working

  It should open up google in chrome,
    enter some text in the search input,
    then check to make sure the input matches what we just entered
    After it runs this assertion it should close the browser.
*/

var assert = require('assert'),
test = require('selenium-webdriver/testing'),
webdriver = require('selenium-webdriver');

test.describe('Google Search', function() {
  test.it('should work', function() {
    var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();
driver.get('http://www.google.com');
    var searchBox = driver.findElement(webdriver.By.name('q'));
    searchBox.sendKeys('simple programmer');
    searchBox.getAttribute('value').then(function(value) {
      assert.equal(value, 'simple programmer');
    });
    driver.quit();
  });
});
