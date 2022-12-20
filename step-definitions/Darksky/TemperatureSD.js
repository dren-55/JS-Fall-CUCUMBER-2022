// it('Get all time-datapoint values from timeline', async () => {
        
//     await browser.url('https://www.darksky.net');

//     const allTempElements = await $$('//span[starts-with(@class, "hour")]//span');

//     const allTempValues = [];

//     for (const tempElement of allTempElements) {
//         allTempValues.push(await tempElement.getText());
//     }
//     console.log(`\n allTempValues -> ${allTempValues} \n`); // [Now 1pm 3pm 5pm 7pm 9pm 11pm 1am 3am 5am 7am 9am]

//     /**
//      * Create your own expected array
//      */
//     let expTimeline = ['Now']

//     let newTime = moment().add(2, 'hour');

//     for (let i = 2; i <= 12; i++) {
//         expTimeline.push(newTime.format('ha'));
//         newTime = newTime.add(2, 'hour');
//     }
//     console.log(`\n expTimeline -> ${expTimeline} \n`);

//     expect(allTempValues, 'Timeline is not as expected').to.deep.equal(expTimeline);

// });


const { Given, Then, When } = require("@wdio/cucumber-framework");
const { expect , assert } = require("chai");
const moment = require("moment");
const LandingPage = require("../../POM/DarkSky/LandingPage");
const lPage = new LandingPage() 

Given(/^I am on darksky landing page$/, async function() {
    await browser.url('https://www.darksky.net');
})

Then(/^I verify "feels like temp" is above "min temp"$/, async function() {
    const feelsLikeField = await lPage.getFeelsLikwTempValue()
    const lowTempField = await lPage.getLowTempValue()
    expect (feelsLikeField, 'Feels like temp is NOT above min temp').to.be.above(lowTempField)
})

Then(/^I veryfy "feels like temp" is below "max temp"$/, async function() {
    const feelsLikeField = await lPage.getFeelsLikwTempValue()
    const highTempField = await lPage.getHighTempValue()
    expect (feelsLikeField, 'Feels like temp is NOT below max temp').to.be.below(highTempField)
})

When(/^I verify temperature for current location$/, async function() {
    const tempForDefaultLoc = await lPage.currentTempForThisArea()
    console.log(`\n${tempForDefaultLoc}\n`);
})

When(/^I enter (".*") zipcode$/, async function(zipCode) {
    await lPage.setNewLocation(zipCode)

    const tempForEnteredLoc = await lPage.currentTempForThisArea()
    console.log(tempForEnteredLoc);
    await browser.pause(2000)
})

When(/^I click search button$/, async function() {
    await lPage.clickSearchLocation()
    await browser.pause(2000)
})

Then(/^I verify that temperature displayed is based on zipcode$/, async function() {
    const tempForEnteredLoc = await lPage.currentTempForThisArea()
    this.log(tempForEnteredLoc) 
})

Then(/^I Verify timeline has 12-data points with 2 hours gap from current hour$/, async function() {
    const hoursArray = await lPage.timeLineHourArray()
    const mockArray = []
    let addedTime = 2
    for (let index = 0; index < 12; index++) {
        if (index == 0) {
            mockArray.push('Now')
        } else {
            mockArray.push(moment().add(addedTime, 'hour').format('ha'))
            addedTime = addedTime + 2
        }    
    }
    expect(hoursArray, 'Arrays are not identical').to.eql(mockArray); 
})

When(/^I scroll to Today's timeline$/, async function() {
    await browser.pause(3000)
    await lPage.scrollTodayDetails()
    
})

When(/^I click on plus btn$/, async function() {
    await lPage.clickPlusButton()
    await browser.pause(3000)
})
When(/^I verify minimal Temperature on and in Today's view is equal$/, async function() {
    const minOnTemp = await lPage.getTodayOnMinTemp()
    const minInTemp = await lPage.getTodayInMinTemp()
    expect(minOnTemp, 'Temperatures are NOT the same').to.equal(minInTemp)
})
        
Then(/^I verify maxTemp on and in Today's timeline is same$/, async function() {
    const maxOnTemp = await lPage.getTodayOnMaxTemp()
    const maxInTemp = await lPage.getTodayInMaxTemp()
    expect(maxOnTemp, 'Temperatures are NOT the same').to.equal(maxInTemp)
})

