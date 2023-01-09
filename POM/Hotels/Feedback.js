const Commands = require("../Commands")
class Feedback{
    commands = new Commands()
    // locators for the empty form
    signInButtonLocator = '//button[text()="Sign in"]'
    feedbackLinkLocator = '//div[@class="header-guest-heading"]/following::a[text()= "Feedback"]'
    submitButtonLocator = '#submit-button'
    errorMsgLocator ='//div[@id="validation_header"]//p[contains(text(), "Please fill in")]'
    starRatingGroup = '//div[@class="radio-group"]'

    // locators for completing feedback form
    threeStarRatingLocator = '//div[@class="radio-group"]//span[contains(text(),"3")]'
    commentSectionLocator = '#verbatim'
    dropDownSelection = '//select[@id="will-you-return"]'
    bookedBeforeNoButton = '//span[@data-localization="booked-before-no"]'
    completePgYesButton = '//span[@data-localization="were-you-successful-yes"]'
    thankYouMsg = '//div[@id="thank-you"]//h5[contains(text(), "THANK YOU")]'

async clickSignInButton() {
    await this.commands.clickWebElement(this.signInButtonLocator)
}
async clickFeedbackLink() {
    await this.commands.clickWebElement(this.feedbackLinkLocator)
}
async switchToNextWindowHandle() {
    const hotelWindowHandle = await this.commands.getHandle()
    const allWindowHandles = await this.commands.getHandles()
    for (const handle of allWindowHandles) {
        if (handle !== hotelWindowHandle) {
            await this.commands.switchToWindowHandle(handle)
            break;
        }
    }
}
async clickSubmitButton() {
    await this.commands.clickWebElement(this.submitButtonLocator)
}

async getErrorText(){
    return await this.commands.getTextOfWebElement(this.errorMsgLocator)
}
async findParentOfStarRating() {
    return await this.commands.findParentElement(this.starRatingGroup, 'id')
}

async selectThreeStarRating() {
    await this.commands.clickWebElement(this.threeStarRatingLocator)
}

async typeInCommentBox(data) {
    await this.commands.typeInWebElement(this.commentSectionLocator, data)
}

async selectLikelyFrmDropDown(selection) {
    await this.commands.selectDataInDropdown(this.dropDownSelection,selection)
}
async selectNoForBookBfr() {
    await this.commands.clickWebElement(this.bookedBeforeNoButton)
}

async selectYesForAccomplish() {
    await this.commands.clickWebElement(this.completePgYesButton)
}

async getThankYouMsgText() {
    return await this.commands.getTextOfWebElement(this.thankYouMsg)
}

}
module.exports = Feedback
