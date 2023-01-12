const Commands = require("../Commands")

class SignIn {
    commands = new Commands();

    signInButtonLocator_1 = '//button[contains(text(),"Sign in")]'
    signInButtonLocator_2 = '//a[contains(@data-stid, "account-signin")]'
    signInButtonLocator_3 = '//button[@id="loginFormSubmitButton"]'
    emailInputLocator = '#loginFormEmailInput'
    passwordInputLocator = '#loginFormPasswordInput'
    errorMsgLocator = "//*[@class='uitk-error-summary']"

    async clickSignInButton_1(){
        await this.commands.clickWebElement(this.signInButtonLocator_1)
    }
    async clickSignInButton_2(){
        await this.commands.clickWebElement(this.signInButtonLocator_2)
    }
    async clickSignInButton_3(){
        await this.commands.clickWebElement(this.signInButtonLocator_3)
    }
    async enterEmail(email){
        await this.commands.typeInWebElement(this.emailInputLocator, email)
    }
    async enterPassword(password){
        await this.commands.typeInWebElement(this.passwordInputLocator, password)
    }
    async errorMsg() {
        return await this.commands.getTextOfWebElement(this.errorMsgLocator)
    }
    async isErrorMesShow() {
        return await this.commands.isWebElementDisplayed(this.errorMsgLocator);
     }
}
    module.exports = SignIn