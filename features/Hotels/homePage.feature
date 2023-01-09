@TC-40
Feature: Get the app
Background: 
        Given I am on hotels

Scenario: Verify invalid phone number error
When I scroll to “Get the app“ button
When I enter “0000000000” in Phone number
When Click on “Get the app“ button
Then I verify “Please enter a valid phone number.“ error is displayed

@TC-31
Scenario Outline: Verify user is able to change language
        When I change language to <languageOption>
        Then I verify language got changed to <language>
        Examples:
            | languageOption           | language |
            | Español (Estados Unidos) | Español  |
            | English (United States)  | English  |

 @TC-17
    Scenario: Verify past dates and back button on Current month's calendar is disabled
        When I click on dates
        And I go to current month if not displayed
        Then I verify for current month
        Then I verify past dates are disabled
        Then I verify back button on current month is disabled

