const Commands = require("../Commands")

class CodeTestPOM {
    commands = new Commands()
    languageLocator = '//div[@class="uitk-layout-flex uitk-layout-flex-gap-two"]';
    languageDropDownLocator = '//select[@id="language-selector"]';
    englishLocator = '//option[@value="en_US"]';
    spanishLocator = '//option[@value="es_US"]';
    saveLocator = '//button[text() = "Save"]';
    travelersField = '//button[contains(@class, "uitk-menu-trigger uitk-fake-input uitk-form-field-trigger")]'
    plusAdultsButton = '//*[@aria-label="Increase the number of adults in room 1"]'
    minusAdultsButton = '//*[@aria-label="Decrease the number of adults in room 1"]'


async clickOnLanguageSelector() {
    await this.commands.clickWebElement(this.languageLocator)
}
async clickOnLanguageDropDown() {
    await this.commands.clickWebElement(this.languageDropDownLocator)
}
async clickOnSpanish() {
    await this.commands.clickWebElement(this.spanishLocator)
}
async clickOnEnglish() {
    await this.commands.clickWebElement(this.englishLocator)
}
async clickOnSave() {
    await this.commands.clickWebElement(this.saveLocator)
}
async isLanguageAsSpanishEnabled() {
    return await this.commands.isWebElementEnabled(this.spanishLocator)
}
async isLanguageAsEnglishEnabled() {
    return await this.commands.isWebElementEnabled(this.englishLocator)
}



async clickOnTravelersMenu() {
    await this.commands.clickWebElement(this.travelersField)
}

async addAdultsRoomOne(numberOfClicks) {
    await this.commands.multiClickWebEl(this.plusAdultsButton, numberOfClicks)
}
async isPlusButtonEnabled() {
    return await this.commands.isWebElementEnabled(this.plusAdultsButton)
}
async isMinusButtonEnabled() {
    return await this.commands.isWebElementEnabled(this.minusAdultsButton)
}

async subtractAdultsRoomOne(numberOfClicks) {
    await this.commands.multiClickWebEl(this.minusAdultsButton, numberOfClicks)
}

}

module.exports = CodeTestPOM