class AuthPage {
  //Locators 
  public get registerAccountBtn() {
    return $('=Register your account');
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

  public get password_input() {
    return $('#password');
  }

  public get registerBtn() {
    return $('=Register');
  }

  public get loginBtn(){
    return $('input[value="Login"]');
  }

  public get userMenuDropdown(){
    return $('#menu');
  }

  //Actions
  async createAccount(userData) {
    await this.registerAccountBtn.waitForExist();
    await this.registerAccountBtn.click();

    await this.firstName_input.waitForExist();
    await this.firstName_input.setValue(userData.firstName);
    await this.lastName_input.setValue(userData.lastName);
    await this.dateOfBirth_input.setValue(userData.dateOfBirth);
    await this.street_input.setValue(userData.street);
    await this.postalCode_input.setValue(userData.postal);
    await this.city_input.setValue(userData.city);
    await this.state_input.setValue(userData.state);
    await this.country_dropdown.selectByVisibleText(userData.country);
    await this.phone_input.setValue(userData.phone);
    await this.email_input.setValue(userData.email);
    
    await this.password_input.click();
    await browser.keys(userData.password);
    
    await this.registerBtn.click();
  }

  async login(email:string, password:string){
    await this.email_input.waitForDisplayed();
    await this.email_input.setValue(email);

    await this.password_input.click();
    await browser.keys(password);
    await browser.pause(8000);
    await this.loginBtn.click();
  }
}

export default new AuthPage;