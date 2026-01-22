class ShoppingCart {
  //Locators
  get checkoutBtn() {
    return $('[aria-label="cart"]');
  }

  get productTitle() {
    return $$('.product-title');
  }

  get productQuantity() {
    return $$('[data-test="product-quantity"]');
  }

  get productPrice() {
    return $$('[data-test="product-price"]');
  }

  get productTotalPrice() {
    return $$('[data-test="line-price"]');
  }

  get cartTotalPrice() {
    return $('[data-test="cart-total"]');
  }

  #proceedToCheckoutBtns(step:string) {
    return $(`[data-test="${step}"]`);
  }

  get paymentMethodDropdown(){
    return $('#payment-method');
  }

  get checkoutConfirmBtn(){
    return $('[data-test="finish"]');
  }

  get paymentSuccessMsg(){
    return $('[data-test="payment-success-message"]');
  }

  //Actions
  async validateShopingCart(dataTable) {
    const products = dataTable.hashes();
    const expectedCartTotal = products[products.length - 1].cart_total;

    await this.checkoutBtn.click();

    for(let i = 0; i < products.length; i++){
      await expect(this.productTitle[i]).toHaveText(products[i].title);
      await expect(this.productQuantity[i]).toHaveValue(products[i].quantity);
      await expect(this.productPrice[i]).toHaveText(products[i].product_price);
      await expect(this.productTotalPrice[i]).toHaveText(products[i].total_price)     
      await expect(this.cartTotalPrice).toHaveText(expectedCartTotal);
    }

    await browser.pause(4000);
  }

  async proceedToCheckout() {
    const steps = ['proceed-1', 'proceed-2', 'proceed-3'];

    for (const step of steps){
      const btn = await this.#proceedToCheckoutBtns(step);
      await btn.click();
    }
  }

  async makeApayment(){
    await this.paymentMethodDropdown.waitForDisplayed();
    await this.paymentMethodDropdown.selectByAttribute(
    'value',
    'cash-on-delivery',
 );

 await this.checkoutConfirmBtn.click();
 await browser.pause(3000);
  }
}

export default new ShoppingCart;