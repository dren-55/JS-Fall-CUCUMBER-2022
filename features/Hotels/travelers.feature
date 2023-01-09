
  Feature:travelers count
  @TC-18
    Scenario: Verify user can update number of guests on Home page

          Given I am on hotels
          When I click on Travelers
          When I select "Adults" as 6
          And I select "Children" as 3
          And I select first child age: "4"
          And I select second child age: "Under 1"
          And I select third child age: "7"
          And I click Done button
          Then I verify total number of guests is 9