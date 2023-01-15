const Commands = require("../Commands")

class Travelers {

commands = new Commands()

    travelersField = '//button[contains(@class, "uitk-menu-trigger uitk-fake-input uitk-form-field-trigger")]'
    plusAdultsButton = '//*[@aria-label="Increase the number of adults in room 1"]'
    plusChildButton = '//*[@aria-label="Increase the number of children in room 1"]'
    minusChildButton = '//*[@aria-label="Decrease the number of children in room 1"]'
    childAgeOne = '#age-traveler_selector_children_age_selector-0-0'
    childAgeTwo = '#age-traveler_selector_children_age_selector-0-1'
    childAgeThree = '#age-traveler_selector_children_age_selector-0-2'
    doneButton = '//button[@id="traveler_selector_done_button"]'
    amountOfChildren = '//select[contains(@id, "children_age_selector")]'
    disMinusChildButton = '//input[contains(@id, "children_step_input")]/preceding-sibling::button[@class="uitk-layout-flex-item uitk-step-input-touch-target"]'
    disPlusChildButton = '//input[contains(@id, "children_step_input")]/following-sibling::button[@class="uitk-layout-flex-item uitk-step-input-touch-target"]'
    childPlusButtonDis = '//*[@id="traveler_selector_children_step_input-0-increase-title"]/../../../span'
    childMinusButtonDis =  '//*[@id="traveler_selector_children_step_input-0-decrease-title"]/../../../../button[@disabled]'
    allChildAgeSelectors ='//select[contains(@id , "age-traveler_selector_children_age_selector-0")]';


    async clickTravelersField(){
        await this.commands.clickWebElement(this.travelersField)
    }
    async addAdultsRoom(numberOfClicks){
        await this.commands.multiClickWebEl(this.plusAdultsButton, numberOfClicks)
    }
    async addChildRoom(numberOfClicks){
        await this.commands.multiClickWebEl(this.plusChildButton, numberOfClicks)
    }
  async selectForFirstKid(selectThis) {
        await this.commands.selectDataInDropdown(this.childAgeOne, selectThis)
    }

    async selectForSecondKid(selectThis) {
        await this.commands.selectDataInDropdown(this.childAgeTwo, selectThis)
    }

    async selectForThirdKid(selectThis) {
        await this.commands.selectDataInDropdown(this.childAgeThree, selectThis)
    }
    async clickDoneButton() {
        await this.commands.clickWebElement(this.doneButton)
    }
    async getTotalTravelers() {
        const totalTravelers = await this.commands.getTextOfWebElement(this.travelersField)
        const total = await totalTravelers.split('\n')
        
        return parseInt(total[1].substring(0, 1))
        
    }
    async numberOfKidsDropdown() {
        const elementsArray = await this.commands.findAllWebElement(this.amountOfChildren)
        return await elementsArray.length
    }
    async isPlusButtonEnabled() {
        let enabledElement = await this.commands.isWebElementEnabled(this.plusChildButton)
        console.log(`------------->${enabledElement}`);
        return enabledElement
    }

    async isPlusButtonDisabled() {
        let disabledElement = await this.commands.isWebElementEnabled(this.disPlusChildButton)
        console.log(`------is plus button disabled---------------->${disabledElement}`);
        return disabledElement
    }

    async isMinusButtonEnabled() {
        let enabledMinusBt = await this.commands.isWebElementEnabled(this.minusChildButton)
        console.log(`------is minus button enabled------------->${enabledMinusBt}`);
        return enabledMinusBt
    }
    async removeKidsRoomOne(numberOfClicks) {
        await this.commands.multiClickWebEl(this.minusChildButton, numberOfClicks)
    }
    async isKidsDropdownDisplayed() {
        return await this.commands.isWebElementDisplayed(this.childAgeOne)
    }
    async isMinusButtonDisabled() {
        let disMinusBt = await this.commands.isWebElementEnabled(this.disMinusChildButton)
        console.log(`-------is minus button disabled----------->${disMinusBt}`);
        return disMinusBt
    }
    async verifyAgeDropDownDisplayed() {
        let areChildAgeSelectorsDisplayed = await this.commands.isWebElementDisplayed(this.allChildAgeSelectors);
        console.log(`\n\n----------------areChildAgeSelectorsDisplayed---------> ${areChildAgeSelectorsDisplayed}\n\n`);
        return areChildAgeSelectorsDisplayed;
      }












}
module.exports = Travelers