
Feature: Ecommerce validations

    @Validation
    @foo
    Scenario: Placing the order
        Given a login to Ecommerce2 application with "rahulshetty" and "learning"
        Then Verify Error message is displayed
