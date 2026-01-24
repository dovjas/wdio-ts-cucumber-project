import { Given, When } from '@wdio/cucumber-framework';
import commonPage from '../pageobjects/common.page.ts';
import homePage from '../pageobjects/home.page.ts';

Given(/^I am on the home page$/, async () => {
  await commonPage.openHomePage();
});

When(/^Navigate to SignUp page$/, async () => {
  await homePage.navigateToLoginPage();
});
