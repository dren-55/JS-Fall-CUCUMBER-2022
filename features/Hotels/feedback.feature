
    Feature: Feedback
    Background: 
        Given I am on hotels
        When I click on Sign in
        When I click on "Feedback"

    @signin @TC-24
    Scenario: Verify Verification message for invalid sign in credentials
        When I click on Submit button
        When I verify error message is Displayed
        Then I Verify star boxes section is in a red dotted box.

    @feedback @TC-25
    Scenario: Verify user can submit feedback after completing the feedback form
        And I select any star-rating
        And I enter any comments
        And I select "Unsure" for how likely are you to return to Hotels
        And I select any answer for “Prior to this visit, have you ever booked on Hotels website”
        And I select either button for ”Did you accomplish what you wanted to do on this page”
        When I click on Submit button
        Then I verify “THANK YOU FOR YOUR FEEDBACK.“ is displayed