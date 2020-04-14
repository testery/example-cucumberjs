const { Builder } = require("selenium-webdriver");
const { Options } = require("selenium-webdriver/chrome");
const { When, Then, AfterAll } = require("cucumber");
const { expect } = require("chai");
const fs = require("fs");
require("chromedriver");

const options = new Options();

if (process.env.IS_TESTERY == "true") {
  options.addArguments(process.env.TESTERY_CHROME_ARGS.split(";"));
}

const browser = new Builder().forBrowser("chrome").setChromeOptions(options).build();

When("I navigate to {string}", async function (url) {
  await browser.get(url);
});

Then("the page title is {string}", { timeout: 60 * 1000 }, async function (title) {
  const expected = await browser.getTitle();
  expect(title).to.equal(expected);
});

Then("take a screenshot", async function () {
  const value = await browser.takeScreenshot();
  fs.writeFileSync("./screenshots/" + Math.random() + ".png", value, "base64");
});

AfterAll("end", async function () {
  await browser.quit();
});
