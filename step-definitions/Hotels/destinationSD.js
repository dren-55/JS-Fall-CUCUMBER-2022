const { When } = require("@wdio/cucumber-framework")
const { expect } = require("chai")
const Destination = require("../../POM/Hotels/Destination")
const HomePage = require("../../POM/Hotels/HomePage")
const homePage = new HomePage()
const destination = new Destination()

When(/^I search "(.+)" and select$/, async function(userInput) {
    await browser.maximizeWindow()
    await destination.clickInDestField()
    await browser.pause(1000)
    await destination.typeInDestField(userInput)
    await browser.pause(1000)
    await destination.selectDestination('Manhattan')
})

When(/^I enter Check-in date as (.+)$/, async function(checkIn) {
    await homePage.openCalendar()
    await homePage.selectCheckInDate(checkIn)
    await browser.pause(2000)

})

When(/^I enter Check-out date as (.+)$/, async function(checkOut) {
    await homePage.selectCheckOutDate(checkOut)
    await homePage.clickDoneOnCalendar()
    await browser.pause(2000)
})

When(/^I click on Search button$/, async function() {
    await destination.clickSearchButton()
    await browser.pause(1000)
})
When(/^I click on "(.+)" from star-rating filter$/,async function(star){
    await destination.scrollRatingIntoView()
    await browser.pause(2000)
    await destination.selectRating(star)
    await browser.pause(4000)
     
})

When(/^I select "(.+)" from sort-by dropdown$/,async function(selector){
    await destination.selectSortBy(selector)
    await browser.pause(6000)
    })

When(/^I verify all hotels in search results are (.+) rated$/,async function (property) {
    const starRating = property.substring(0, 1);
    let verifyRating = await destination.verifyStarRating(starRating);
    expect(verifyRating, 'Search results are NOT all 5*').to.be.true;
    }
      );

When(/^I verify all hotels are listed in increasing order by price$/,async function(){
    const allPrices =await destination.pricesInNumbers()
    expect(await destination.priceInIncreasingOrder(allPrices), 'Prices are not in increasing order').to.be.true;
    await browser.pause(4000)
      })