import { type Locator, type Page } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly ttacart: Locator;
  readonly itemTestAllthethingsTshirtRed: Locator;
  readonly linkTestAll: Locator;
  readonly shoppingCartContainerSvg: Locator;
  readonly addToCartTestAllthethings: Locator;
  readonly nameAToZName: Locator;
  readonly inventoryItemDesc: Locator;

  constructor(page: Page) {
    this.page = page;
    this.ttacart = page.getByText("TTACart");
    this.itemTestAllthethingsTshirtRed = page.getByTestId("item-test-allthethings-tshirt-red-title-link").or(page.getByRole("link", { name: "Test.allTheThings() T-Shirt (Red)" })).or(page.getByText("Test.allTheThings() T-Shirt (Red)"));
    this.linkTestAll = page.getByRole("link", { name: "test.all()" }).or(page.getByTestId("item-img-link"));
    this.shoppingCartContainerSvg = page.locator("#shopping_cart_container > svg");
    this.addToCartTestAllthethings = page.getByTestId("add-to-cart-test-allthethings-tshirt-red").or(page.getByRole("button", { name: "Add to cart" })).or(page.getByText("Add to cart"));
    this.nameAToZName = page.getByText("Name (A to Z) Name (Z to A) Price (low to high) Price (high…");
    this.inventoryItemDesc = page.getByTestId("inventory-item-desc");
  }

  async goto() {
    await this.page.goto("https://app.thetestingacademy.com/playwright/ttacart/inventory");
  }
}
