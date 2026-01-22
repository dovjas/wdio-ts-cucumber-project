import { Then } from "@wdio/cucumber-framework";
import myaccountPage from "../pageobjects/myaccount.page.ts";


Then(
  /^I verify the address information in my profile section$/,
  async () => {
    await myaccountPage.verifyAddressInfo();
    await expect(myaccountPage.phone_input).toBeDisplayed();
  }
);