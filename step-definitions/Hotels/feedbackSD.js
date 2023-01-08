const { When, Then } = require("@wdio/cucumber-framework");
const Commands =require("../../POM/Commands")
const Feedback =require("../../POM/Hotels/Feedback")
const { expect, assert } = require("chai");
const feedback = new Feedback()
const commands = new Commands();

When(/^I click on Sign in$/, async function () {
    await browser.maximizeWindow()
    await feedback.clickSignInButton()
})
When(/^I click on "Feedback"$/, async function () {
    const hotelWindowHandle = await commands.getHandle()
    await feedback.clickFeedbackLink()
    const allWindowHandles = await commands.getHandles()
    for (const handle of allWindowHandles) {
        if (handle !== hotelWindowHandle) {
            await commands.switchToWindowHandle(handle)
        }
    }
})
When(/^I click on Submit button$/, async function () {
    await feedback.clickSubmitButton()
    await browser.pause(3000)
})
When(/^I verify error message is displayed$/, async function(){
    const textOfError = await feedback.getErrorText()
    expect(textOfError, 'error msg is not displayed').to.be.equal('Please fill in the required information highlighted below.')
})
Then(/^I Verify star boxes section is in a red dotted box.$/, async function() {
    const starGroupElem = await feedback.findParentOfStarRating()
    const expectedParentIdAttribute = 'required_box_page_rating'
    expect(starGroupElem,'').to.be.equal(expectedParentIdAttribute)
})

When(/^I select any star-rating$/, async function() {

    await feedback.selectThreeStarRating()
})

When(/^I enter any comments$/, async function() {
    await feedback.typeInCommentBox('Good booking experience.')
    await browser.pause(2000) 
})

When(/^I select "(.+)" for how likely are you to return to Hotels$/, async function(selection) {
    await feedback.selectLikelyFrmDropDown(selection)
    await browser.pause(2000)
})

When(/^I select any answer for “Prior to this visit, have you ever booked on Hotels website”$/, async function() {
    await feedback.selectNoForBookBfr()
})

When(/^I select either button for ”Did you accomplish what you wanted to do on this page”$/, async function() {
    await feedback.selectYesForAccomplish()
})

Then(/^I verify “THANK YOU FOR YOUR FEEDBACK.“ is displayed$/, async function() {
    await browser.pause(4000)
    const thankYouMsg = await feedback.getThankYouMsgText()
    const expectedMsg = 'THANK YOU FOR YOUR FEEDBACK.'
    expect(thankYouMsg, 'Message is NOT as expected').to.be.equal(expectedMsg)
})