const { When, Then } = require("@wdio/cucumber-framework");
const HomePage = require("../../POM/Hotels/HomePage")
const { expect, assert } = require("chai");
const homePage = new HomePage()

When(/^I scroll to “Get the app“ button$/, async function () {
    await homePage.scrollToGetTheApp()
    await homePage.clickPhoneNumberBox()
})
When(/^I enter “(.+)” in Phone number$/, async function (Phone) {
    await homePage.enterPhoneNumber(Phone)
})
When(/^Click on “Get the app“ button$/, async function () {
    await homePage.clickGetTheApp()
})
Then(/^I verify “Please enter a valid phone number.“ error is displayed$/, async function() {
    const errorTxt = await homePage.getErrorText()
    expect(errorTxt, 'error msg is not displayed').to.be.equal('Please enter a valid phone number.')
})


When(/^I click on dates$/, async () => {
    await browser.maximizeWindow()
    await homePage.openDates();

})

When(/^I go to current month if not displayed$/, async () => {

    const isCurrentMonthDisplayed = await homePage.getDisplayedMonth();
    if (!isCurrentMonthDisplayed) {
        await homePage.viewEarlierMonths()
    }
    await browser.pause(2000)

})

Then(/^I verify for current month$/, async () => {
    
    expect(await homePage.verifyMonth(), 'Current month is not displayed').to.be.true;

})

Then(/^I verify past dates are disabled$/, async () => {

    const dateStatus = await homePage.arePastDatesInCalendarEnabled();
    expect(dateStatus, 'Past dates are not all disabled').to.be.false;

})

Then(/^I verify back button on current month is disabled$/, async () => {
    
    const prevMonthButtonStatus = await homePage.isBackArrowInCalendarEnabled();
    expect(prevMonthButtonStatus, 'Previous month button is enabled').to.be.false;

})