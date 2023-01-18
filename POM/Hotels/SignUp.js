const Command = require("../../POM/Commands")
const Dates = require("../../Utils/Dates")
class SignUp{
commands = new Command()
dates = new Dates()

//Locators for Sign up 
    msg11Locator = '//ul[contains(@class, "uitk-typelist")]//li[contains(@class, "typelist-item")][1]'
    msg12Locator = '//li[contains(text() , "Add more words")]'
    msg21Locator = '//ul[contains(@class, "uitk-typelist")]//li[contains(@class, "typelist-item")][2]'
    msg22Locator = '//li[contains(text() , "Avoid common")]'

    signInButtonLocator = '//button[contains(text(),"Sign in")]'
    signUpLinkLocator = '//a[@data-stid="link-header-account-signup"]'

    emailAddressLocator = '//input[@id="signupFormEmailInput"]'
    emailAddressError = '//div[@id="signupFormEmailInput-error"]';

    firstNameLocator = '//input[@id="signupFormFirstNameInput"]'
    firstNameError = '//div[@id="signupFormFirstNameInput-error"]';

    lastNameLocator = '//input[@id="signupFormLastNameInput"]'
    lastNameError = '//div[@id="signupFormLastNameInput-error"]';

    signUpPwdLocator = '//input[@id="signupFormPasswordInput"]'


    strengthMsg_Weak = '//div[contains(text(),"Weak")]';
    strengthMsg_Strong = '//div[contains(text(),"Strong")]';
    strengthMsg_VeryStrong = '//div[contains(text(),"Very Strong")]';
  
    strength_zero = '//div[@style="width: 0%;"]';
    strength_half = '//div[@style="width: 50%;"]';
    strength_threeQuarters = '//div[@style="width: 75%;"]';
    strength_completely = '//div[@style="width: 100%;"]';

    keepMeSignedInBox = '//input[@id="rememberMeSignUpCheckbox"]';
    keepMeSignedInText = '//span[contains(text(),"Keep me signed in")]';

    continueButton = '//button[@id="signupFormSubmitButton"]';
    continueButtonDisabled = '//button[@disabled]';

    lastRevisedDateLocator = '//div[contains(@class, "blockstart-three")]//span[contains(text() , "Last")]'
    privacyStatementLinkLocator = '//a[text()="Privacy Statement"]'
    lastUpdatedLocator = '//p[contains(text() , "Last Updated")]'
    termsConditionsLink = '//div[@class="uitk-layout-flex-item"]//a[contains(text(), "Terms and Conditions")]'

async clickSignInButton(){
    await this.commands.clickWebElement(this.signInButtonLocator)
}

async clickSignUpButton(){
    await this.commands.clickWebElement(this.signUpLinkLocator)
}
async enterSignupEmail(email) {
    await this.commands.typeInWebElement(this.emailAddressLocator,email)
}
async enterSignUpFName(fname) {
    await this.commands.typeInWebElement(this.firstNameLocator, fname)
}
async enterSignUpLName(lname) {
    await this.commands.typeInWebElement(this.lastNameLocator, lname)
}
async enterSignUpPwd(pwd) {
    await this.commands.typeInWebElement(this.signUpPwdLocator, pwd)
}
async isMsg1Displayed() {
    return await this.commands.isWebElementDisplayed(this.msg11Locator||this.msg12Locator)
}
async isMsg2Displayed() {
    return await this.commands.isWebElementDisplayed(this.msg21Locator||this.msg22Locator)
}

async confirmFillLevel(attribute) {
    switch (attribute) {
        case 'empty':
        return await this.commands.isWebElementDisplayed(this.strength_zero);
        break;
        case 'half filled':
        return await this.commands.isWebElementDisplayed(this.strength_half);
        break;
        case 'three quarters filled':
        return await this.commands.isWebElementDisplayed(this.strength_threeQuarters);
        break;
        case 'full':
        return await this.commands.isWebElementDisplayed(this.strength_completely);
        break;
      default:
        break;
    }
  }

  async confirmStrengthMsg(attribute) {
    switch (attribute) {
        case 'Weak':
        return await this.commands.isWebElementDisplayed(this.strengthMsg_Weak);
        break;
        case 'Strong':
        return await this.commands.isWebElementDisplayed(this.strengthMsg_Strong);
        break;
        case 'Very Strong':
        return await this.commands.isWebElementDisplayed(this.strengthMsg_VeryStrong);
        break;
        default:
        break;
    }
  }

async verifyIfItIsDisplayed(webElement){
    switch (webElement) {
        case "Enter a valid email":
        return await this.commands.isWebElementDisplayed(this.emailAddressError)
        break;
        case "First name cannot contain special characters":
        return await this.commands.isWebElementDisplayed(this.firstNameError)
        break;
        case "Last name cannot contain special characters":
        return await this.commands.isWebElementDisplayed(this.lastNameError)
        break;
        case "Keep me signed in":
        return await this.commands.isWebElementDisplayed(this.keepMeSignedInText)
        break;
        case "Continue button":
        return await this.commands.isWebElementDisplayed(this.continueButton)
        break;
        default:
            break;
    }
}
async verifyIfItIsEnabled(webElement) {
    switch (webElement) {
        case "Keep me signed in":
        return await this.commands.isWebElementEnabled(this.keepMeSignedInText)
        break;
        case "Continue button":
        return await this.commands.isWebElementEnabled(this.continueButton)
        break;
        default:
        break;
    }
}
async continueNotEnabled(){
    return this.commands.isWebElementEnabled(this.continueButtonDisabled)
}

async isTermsDateFormatExpected(){
    const dateText = await this.commands.getTextOfWebElement(this.lastRevisedDateLocator);
    const dateArray = dateText.split(' ');
    const length = dateArray.length
    const date = dateArray[length-1];
    const expectedDate = await this.dates.format_MM_DD_YY(date);
    if (date.localeCompare(expectedDate) === 0){
        return true;
    } else {
        return false;
    }
}

async isPrivacyDateFormatExpected(){
    const dateText = await this.commands.getTextOfWebElement(this.lastUpdatedLocator);
    const dateArray = dateText.split(' ');
    const length = dateArray.length
    const date = dateArray[length-3] + ' ' + dateArray[length-2] + ' ' + dateArray[length-1];
    const expectedDate = await this.dates.format_DD_MMMM_YYYY(date);
    if (date.localeCompare(expectedDate) === 0){
        return true;
    } else {
        return false;
    }
}
async clickTermsAndCond() {
    await this.commands.clickWebElement(this.termsConditionsLink)
}
async switchWindow() {
    await this.commands.switchWindowHandle()
}
async getTermsPgTitle() {
    return await this.commands.getWindowTitle()
}
async clickPrivStatement() {
    await this.commands.clickWebElement(this.privacyStatementLinkLocator)
}
async isTermAndCondTabNew() {
    const allHandles = await browser.getWindowHandles()
    expect(allHandles.length, '').to.equal(2)
}


}

module.exports = SignUp
