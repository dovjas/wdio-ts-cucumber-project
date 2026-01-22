import { Category } from "../pageobjects/product.page.ts"; 

export function normalizeCategory(category:string): Category{
    return category.toLowerCase().replace(' ', '-') as Category;
}