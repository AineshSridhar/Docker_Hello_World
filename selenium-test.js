const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function() {
  let driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options().headless())
    .build();
  try {
    await driver.get('file:///C:/Users/Ainesh/Desktop/Coding/DevOps/HelloWorld/index.html');
    // Add your test assertions here
    await driver.quit();
  } catch (error) {
    console.error(error);
    await driver.quit();
  }
})();
