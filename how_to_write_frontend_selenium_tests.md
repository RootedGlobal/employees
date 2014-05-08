#Frontend testing with Selenium WebDriver, and Mocha on node.

__Selenium__ allows us to control a web browser via node. Here we'll use
__Selenium__ in combination with the testing framework __Mocha__ to simulate user interactions with our webapp and generate reports.

##Helpful links:

https://www.npmjs.org/package/selenium-webdriver
https://code.google.com/p/selenium/wiki/WebDriverJs
http://chromedriver.storage.googleapis.com/index.html
http://visionmedia.github.io/mocha


##Install

To get started go ahead and copy the starter directory /testexamples.
It should have an example.test.js file, and the chromewebdriver.

Install mocha globally

    npm install -g mocha

Install selenium locally

    npm install selenium-webdriver

Great, now let's just make sure it's working. **basic.test.js** is just a node
script, but we'll use **mocha** to run it. **Mocha** will handle the reporting.

    mocha basic.test.js

Hopefully we saw some magic browser action, and 1 passing test in our termnial.

##Structure tests for complex web applications.

That was fun, but more than likely we'll need to more substantial tests.
Due to the asychronous nature of both our browser, and node application
