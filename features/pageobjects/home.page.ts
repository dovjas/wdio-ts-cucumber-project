class HomePage {
  // Locators
  public get signInBtn() {
    return $('=Sign in');
  }
  public get contactUsBtn() {
    return $('=Contact');
  }
  public get logoImg() {
    return $('a[title="Practice Software Testing - Toolshop"] svg');
  }
  public get topMenuDropdown(){
    return $('#menu');
  }

  public get logOutBtn(){
    return $('=Sign out');
  }
  // Actions
  async navigateToLoginPage() {
    await this.signInBtn.waitForClickable();
    await this.signInBtn.click();
    console.log('Sign In button clicked');
  }

  async logout(){
    await this.topMenuDropdown.waitForExist();
    await this.topMenuDropdown.waitForClickable();
    await this.topMenuDropdown.click();

    await this.logOutBtn.waitForClickable();
    await this.logOutBtn.click();
  }
  
}

export default new HomePage();
