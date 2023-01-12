Feature: Destination dates

Scenario: Verify filter-by and sort-by functionality works as expected

Given I am on hotels
When I search "Manhattan, NY" in destination field
And I enter Check-in date as Feb-10-2023
And I enter Check-out date as Feb-16-2023
And I click on Search button
When I click on "5*" from star-rating filter
When I select "Price" from sort-by dropdown
Then I verify all hotels in search results are *-rated as selected in above step
Then I verify all hotels are listed in increasing order(price)