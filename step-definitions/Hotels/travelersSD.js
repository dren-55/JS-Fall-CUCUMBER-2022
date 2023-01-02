const { Given, Then, When } = require("@wdio/cucumber-framework")
const { expect, assert } = require("chai");
const TravelersPg =require("../../POM/Hotels/TravelersPg")
const travelPg = new TravelersPg()



When(/^I click on Travelers$/, async function() {
    await travelPg.clickOnTravelersMenu()
})

When(/^I select “Children” as 2$/, async function() {
    await travelPg.addKidsRoomOne(2)
    await browser.pause(2000)
})

When(/^I verify children-age dropdown are 2$/, async function() {
    const numberOfDropdowns = await travelPg.numberOfKidsDropdown()
    expect(numberOfDropdowns, 'Number dropdowns is NOT as expected').to.be.equal(2)
})

When(/^I verify Plus button is enabled$/, async function() {
    const plusBttnEnabled = await travelPg.isPlusBttnEnabled()
    console.log(`\n\nEK->${plusBttnEnabled}\n\n`);
    expect(plusBttnEnabled, 'Plus button is NOT enabled').to.be.true
})

When(/^I verify Minus button is enabled$/, async function() {
    const minusBttnEnabled = await travelPg.isPlusBttnEnabled()
    expect(minusBttnEnabled, 'Plus button is NOT enabled').to.be.true
})

When(/^I select “Children” as 6$/, async function() {
    await travelPg.addKidsRoomOne(4)
    await browser.pause(2000)
})

When(/^I verify Children-age dropdown are 6$/, async function() {
    const numberOfDropdowns = await travelPg.numberOfKidsDropdown()
    expect(numberOfDropdowns, 'Number dropdowns is NOT as expected').to.be.equal(6)
})

When(/^I verify plus-button is disabled$/, async function() {
    await browser.pause(2000)
    const plusBttnDisabled = await travelPg.isPlusBttnDisabled()
    expect(plusBttnDisabled, 'Plus button IS enabled').to.be.false
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
    const numberOfDropdowns = await travelPg.isKidsDropdowDisplayed()
    expect(numberOfDropdowns,'Dropdown menu IS displayed').to.be.false
})

Then(/^I verify minus-button is disabled$/, async function() {
    const minusBttnDisabled = await travelPg.isMinusBttnDisabled()
    expect(minusBttnDisabled, 'Plus button IS enabled').to.be.false
})

When(/^I select "Adults" as 6$/, async function() {
    await travelPg.addAdultsRoomOne(4)
    await browser.pause(1000)
})

When(/^I select "Children" as 3$/, async function() {
    await travelPg.addKidsRoomOne(3)
    await browser.pause(1000)
})

When(/^I select first child age: "(.+)"$/, async function(selectThis) {
    await travelPg.frstKidsDropdowSelect(selectThis)
})

When(/^I select second child age: "(.+)"$/, async function(selectThis) {
    await travelPg.sndKidsDropdowSelect(selectThis)
})

When(/^I select third child age: "(.+)"$/, async function(selectThis) {
    await travelPg.thrdKidsDropdowSelect(selectThis)
    await browser.pause(2000)
})

When(/^I click Done button$/, async function() {
    await travelPg.clickDoneBttn()
    await browser.pause(2000)
})

When(/^I verify total number of guests is 9$/, async function() {
    const totalTravelers = await travelPg.getTotalTravelers()
    expect(totalTravelers, 'Total numberof travelers is NOT as expected').to.equal(9)
})