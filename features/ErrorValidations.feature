
Feature: Ecommerce validations

    @Validation
    @foo
    Scenario Outline: Placing the order
        Given a login to Ecommerce2 application with "<username>" and "<password>"
        Then Verify Error message is displayed

    # este escenario outline se ejecutara 2 veces, una con el primer set de datos y otra con el segundo set de datos
    Examples:
        | username        | password |
        | rahulshetty     | learning |
        | rahulshetty123  | wrong    |



#Parametrization, parallel, html, rerun failed tests, 