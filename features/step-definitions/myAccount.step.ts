import { Then } from "@wdio/cucumber-framework";
import MyAccountPage from "../pageobjects/myAccount.page";


Then(
  /^I verify the address information in my profile section$/,
  async function(){
    if(!this.user){
      throw new Error('User not found in World');
    }
    await MyAccountPage.verifyAddressInfo();
    await expect(MyAccountPage.phone_input).toBeDisplayed();
  }
);