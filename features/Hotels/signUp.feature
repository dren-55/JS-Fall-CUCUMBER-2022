   Feature: Sign up

Background: 
    Given I am on hotels
    And I click on Sign in
    And I click on Sign up

    @TC-33
    Scenario Outline: Verify weak password messages
        And I type "@test.com" in email address
        And I type "fUser" in First name
        And I type "lUser" in Last name
        And I type <password> in Password
        And I verify <msg1> message is displayed
        And I verify <msg2> message is displayed

    Examples:
            | password | msg1                                | msg2                             |
            | abcd     | Includes 8-64 characters            | Combines letters and numbers     |
            | abcd@123 | Add more words that are less common | Avoid common character sequences |


    @TC-32
    Scenario Outline: Verify password strength bar and messages
        When I type "user@test.com" in email address
        And I type "fUser" in First name
        And I type "lUser" in Last name
        And I type <password> in Password
        Then I confirm password strength bar is <fillLevel> filled
        And I confirm password strength message is <strengthMsg>

    Examples:
            | password     | fillLevel   | strengthMsg |
            | abcd         | not         | Weak        |
            | abcd@123     | half        | Weak        |
            | abcd@12324   | almost      | Strong      |
            | abcd@12@pl@2 | completely  | Very Strong |

            

    @TC-22
    Scenario: Verify error message for invalid data in SignUp form
    When I type "!@#$%@gmail.com" in email address
    Then I verify "Enter a valid email" is displayed
    When I type "!@" in First name
    Then I verify "First name cannot contain special characters" is displayed
    When I type "%^&" in Last name
    Then I verify "Last name cannot contain special characters" is displayed
    When I type "Password" in Password
    Then I verify "Keep me signed in" is displayed
    Then I verify "Keep me signed in" is enabled
    Then I verify "Continue button" is displayed
    Then I verify "Continue button" is NOT enabled

    @TC-20
    Scenario: Verify window behavior and date format
    And I click “Terms and Conditions” link
    And I verify “Terms and Conditions” page opens in new tab
    Then I verify "Last revised" date format is as expected
    When I click “Privacy Statement” link
    And I Verify “Privacy Statement” page opens in new tab
    Then I Verify “Last Updated“ date format is as expected