import { Then, Given, When } from '@wdio/cucumber-framework';
import authPage from '../pageobjects/auth.page';
import { createUser } from '../data/userData';
import allureReporter from '@wdio/allure-reporter';
import homePage from '../pageobjects/home.page.ts';

Then(/^Create an account with random username$/, async function(){
  this.user = createUser();
  await authPage.createAccount(this.user);
  allureReporter.addSeverity('critical')
});

Given(/^I am on the Sign In Page$/, async function(){
  await authPage.loginBtn.waitForDisplayed();
  await expect(authPage.loginBtn).toBeDisplayed();
});

When(/^Login using newly created dynamic credentials$/, async function(){
  if (!this.user) {
    throw new Error('User not found in World');
  }
  // await browser.url('https://practicesoftwaretesting.com/auth/login');
  await browser.url('https://practicesoftwaretesting.com/');
  await homePage.signInBtn.waitForClickable();
  await homePage.signInBtn.click();
  await authPage.email_input.waitForExist();
  await authPage.login(this.user.email, this.user.password);
  await authPage.userMenuDropdown.waitForExist({ timeout: 10000 });
  await authPage.userMenuDropdown.waitForClickable({ timeout: 10000 });
  // ✅ Environment-agnostic success checks (works everywhere)
  await browser.waitUntil(
    async () => {
      const url = await browser.getUrl();
      return (
        url.includes('/dashboard') ||
        !url.includes('login') ||
        !(await authPage.email_input.isExisting())
      );
    },
    {
      timeout: 15000,
      timeoutMsg: 'Login failed - still on login page after 15s',
    },
  );
  await expect(authPage.userMenuDropdown).toBeExisting();
});


