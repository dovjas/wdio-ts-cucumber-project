import { waitForInputValue } from "../utils/waitFor.ts";

class MyAccount {
  //Locators
  public get profileBtn() {
    return $('a[routerlink="profile"]');
  }
  public get firstName_input() {
    return $('#first_name');
  }

  public get lastName_input() {
    return $('#last_name');
  }

  public get dateOfBirth_input() {
    return $('#dob');
  }

  public get street_input() {
    return $('#street');
  }

  public get postalCode_input() {
    return $('#postal_code');
  }

  public get city_input() {
    return $('#city');
  }

  public get state_input() {
    return $('#state');
  }

  public get country_dropdown() {
    return $('#country');
  }

  public get phone_input() {
    return $('#phone');
  }

  public get email_input() {
    return $('#email');
  }

  //Actions
  async openProfile() {
    await browser.waitUntil(
      async () => (await browser.getUrl()).includes('/account'),
      {
        timeout: 20000,
        timeoutMsg: 'User is not on account page after login',
      },
    );

  // Navigate directly — no flaky clicks
  await browser.url('/account/profile');

  await browser.waitUntil(
    async() =>((await this.firstName_input.isDisplayed()),
      {
        timeout: 30000, // give extra time for CI
        interval: 500,
        timeoutMsg: '#first_name input did not display within 30s',
      }
    )
  )
  }

  async waitForProfileDataToLoad() {
    await this.openProfile();
    console.log('Current URL of VerifyAddress:', await browser.getUrl());

    await waitForInputValue(this.firstName_input);
    await waitForInputValue(this.lastName_input);
    await waitForInputValue(this.street_input);
    await waitForInputValue(this.postalCode_input);
    await waitForInputValue(this.city_input);
    await waitForInputValue(this.country_dropdown);
    await waitForInputValue(this.state_input);
    await waitForInputValue(this.phone_input);
    await waitForInputValue(this.email_input);

    // await expect(this.firstName_input).toHaveValue(user.firstName);
    // await expect(this.lastName_input).toHaveValue(user.lastName);
    // await expect(this.street_input).toHaveValue(user.street);
    // await expect(this.postalCode_input).toHaveValue(user.postal);
    // await expect(this.city_input).toHaveValue(user.city);
    // await expect(this.state_input).toHaveValue(user.state);
    // await expect(this.phone_input).toHaveValue(user.phone);
    // await expect(this.email_input).toHaveValue(user.email);
  }
}
export default new MyAccount();
