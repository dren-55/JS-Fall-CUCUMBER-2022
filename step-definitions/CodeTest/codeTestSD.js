const { Given, Then, When } = require("@wdio/cucumber-framework")
const { expect, assert } = require("chai");
const CodeTestPOM =require('../../POM/CodeTest/CodeTest')
const codeTestPom = new CodeTestPOM()

When(/^I click on Language selector$/, async function() {
    await codeTestPom.clickOnLanguageSelector()
    await browser.pause(5000);
})


When(/^I click on Language dropdown$/, async function() {
    await codeTestPom.clickOnLanguageDropDown()
})
When(/^I change language to Español (Estados Unidos)$/, async function() {
    await codeTestPom.clickOnSpanish()
    await browser.pause(5000);
})

Then(/^I verify language got changed to Español$/, async function() {
    expect(codeTestPom.isLanguageAsSpanishEnabled, 'Spanish is enabled').to.be.true
})


When(/^I click on travelers$/, async function() {
    await codeTestPom.clickOnTravelersMenu()
})

When(/^I select number of adults in Room 1 as 1$/, async function() {
    await codeTestPom.subtractAdultsRoomOne(1)
})

Then(/^I verify the minus button for adults is disabled$/, async function() {
    expect(codeTestPom.isMinusButtonEnabled, 'Plus button is enabled').to.be.false
})
Then(/^I verify the plus button for adults is enabled$/, async function() {
    expect(codeTestPom.isPlusButtonEnabled, 'Plus button is NOT enabled').to.be.true
})
When(/^I select number of adults in Room 1 as 14$/, async function() {
    await codeTestPom.addAdultsRoomOne(14)
})
Then(/^I verify the plus button for adults is enabled$/, async function() {
    expect(codeTestPom.isPlusButtonEnabled, 'Plus button is NOT enabled').to.be.false
})
Then(/^I verify the minus button for adults is disabled$/, async function() {
    expect(codeTestPom.isMinusButtonEnabled, 'Plus button is enabled').to.be.true
})