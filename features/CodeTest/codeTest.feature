Feature: Code Test

    # Score - 40
    @codeTest @codeTest-1
    Scenario Outline: Verify user is able to change language
        Given I am on hotels
        When I change langugage to <languageOption>
        Then I verify language got changed to <language>

        Examples:
            | languageOption           | language |
            | Español (Estados Unidos) | Español  |
            | English (United States)  | English  |

    @codeTest @codeTest-2
    Scenario: Verify limit for adults count in a room
        Given I am on hotels
        When I select number of adults in Room 1 as 1
        Then I verify the minus button for adults is disabled
        Then I verify the plus button for adults is enabled
        When I select number of adults in Room 1 as 14
        Then I verify the plus button for adults is disabled
        Then I verify the minus button for adults is enabled