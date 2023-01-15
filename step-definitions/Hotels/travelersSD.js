const { Given, Then, When } = require("@wdio/cucumber-framework")
const { expect, assert } = require("chai");
const Travelers =require("../../POM/Hotels/TravelersPg")
const travelPg = new Travelers()

When(/^I click on Travelers$/, async function() {
    await travelPg.clickTravelersField()
    await browser.pause(1000)
})

When(/^I select "Adults" as 6$/, async function() {
    await travelPg.addAdultsRoom(4)
    await browser.pause(1000)
})

When(/^I select "Children" as 3$/, async function() {
    await travelPg.addChildRoom(3)
    await browser.pause(1000)
})

When(/^I select first child age: "(.+)"$/, async function(selectThis) {
    await travelPg.selectForFirstKid(selectThis)
})

When(/^I select second child age: "(.+)"$/, async function(selectThis) {
    await travelPg.selectForSecondKid(selectThis)
})

When(/^I select third child age: "(.+)"$/, async function(selectThis) {
    await travelPg.selectForThirdKid(selectThis)
    await browser.pause(2000)
})

When(/^I click Done button$/, async function() {
    await travelPg.clickDoneButton()
    await browser.pause(2000)
})

Then(/^I verify total number of guests is 9$/, async function() {
    const totalTravelers = await travelPg.getTotalTravelers()
    console.log(`total number of travelers ----------->${totalTravelers}`);
    expect(totalTravelers, 'total number of travelers is not as expected').to.equal(9)
})

// @TC-28-----------------------------------------------

When(/^I select “Children” as 2$/, async function() {
    await travelPg.addChildRoom(2)
    await browser.pause(2000)
})

When(/^I verify children-age dropdown are 2$/, async function() {
    const numberOfDropdowns = await travelPg.numberOfKidsDropdown()
    expect(numberOfDropdowns, 'Number dropdowns is NOT as expected').to.be.equal(2)
})

When(/^I verify Plus button is enabled$/, async function() {
    const plusButtonEnabled = await travelPg.isPlusButtonEnabled()
    console.log(`\n\-------------------------->${plusButtonEnabled}\n\n`);
    expect(plusButtonEnabled, 'Plus button is NOT enabled').to.be.true
})

When(/^I verify Minus button is enabled$/, async function() {
    const minusButtonEnabled = await travelPg.isMinusButtonEnabled()
    expect(minusButtonEnabled, 'Plus button is NOT enabled').to.be.true
})

When(/^I select “Children” as 6$/, async function() {
    await travelPg.addChildRoom(4)
    await browser.pause(2000)
})

When(/^I verify Children-age dropdown are 6$/, async function() {
    const numberOfDropdowns = await travelPg.numberOfKidsDropdown()
    expect(numberOfDropdowns, 'Number dropdowns is NOT as expected').to.be.equal(6)
})

When(/^I verify plus-button is disabled$/, async function() {
    await browser.pause(4000)
    const isPlusButtonEnabled = await travelPg.isPlusButtonDisabled()
    expect(isPlusButtonEnabled, 'Plus button IS enabled').to.be.false
})

When(/^I select “Children” as 5$/, async function() {
    await travelPg.removeKidsRoomOne(1)
    await browser.pause(2000)
})

When(/^I verify Children-age dropdown are 5$/, async function() {
    const numberOfDropdowns = await travelPg.numberOfKidsDropdown()
    expect(numberOfDropdowns, 'Number dropdowns is NOT as expected').to.be.equal(5)
})

When(/^I select “Children” as 0$/, async function() {
    await travelPg.removeKidsRoomOne(5)
    await browser.pause(2000)
})

When(/^I verify Children-age dropdown is NOT displayed$/, async function() {
    console.log(`\n\n\n\n\n on HomePage I verify Children-age dropdowns are NOT displayed`);
    const numberOfDropdowns = await travelPg.verifyAgeDropDownDisplayed()
    expect(numberOfDropdowns,'Dropdown menu IS displayed').to.be.false
})

Then(/^I verify minus-button is disabled$/, async function() {
    const isMinusButtonDisabled = await travelPg.isMinusButtonDisabled()
    expect(isMinusButtonDisabled, 'Plus button IS enabled').to.be.false
})
