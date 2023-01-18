const Commands = require("../Commands")

class Language {
commands = new Commands
    displaySettingsLink = '//nav[@id="secondaryNav"]//div//button//div//div';
    languageLocator = '//button[@data-stid="button-type-picker-trigger"]//div/div'
    languageDropDownLocator = '#language-selector'
    saveButtonLocator = '//button[text()="Save" or text()="Guardar"]'

async changeLanguage(newLanguage){
    await this.commands.clickWebElement(this.languageLocator)
    switch (newLanguage) {
        case 'Español (Estados Unidos)':
            await this.commands.selectDataInDropdown(this.languageDropDownLocator, 'Español (Estados Unidos)')
            break;
            
            case 'English (United States)':
            await this.commands.selectDataInDropdown(this.languageDropDownLocator, 'English (United States)')
        default:
            break;
    }
    await this.commands.clickWebElement(this.saveButtonLocator)

}

async getLanguageFromWeb() {
    return await this.commands.getTextOfWebElement(this.displaySettingsLink)
}
}
module.exports = Language