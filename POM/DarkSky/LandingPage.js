const Commands = require("../Commands")

class LandingPage {
    commands = new Commands()
    feelsLikeTempLocator = '.feels-like-text'
    lowTempocator = '.low-temp-text'
    highTempLocator = '.high-temp-text'
    currentLocFieldLocator = '//div[@id="header"]//form[@id="searchForm"]//input[@type="text"]'
    searchButtonLocator = '//img[@alt="Search Button"]'//'a[class="searchButton"]'
    tempForZipCodeLocator = '//div[@id="title"]//span[@class="summary swap"]'
    timeLineHrsLocator = '//div[@class="hours"]//span[contains(@class, "hour")]'
    todayTempDetails = '//a[@data-day="7"]'
    plusButtonLoc = '//div[@class="summary"]/ following::span[@class="toggle"][1]'
    todayOnMinTemp = '//a[@data-day="0"]//span[@class="minTemp"]'
    todayInMinTemp = '//a[@data-day="0"]/following::div[@class="dayDetails revealed"]//span[@class="highTemp swip"]//span[@class="temp"]'
    todayOnMaxTemp = '//a[@data-day="0"]//span[@class="maxTemp"]'
    todayInMaxTemp = '//a[@data-day="0"]/following::div[@class="dayDetails revealed"]//span[@class="lowTemp swap"]//span[@class="temp"]'
    timeMachineLoc = '//div[@id="timeMachine"]//a'

    async getTempValue(locator) {
        return await this.commands.getNumberVlueFromString(locator)
    }

    async getFeelsLikwTempValue() {
        return await this.getTempValue(this.feelsLikeTempLocator)
    }
    async getLowTempValue() {
        return await this.getTempValue(this.lowTempocator)
    }
    async getHighTempValue() {
        return await this.getTempValue(this.highTempLocator)
    }
    async setNewLocation(zipCode) {
        await this.commands.typeInWebElement(this.currentLocFieldLocator, zipCode)
        // await this.clickSearchLocation(this.searchButtonLocator)
    }
    async clickSearchLocation() {
        await this.commands.clickWebElement(this.searchButtonLocator)
    }
    async currentTempForThisArea() {
        const element = await this.commands.findWebElement(this.tempForZipCodeLocator)
        await element.waitForDisplayed({timeout: 4000, timeoutMsg: 'temp is NOT displayed with in 2-seconds'})
        return await this.commands.getTextFromWebElement(element)
    }

    async timeLineHourArray() {
        const timeLineHours = await this.commands.findAllWebElement(this.timeLineHrsLocator)
        const newArray = []
        for (const timeLineHour of timeLineHours ){
            const element = await timeLineHour.getText()
            if (element != '') {
                newArray.push(element)
            }
        }
        return newArray
    }
    
    async scrollTodayDetails() {
        await this.commands.scrollElementIntoView(this.todayTempDetails)
    }

    async clickPlusButton() {
        await this.commands.clickWebElement(this.plusButtonLoc)
    }

    async getTodayOnMinTemp() {
        return await this.commands.getTextOfWebElement(this.todayOnMinTemp)
    }
    
    async getTodayInMinTemp() {
        return await this.commands.getTextOfWebElement(this.todayInMinTemp)
    }

    async getTodayOnMaxTemp() {
        return await this.commands.getTextOfWebElement(this.todayOnMaxTemp)
    }

    async getTodayInMaxTemp() {
        return await this.commands.getTextOfWebElement(this.todayInMaxTemp)
    }

    async scrollTimeMachieInView () {
        await this.commands.scrollElementIntoView(this.timeMachineLoc)
    }

    async clickTimeMachineBttn () {
        await this.commands.clickWebElement(this.timeMachineLoc)
    }
}

module.exports = LandingPage