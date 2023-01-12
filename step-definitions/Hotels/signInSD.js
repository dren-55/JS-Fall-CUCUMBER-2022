const { When, Then } = require("@wdio/cucumber-framework")
const { expect } = require("chai")
const SignIn =require("../../POM/Hotels/SignIn")
const signIn = new SignIn()

When(/^I click on "Sign in" link$/, async function(){
    await browser.maximizeWindow()
    await signIn.clickSignInButton_1()
    await browser.pause(2000)
})
When(/^I press Sign in button$/, async function(){
    await signIn.clickSignInButton_2()
   
})
When(/^I type "(.+)" as my email address$/, async function(email){
    await signIn.enterEmail(email)
})
When(/^I type "(.+)" as my password$/, async function(password){
    await signIn.enterPassword(password)
})
When(/^I click on Sign in button$/, async function(){
    await signIn.clickSignInButton_3()
    await browser.pause(8000)

})
Then(/^I verify error message is displayed$/, async function(){
// const errorMsgFromWeb = await signIn.isErrorMesShow()
// const expectedMsg = "Email and password don't match. Please try again."
expect(await signIn.isErrorMesShow(),"Error message is not displayed").to.be.true
})