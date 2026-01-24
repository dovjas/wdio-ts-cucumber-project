import { Before } from "@wdio/cucumber-framework";
import homePage from "../pageobjects/home.page";
import commonPage from "../pageobjects/common.page";


Before({tags:'@loggedOut'}, async () => {
  await commonPage.openHomePage();
  await homePage.ensureLoggedOut();
});
