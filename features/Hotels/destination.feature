Feature: Destination dates verification on hotels website
    Scenario: Verify destination and check-in/ and check-out dates are as user selected
        Given I am on hotels
        When I click in destination field and type Man
        And I select Manila from autosuggestions list
        When I click in date field
        And I select check in April 2 date
        And I select check out May 2 date
        And I click button done
        When I click button search
        Then I verify page displayes correct destination and dates