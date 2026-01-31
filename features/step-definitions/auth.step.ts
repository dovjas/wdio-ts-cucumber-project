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
  if(!this.user){
    throw new Error('User not found in World');
  }
  // await browser.url('https://practicesoftwaretesting.com/auth/login');
  await browser.url('https://practicesoftwaretesting.com/');
  await homePage.signInBtn.waitForClickable();
  await homePage.signInBtn.click();
  await authPage.email_input.waitForExist();
  await authPage.login(this.user.email, this.user.password);
  await browser.pause(3000);
  await browser.saveScreenshot('./debug-post-login.png');
  await authPage.userMenuDropdown.waitForExist({ timeout: 10000 });
  await expect(authPage.userMenuDropdown).toBeExisting();
});


