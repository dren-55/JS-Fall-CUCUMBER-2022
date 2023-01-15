const { Given, Then, When } = require("@wdio/cucumber-framework")
const { expect, assert } = require("chai");
const Language =require("../../POM/Hotels/Language")
const lan = new Language()



When(/^I change language to (.+)$/, async function (newLanguageOption) {
    await browser.maximizeWindow()
    await lan.changeLanguage(newLanguageOption)
   
})
Then(/^I verify language Got Changed to (.+)$/, async (language) => {

    const languageOnWeb = await lan.getLanguageFromWeb()
    console.log(`------------------------------------>${languageOnWeb}`);
    console.log(`------------------------------------>${language}`);
    expect(languageOnWeb, 'Language is not updated as expected').to.equal(language);
})