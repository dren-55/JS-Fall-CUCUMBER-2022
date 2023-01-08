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