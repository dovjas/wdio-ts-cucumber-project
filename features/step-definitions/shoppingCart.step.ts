import { Then } from "@wdio/cucumber-framework";
import shoppingCartPage from "../pageobjects/shoppingCart.page.ts";

Then(/^I shall validate shopping cart as below$/, async (dataTable) => {
    await shoppingCartPage.validateShopingCart(dataTable);
});

Then(/^I shall be able to Buy the product$/, async()=>{
  await shoppingCartPage.proceedToCheckout();
  await shoppingCartPage.makeApayment();
  await expect(shoppingCartPage.paymentSuccessMsg).toBeDisplayed();
});