
Feature: Ecommerce validations

    @Regression
    Scenario: Placing the order
        Given a login to Ecommerce application with "sirmiguel28@gmail.com" and "Inmamm34@@"
        When Add "ZARA COAT 4" to Cart
        Then Verify "ZARA COAT 3" is displayed in the Cart
        When Enter valid details and Place the Order
        Then Verify order is present in the OrderHistory


    @Validation
    Scenario Outline: Placing the order
        Given a login to Ecommerce2 application with "<username>" and "<password>"
        Then Verify Error message is displayed

    # este escenario outline se ejecutara 2 veces, una con el primer set de datos y otra con el segundo set de datos
    Examples:
        | username        | password |
        | rahulshetty     | learning |
        | rahulshetty123  | wrong    |
