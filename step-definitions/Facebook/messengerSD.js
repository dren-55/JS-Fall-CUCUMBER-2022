
const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const MessengerLoginPage = require("../../POM/Facebook/Messenger");




const messengerLoginPage = new MessengerLoginPage();


Given(/^I am on facebook$/, async function () {
    await browser.url('https://www.facebook.com');  
});

When(/^I click messenger link$/, async function () {
    await messengerLoginPage.clickMessenger();
});

When(/^I click login button$/, async function () {
    await messengerLoginPage.clickLogin();
});

Then(/^I verify error link is displayed$/, async function () {

    expect(await messengerLoginPage.isErrorLinkDisplayed(),'login error is not displayed').to.be.true;
});