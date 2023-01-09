const Commands = require('../Commands');
const Dates = require("../../Utils/Dates")
const moment = require("moment/moment")
class HomePage {

    commands = new Commands();
    now = moment();
    // Locators for web-Elements on the HomePage (variables)
    // Destination
    goingToLocator = '//button[@aria-label="Going to"]';
    goingToTypeLocator = '#destination_form_field';
    autoSuggestionsLocator = '//div[@class="truncate"]//strong';

    // Verify invalid phone number error locators

    getTheAppLocator = '//button[text()="Get the app"]'
    phoneNumberBoxLocator = '#phoneNumber'
    phoneNumberErrorMsgLocator = '#phoneNumber-error'

    //Dates

    datesCalendar = '//button[@data-stid="open-date-picker"]';
    currentMonthFinder_1 = '//h2[starts-with(text(),';
    currentMonthFinder_2 = ')]';
    disabledDates = '//td//button[@disabled]';
    disabledDates = '//button[@class="uitk-date-picker-day is-disabled"]';

    // Calendar
    calendarOpenLocator = '#date_form_field-btn';
    
    allDatesLocator_starts = '//button[starts-with(@aria-label, "'
    allDatesLocator_ends = '")]'

    calendarDoneButtonLocator = '//button[text()="Done" and @data-stid]';
    nextCalendarButtonLocator = '(//button[@data-stid="date-picker-paging"])[2]';
    prevCalendarButtonLocator = '(//button[@data-stid="date-picker-paging"])[1]';
    leftSideCalendarHeaderLocator = '(//div[@class="uitk-date-picker-month"])[1]//h2';
    prevMonths = '//button[@data-stid="date-picker-paging"]/preceding-sibling::button'

    // functions to interact with the web-Elements on the HomePage
    async enterDestination(destination) {
        await this.commands.clickWebElement(this.goingToLocator);
        await this.commands.typeInWebElement(this.goingToTypeLocator, destination);
    }

    async selectFromSuggestedDestinations(userChoice) {
        await this.commands.selectFromAutoSuggestion(this.autoSuggestionsLocator, userChoice);
    }

    async openCalendar() {
        await this.commands.clickWebElement(this.calendarOpenLocator);
    }

    async selectCheckInDate(date) {
        // date = "December 5 2022"
        // 'December', '5', '2022'
        const dateArray = date.split(' ');
        await this.goToMonth(`${dateArray[0]} ${dateArray[2]}`);
        const allDatesLocator = this.allDatesLocator_starts + date.substring(0,3) + this.allDatesLocator_ends;
        await this.commands.selectDateInCalendar(allDatesLocator, dateArray[1]);
    }

    async selectCheckOutDate(date) {
        const dateArray = date.split(' ');
        await this.goToMonth(`${dateArray[0]} ${dateArray[2]}`);
        const allDatesLocator = this.allDatesLocator_starts + date.substring(0,3) + this.allDatesLocator_ends;
        await this.commands.selectDateInCalendar(allDatesLocator, dateArray[1]);
    }

    async clickDoneOnCalendar() {
        await this.commands.clickWebElement(this.calendarDoneButtonLocator);
    }

    async clickToGoToNextCalendar() {
        await this.commands.clickWebElement(this.nextCalendarButtonLocator);
    }

    async clickToGoToPrevCalendar() {
        await this.commands.clickWebElement(this.prevCalendarButtonLocator);
    }

    // 'May 2023'
    async goToMonth(monthYear) {
        /**
         * using leftSideCalendarHeaderLocator get headerElement
         * find text of webElement
         * if (text NOT equal to monthYear) 
         *      click >
         */
        let count = 1;
        while(count<=12) {
            const monthHeader = await this.commands.getTextOfWebElement(this.leftSideCalendarHeaderLocator);
            console.log(`\n monthHeader -> ${monthHeader} \n`);
            if (monthHeader.localeCompare(monthYear) === 0) {
                break;
            }
            await this.commands.clickWebElement(this.nextCalendarButtonLocator);
            await browser.pause(1000);
            count++;
        }
    }

    async scrollToGetTheApp(){
        await this.commands.scrollElementIntoView(this.getTheAppLocator)
    }
    async clickPhoneNumberBox(){
        await this.commands.clickWebElement(this.phoneNumberBoxLocator)
    }
    async enterPhoneNumber(Phone){
        await this.commands.typeInWebElement(this.phoneNumberBoxLocator,Phone)
    }
    async clickGetTheApp(){
        await this.commands.clickWebElement(this.getTheAppLocator)
    }
    async getErrorText(){
        return await this.commands.getTextOfWebElement(this.phoneNumberErrorMsgLocator)
    }

    async openDates () {
        await this.commands.clickWebElement(this.datesCalendar);
    }

    async verifyMonth () {

        const expectedMonth = Dates.getCurrentDate('Month');
        const locatorString = this.currentMonthFinder_1+`"${expectedMonth}"`+this.currentMonthFinder_2;
        const isMonthPresent = await this.commands.isWebElementDisplayed(locatorString);

        return isMonthPresent;

    }

    async viewEarlierMonths () {

        await this.commands.clickWebElement(this.prevMonths);

    }

    async selectCheckInDate(date) {
        // date = "December 5 2022"
        // 'December', '5', '2022'
        const dateArray = date.split(' ');
        await this.goToMonth(`${dateArray[0]} ${dateArray[2]}`);
        const allDatesLocator = this.allDatesLocator_starts + date.substring(0,3) + this.allDatesLocator_ends;
        await this.commands.selectDateInCalendar(allDatesLocator, dateArray[1]);
    }

    async selectCheckOutDate(date) {
        const dateArray = date.split(' ');
        await this.goToMonth(`${dateArray[0]} ${dateArray[2]}`);
        const allDatesLocator = this.allDatesLocator_starts + date.substring(0,3) + this.allDatesLocator_ends;
        await this.commands.selectDateInCalendar(allDatesLocator, dateArray[1]);
    }

    async clickDoneOnCalendar() {
        await this.commands.clickWebElement(this.calendarDoneButtonLocator);
    }


    async arePastDatesInCalendarEnabled() {
        const pastDays = await this.commands.findAllWebElement(this.disabledDates);
        for(var i = 0; i < pastDays.length; i++) {
            return await (await $(pastDays[i])).isEnabled();
        } 
    }

    async isBackArrowInCalendarEnabled() {
        return await $(this.prevCalendarButtonLocator).isEnabled();
    }
}
module.exports = HomePage;