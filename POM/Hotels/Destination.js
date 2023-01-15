const Commands = require("../../POM/Commands")

class Destination{
commands = new Commands()

// Locators
goingToFieldLocator = '//button[contains(@data-stid, "destination_form_field")]'
typeInDestinationLocator = '//*[@id="destination_form_field"]'
destinationSubtextLoc = '//div[@class="uitk-typeahead-button-label truncate"]'
datePickerElement = '//button[@data-stid="open-date-picker"]'
monthLocator = '//div[@data-stid="date-picker-month"]//h2'
goToNextMonthButton = '//button[@data-stid="date-picker-paging"][2]'
allDatesLocator = '//button[@class="uitk-date-picker-day"]'
searchSubmitButton = '//button[@aria-label="Search"]'


starRatingSection =
'//h4[contains(text(),"Star rating")]/following-sibling::div';
starRating5 = '//label[@aria-label="5 star"]';
starRating4 = '//label[@aria-label="4 star"]';
starRating3 = '//label[@aria-label="3 star"]';
starRating2 = '//label[@aria-label="2 star"]';
starRating1 = '//label[@aria-label="1 star"]';

sortByDropDownLocator = '//select[@id="sort-filter-dropdown-sort"]'
PricesForManhattanHotels = '//div[contains(@class , "padding-block-half")]'
allStarRating = '//div[@class="uitk-rating"]//span'

  // FUNCTIONS
  async selectRating(star) {
        switch (star) {
          case '5*':
            await this.commands.clickWebElement(this.starRating5);
            break;
          case '4*':
            await this.commands.clickWebElement(this.starRating4);
            break;
          case '3*':
            await this.commands.clickWebElement(this.starRating3);
            break;
          case '2*':
            await this.commands.clickWebElement(this.starRating2);
            break;
          case '1*':
            await this.commands.clickWebElement(this.starRating1);
            break;
            default:
                break;
    }
  }

  async scrollRatingIntoView(){
    await this.commands.scrollElementIntoView(this.starRatingSection)
  }

async clickInDestField() {
    await this.commands.clickWebElement(this.goingToFieldLocator)
}
async typeInDestField(userInput) {
    await this.commands.typeInWebElement(this.typeInDestinationLocator, userInput)
}
async selectDestination(userInput) {
    await this.commands.autoSugSelectorWithText(this.destinationSubtextLoc, userInput)
    
}
async clickDatePicker() {
    await this.commands.clickWebElement(this.datePickerElement)
}
async selectDates(dateToSelect) {
    await this.commands.selectDateFromCalendar(this.monthLocator, this.goToNextMonthButton, this.allDatesLocator, dateToSelect)
}
async clickSearchButton() {
    await this.commands.clickWebElement(this.searchSubmitButton)
}
async selectSortBy(selector){
    await this.commands.selectDataInDropdown(this.sortByDropDownLocator, selector)
}
async verifyStarRating(starRating) {
    let allStarRatings = await this.commands.findAllWebElement(this.allStarRating);
    let verification = true;
    for (let star of allStarRatings) {
      let testOfElement = await this.commands.getTextOfWebElement(star);
      let ratingNumber = parseFloat(testOfElement.substring(0, 2));
      if (ratingNumber < starRating) {
        verification = false;
      }
    }
    return verification;
  }

  async selectSortOption(sortOption) {
    await this.commands.selectDataInDropdown(this.sortBySelector, sortOption);
    await browser.pause(5000);
  }

  async pricesInNumbers(){
    const priceElements = await this.commands.findAllWebElement(this.PricesForManhattanHotels)
    await browser.pause(6000)
    const pricesInNumber = []
   
    for(const priceElement of priceElements){
       let thePrice = await priceElement.getText()
       console.log(`thePrice  ----> ${thePrice}`)
       pricesInNumber.push(Number(thePrice.substring(19)))
    }
    console.log(`pricesInNumber ---> ${pricesInNumber}`)
    return pricesInNumber;
   }

   async priceInIncreasingOrder(prices) {
    let isArrayInOrder = true;
    for (let i=0 ; i < prices.length-1 ; i++) {
        if (prices[i] > prices[i+1]) {
            isArrayInOrder = false;
            break;
        }
    }
    return isArrayInOrder;
}

}
module.exports = Destination