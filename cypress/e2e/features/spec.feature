Feature: Hello world page

    Scenario: verify hello world page
        Given the user is on the home page
        When the page is loaded
        Then the contents of the page are well displayed