const { Given, Then, When } = require("@wdio/cucumber-framework")
const { expect, assert } = require("chai");
const Language =require("../../POM/Hotels/Language")
const lan = new Language()



When(/^I change language to (.+)$/, async function (newLanguageOption) {
    await browser.maximizeWindow()
    await lan.changeLanguage(newLanguageOption)
   
})
Then(/^I verify language got changed to (.+)$/, async (language) => {

    const expectedLanguage = language.toLowerCase();

    const languageOnWeb = await lan.getLanguageFromWeb()

    expect(languageOnWeb.toLowerCase(), `Language is not updated as expected -> ${language}`).to.equal(expectedLanguage)
})
