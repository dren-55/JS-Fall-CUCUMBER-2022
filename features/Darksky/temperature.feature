  Feature: Darksky test feature

Background: 
     Given I am on darksky

  
   Scenario: Verify Temperatures on  and in Today's timeline is the same
        When I scroll to Today's timeline
        And I click on plus btn
        And I verify minimal Temperature on and in Today's view is equal
        Then I verify maxTemp on and in Today's timeline is same

    #       @timeline
    # Scenario: Verify temperatures displayed with 2 hour gap from current hour
    #     Then I Verify timeline has 12-data points with 2 hours gap from current hour