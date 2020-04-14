const { Builder, By, Capabilities, Key } = require("selenium-webdriver");
const { When, Then, AfterAll } = require("cucumber");
const { expect } = require("chai");
const fs = require("fs");
require("chromedriver");

const capabilities = Capabilities.chrome();

if (process.env.IS_TESTERY == "true") {
  capabilities.set("chromeOptions", {
    args: process.env.TESTERY_CHROME_ARGS.split(","),
  });
}

const browser = new Builder().withCapabilities(capabilities).build();

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
