import { Then, Given, When } from '@wdio/cucumber-framework';
import authPage from '../pageobjects/auth.page.ts';
import { createUser } from '../data/userData.ts';
import allureReporter from '@wdio/allure-reporter';


const user = createUser();
Then(/^Create an account with random username$/, async () => {
  await authPage.createAccount(user);
  allureReporter.addSeverity('critical')
});
Given(/^I am on the Sign In Page$/, async()=>{
  await authPage.loginBtn.waitForDisplayed();
  await expect(authPage.loginBtn).toBeDisplayed();
});
When(/^Login using newly created dynamic credentials$/, async()=>{
  await authPage.login(user.email, user.password)
  await expect(authPage.userMenuDropdown).toBeExisting();
});


