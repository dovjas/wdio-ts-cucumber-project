import { Given, When } from '@wdio/cucumber-framework';
import commonPage from '../pageobjects/common.page.ts';
import homePage from '../pageobjects/home.page.ts';

Given(/^I am on the home page$/, async () => {
  commonPage.openHomePage();

  if (await homePage.topMenuDropdown.isExisting()){
    await homePage.logout();
  }
  await expect(homePage.logoImg).toBePresent();
  await expect(homePage.signInBtn).toBePresent();
  await expect(homePage.contactUsBtn).toBePresent();
});
When(/^Navigate to SignUp page$/, async () => {
  homePage.navigaToLoginPage();
});
