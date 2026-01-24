import { Before } from '@wdio/cucumber-framework';
import { createUser } from '../data/userData';
import authPage from '../pageobjects/auth.page';
import commonPage from '../pageobjects/common.page.ts';
import homePage from '../pageobjects/home.page.ts';

Before({tags:'@requireUser'}, async function(){
  await commonPage.openHomePage();
  await homePage.ensureLoggedOut();

  if (!this.user) {
    this.user = createUser();
  }
  // Go to login page FIRST
  await homePage.navigateToLoginPage();

  // Create account
  await authPage.createAccount(this.user);
  console.log('Dynamic user created:', this.user.email);
});
