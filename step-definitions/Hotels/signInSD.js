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

Then(/^I verify Error Message is displayed$/,async function () {
 
      const errorMsgIsDisplayed = await signIn.isErrorShown();
      
      expect(errorMsgIsDisplayed, 'Error Message is NOT displayed').to.be.true;
    });

