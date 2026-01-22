export type Category =
  | 'hand-tools'
  | 'power-tools'
  | 'other'
  | 'special-tools'
  | 'rentals';

interface ProductTableRow {
  category: string;
  subCategory: string;
  title: string;
  co2_rating: string;
  quantity: string;
  price: string;
}


class ProductPage {
  //Locators
  public get categoriesBtn() {
    return $('[data-test="nav-categories"]');
  }

  public productCardByName(name: string) {
    return $(
      `//a[contains(@class,"card")]//h5[@data-test="product-name" and normalize-space()="${name}"]/ancestor::a`,
    );
  }

  public get productsCardTitle() {
    return $$('[data-test="product-name"]');
  }
  public get productTitle() {
    return $('h1[data-test="product-name"]');
  }

  public get productPrice() {
    return $('span[data-test="unit-price"]');
  }

  public get co2Rating() {
    return $('[data-test="co2-rating-badge"] .co2-letter.active');
  }

  public get productQuantityInput() {
    return $('input[data-test="quantity"]');
  }

  public get addToCartBtn() {
    return $('#btn-add-to-cart');
  }

  public categoryType(category: Category) {
    return $(`[data-test="nav-${category}"]`);
  }

  public get productAddedToCartMsg() {
    return $('[aria-label="Product added to shopping cart."]');
  }
  // Helper
  private normalizeCategory(category:string):Category{
    return category.trim().toLowerCase().replace(/\s+/g,'-') as Category;
  }
  // Actions
  async goToCategory(category: Category) {
    await this.categoriesBtn.click();
    await this.categoryType(category).click();
  }

 async goToProduct(title: string) {
  const product = this.productCardByName(title);

  await product.waitForExist({
    timeout: 5000,
    timeoutMsg: `Product "${title}" not found`,
  });

  await product.click();
  await this.productQuantityInput.waitForDisplayed();
}

  async addToCart(dataTable) {
    const products = dataTable.hashes() as ProductTableRow[];
    for(const product of products){
      const category = this.normalizeCategory(product.category);
      await this.goToCategory(category);
      await this.goToProduct(product.title);

    await expect(this.productTitle).toHaveText(product.title);
    await expect(this.productQuantityInput).toHaveValue(product.quantity);
    await expect(this.co2Rating).toHaveText(product.co2_rating);
    await expect(this.productPrice).toHaveText(product.price);

    await this.addToCartBtn.click();
    }
  }
}
export default new ProductPage();
