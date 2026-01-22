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

  async verifyAddressInfo() {
    await this.profileBtn.click();

    await waitForInputValue(this.firstName_input);
    await waitForInputValue(this.lastName_input);
    await waitForInputValue(this.street_input);
    await waitForInputValue(this.postalCode_input);
    await waitForInputValue(this.city_input);
    await waitForInputValue(this.country_dropdown);
    await waitForInputValue(this.state_input);
    await waitForInputValue(this.phone_input);
    await waitForInputValue(this.email_input);
  }
}
export default new MyAccount();
