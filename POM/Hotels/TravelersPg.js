const Commands = require("../Commands")

class Travelers {

commands = new Commands()

    travelersField = '//button[contains(@class, "uitk-menu-trigger uitk-fake-input uitk-form-field-trigger")]'
    plusAdultsButton = '//*[@aria-label="Increase the number of adults in room 1"]'
    plusChildButton = '//*[@aria-label="Increase the number of children in room 1"]'
    childAgeOne = '#age-traveler_selector_children_age_selector-0-0'
    childAgeTwo = '#age-traveler_selector_children_age_selector-0-1'
    childAgeThree = '#age-traveler_selector_children_age_selector-0-2'
    doneButton = '//button[@id="traveler_selector_done_button"]'

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
}
module.exports = Travelers