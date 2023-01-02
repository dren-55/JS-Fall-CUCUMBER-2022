const Commands = require("../Commands")
class DestinationSearch {
    commands = new Commands()
    goingToFieldLocator = '//button[contains(@data-stid, "destination_form_field")]'
    typeInDestinationLocator = '//*[@id="destination_form_field"]'
    destAutoSugestions = '//div[@class="truncate"]//strong'
    datePickerElement = '//button[@data-stid="open-date-picker"]'
    sepDateLocator = '//h2[text()="April 2023"]/following-sibling::table//button[not(@disabled)]'
    octDateLocator = '//h2[text()="May 2023"]/following-sibling::table//button[not(@disabled)]'
    calendarDoneBttn = '//button[@data-stid="apply-date-picker"]'
    searchSubmitBttn = '//button[@id="submit_button"]'
    locationDisplayedLoc = '//button[@class="uitk-fake-input uitk-form-field-trigger"]'
    checkInDateLoc = '//button[@id="hotels-check-in-btn"]'
    checkOutDateLoc = '//button[@id="hotels-check-out-btn"]'



    async clickInDestField() {
        await this.commands.clickWebElement(this.goingToFieldLocator)
    }

    async clickDestinationFieldPopUp() {
        await this.commands.clickWebElement(this.typeInDestinationLocator)
    }

    async typeInDestField(userInput) {
        await this.commands.typeInWebElement(this.typeInDestinationLocator, userInput)
    }

    async selectDestination(userInput) {
        await this.commands.selectFromAutoSuggestion(this.destAutoSugestions, userInput)
    }

    async clickDatePicker() {
        await this.commands.clickWebElement(this.datePickerElement)
    }

    async selectSepDates(thisDate) {
        await this.commands.chooseDate(this.sepDateLocator, 'data-day', thisDate)
    }

    async selectOctDates(thisDate) {
        await this.commands.chooseDate(this.octDateLocator, 'data-day', thisDate)
    }

    async clickCalendarDone() {
        await this.commands.clickWebElement(this.calendarDoneBttn)
    }

    async clickSearcDestBttn() {
        await this.commands.clickWebElement(this.searchSubmitBttn)
    }

    async locationDisplayed() {
        return await this.commands.getTextOfWebElement(this.locationDisplayedLoc)
    }

    async checkInDate() {
        return await this.commands.getTextOfWebElement(this.checkInDateLoc)
    }

    async checkOutDate() {
        return await this.commands.getTextOfWebElement(this.checkOutDateLoc)
    }
}
module.exports = DestinationSearch