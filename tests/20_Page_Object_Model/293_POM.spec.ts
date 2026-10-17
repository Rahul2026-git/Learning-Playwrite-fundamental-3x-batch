import { test, expect } from '@playwright/test';
import { LoginPage } from './Pages/Loginpage';
import { InventoryPage } from './Pages/inventoryPage';
import { Cartpage } from './Pages/CartPage';

test('cart add assertion', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'tta_secret');

    const inventoryPage = new InventoryPage(page);
    const firstItem = (await inventoryPage.itemTestAllthethingsTshirtRed.first().innerText()).trim();
    await inventoryPage.addToCartTestAllthethings.first().click();
    await inventoryPage.shoppingCartContainerSvg.click();
    await expect(page).toHaveURL(/cart/);

    const cartPage = new Cartpage(page);
    await expect(cartPage.itemName).toHaveText(firstItem);
});
