const { Builder, By, Key } = require('selenium-webdriver');
const assert = require('assert');

//describe block

describe('searching for something', () => {
  it('successfully searched ', async () => {
    //launch the browser

    let driver = await new Builder().forBrowser('firefox').build();

    //navigate to the website
    await driver.get('');

    //add all the infomation
    await driver
      .findElement(By.id('sampletodotext'))
      .sendKeys('hello', Key.RETURN);

    // assertions

    const search = await driver
      .findElement(By.xpath('//li[last()]'))
      .getText()
      .then((val) => {
        return val;
      });

    assert.strictEqual(search, 'hello');

    //close the browser

    await driver.quit();
  });
});
