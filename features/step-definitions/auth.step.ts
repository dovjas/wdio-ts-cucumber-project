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

When(/^Login using newly created dynamic credentials$/, async function () {
  if (!this.user) {
    throw new Error('User not found in World');
  }
  await browser.url('https://practicesoftwaretesting.com/');
  await homePage.signInBtn.waitForClickable();
  await homePage.signInBtn.click();
  await authPage.email_input.waitForExist();
  await authPage.login(this.user.email, this.user.password);

  await browser.waitUntil(
    async () => {
      const currentUrl = await browser.getUrl();
      const loginFormGone = !(await authPage.email_input.isExisting());
      const signInBtnGone = !(await homePage.signInBtn.isExisting());
      return loginFormGone || signInBtnGone || !currentUrl.includes('login');
    },
    {
      timeout: 20000,
      timeoutMsg: 'Login failed - still on login page',
    },
  );

  console.log('✅ Login verified by state change');
});



