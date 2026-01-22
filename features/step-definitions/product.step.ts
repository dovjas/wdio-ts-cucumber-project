import { When } from '@wdio/cucumber-framework';
import productPage from '../pageobjects/product.page.ts';

When(/^I add below products to cart$/, async (dataTable) => {
  await  productPage.addToCart(dataTable);
});
