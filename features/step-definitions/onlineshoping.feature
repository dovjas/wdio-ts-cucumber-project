Feature: SignUp Sign In and Purchase Product

    Scenario: TC-001 Create New user/SignUp
        Given I am on the home page
        When Navigate to SignUp page
        Then Create an account with random username

    Scenario:TC-002 Sign In with newly created user credentials
        Given I am on the Sign In Page
        When Login using newly created dynamic credentials
        Then I verify the address information in my profile section

    Scenario:TC-003 Add product to Online Cart and checkout
        Given I am on the home page
        When Navigate to SignUp page
        When Login using newly created dynamic credentials
        When I add below products to cart
            | category   | subCategory | title        | co2_rating | quantity | price |
            | Hand Tools | Hammer      | Claw Hammer  | D          | 1        | 11.48 |
            | Hand Tools | Hammer      | Bolt Cutters | D          | 1        | 48.41 |
        Then I shall validate shopping cart as below
            | title        | quantity | product_price | total_price | cart_total |
            | Claw Hammer  | 1        | $11.48        | $11.48      | $59.89     |
            | Bolt Cutters | 1        | $48.41        | $48.41      | $59.89     |
        Then I shall be able to Buy the product
# And  I shall be able to Buy using cheque payment

