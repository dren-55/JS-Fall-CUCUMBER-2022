Feature: Messenger
        

    @messenger
    Scenario: Verify link (Find your account and log in.) is displayed
        Given I am on facebook
        When I click messenger link
        When I click login button
        Then I verify error link is displayed