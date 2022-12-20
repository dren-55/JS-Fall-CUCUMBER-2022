const Commands = require("../Commands");


class MessengerLoginPage {

    commands = new Commands();

    //Locators

    messengerLinkLocator = '=Messenger';

    loginButtonLocator = '#loginbutton';

    errorLink = '=Find your account and log in.'

    // functions

    async clickMessenger() {
        await this.commands.clickWebElement(this.messengerLinkLocator);
    }

    async clickLogin() {
        await this.commands.clickWebElement(this.loginButtonLocator);
    }

    async isErrorLinkDisplayed () {
        return await $(this.errorLink).isDisplayed();
     }
}
module.exports = MessengerLoginPage;