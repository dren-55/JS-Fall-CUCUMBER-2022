Feature: sign in
@TC-21
Scenario: Verify Verification message for invalid sign in credential
Given I am on hotels
When I click on "Sign in" link
When I press Sign in button
And I type "DrD@gmail.com" as my email address
And I type "fdasiugh#$%^" as my password
And I click on Sign in button
Then I verify Error Message is displayed