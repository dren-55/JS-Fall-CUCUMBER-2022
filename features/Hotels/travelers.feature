  Feature:travelers count
  Background: 
  Given I am on hotels
  When I click on Travelers

  @TC-18
    Scenario: Verify user can update number of guests on Home page
          When I select "Adults" as 6
          And I select "Children" as 3
          And I select first child age: "4"
          And I select second child age: "Under 1"
          And I select third child age: "7"
          And I click Done button
          Then I verify total number of guests is 9

@TC-28
Scenario: Verify Child-age dropdowns are same as number of Children selected  
        When I select “Children” as 2
        And I verify children-age dropdown are 2
        Then I verify Plus button is enabled
        Then I verify Minus button is enabled

        When I select “Children” as 6
        And I verify Children-age dropdown are 6
        Then I verify plus-button is disabled
        Then I verify Minus button is enabled

        When I select “Children” as 5
        And I verify Children-age dropdown are 5
        Then I verify Plus button is enabled
        Then I verify Minus button is enabled

        When I select “Children” as 0
        Then I verify Children-age dropdown is NOT displayed
        Then I verify Plus button is enabled
        Then I verify minus-button is disabled