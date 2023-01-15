const { When, Then } = require("@wdio/cucumber-framework")
const { expect } = require("chai")
const SignUp = require("../../POM/Hotels/SignUp")
const signUp = new SignUp()

When(/^I click on Sign up$/, async function () {
    await signUp.clickSignUpButton()
})
When(/^I type "(.+)" in email address$/, async function (email) {
    await signUp.enterSignupEmail(email)
})
When(/^I type "(.+)" in First name$/, async function (fname) {
    await signUp.enterSignUpFName(fname)
})
When(/^I type "(.+)" in Last name$/, async function (lname) {
    await signUp.enterSignUpLName(lname)
})
When(/^I type (.+) in Password$/, async function (pwd) {
    await signUp.enterSignUpPwd(pwd)
    await browser.pause(5000)
})
When(/^I verify (.+) message is displayed$/, async function (msg1) {
    const isMsg1Displayed = await signUp.isMsg1Displayed(msg1)
    console.log(`Msg1---> ${isMsg1Displayed}`);
    expect(isMsg1Displayed, 'not displayed').to.be.true
})
When(/^I verify (.+) message 2 is displayed$/, async function (msg2) {
    const isMsg2Displayed = await signUp.isMsg2Displayed(msg2)
    console.log(`Msg2---> ${isMsg2Displayed}`);
expect(isMsg2Displayed, 'not displayed').to.be.true
})

// --------------------TC-32--------------------

When(/^I confirm (.+) is (.+)$/,async function (webElement, attribute) {
      switch (webElement) {
        case 'Password strength bar.':
          const fillLevelIsAsExpected = await signUp.confirmFillLevel(attribute);
          expect(fillLevelIsAsExpected, 'Fill Level is NOT as expected').to.be.true;
          break;
  
        case 'Password strength message':
          const expectedStrengthMsg = await signUp.confirmStrengthMsg(attribute);
          await browser.pause(5000);
          expect(expectedStrengthMsg,'Password Strength Message is NOT as expected').to.be.true;
          break;
  
        default:
          break;
      }
    }
  );

  //--------------------------TC-22--------------------------


When(/^I verify "(.+)" is (.+)$/, async function(webElement, outcome) {
    switch (outcome) {
        case 'displayed':
           const elementIsDisplayed = await signUp.verifyIfItIsDisplayed(webElement)
           expect(elementIsDisplayed, ' element is NOT displayed').to.be.true
            break;
            case 'enabled':
                const elementIsEnabled = await signUp.verifyIfItIsEnabled(webElement)
                expect(elementIsEnabled, 'element is not enabled').to.be.true
                break;
                case 'is NOT enabled':
                    const elementIsDisabled = await signUp.continueNotEnabled()
                    expect(elementIsDisabled, 'element is enabled').to.be.true
                    break;
        default:
            break;
    }
  }
)

//----------------------------TC-20--------------------------


When(/^I click “Terms and Conditions” link$/, async function() {
  await signUp.clickTermsAndCond()
})

When(/^I verify “Terms and Conditions” page opens in new tab$/, async function() {
  await signUp.switchWindow()
  const pageTitle = await signUp.getTermsPgTitle()
  const expectedTitle = 'Terms of Service'
  expect(pageTitle, 'Terms and conditions page did NOT open').to.be.equal(expectedTitle) 
})
When(/^I verify "Last revised" date format is as expected$/, async function() {
     expect(await signUp.isTermsDateFormatExpected(),'is not as expected').to.be.true
     await signUp.switchWindow()
     await browser.pause(1000)
})
When(/^I click “Privacy Statement” link$/, async function() {
  await signUp.clickPrivStatement()
  await browser.pause(1000)
})
When(/^I Verify “Privacy Statement” page opens in new tab$/, async function() {
  await signUp.switchWindow()
  const pageNewTitle = await signUp.getTermsPgTitle()
  const expectedNewTitle = 'Hotels.com - Deals & Discounts'
  expect(pageNewTitle, 'Terms and conditions page did NOT open').to.include(expectedNewTitle)
})
Then(/^I Verify “Last Updated“ date format is as expected$/, async function(){
  expect(await signUp.isPrivacyDateFormatExpected(), 'is not as expected').to.be.true
  await browser.pause(3000);
})