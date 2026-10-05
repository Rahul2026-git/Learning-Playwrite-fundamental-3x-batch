// Handle SVG elements with Playwright (TypeScript)
// ------------------------------------------------
// SVG nodes live in the SVG namespace, not HTML.
// CSS selectors work fine. XPath needs name() / local-name() because tag names
// are namespaced (e.g. svg:path). Common patterns: locate the SVG, locate child
// shapes (path/rect/circle/g), click, hover, read attributes (d, fill, viewBox,
// stroke) and assert state.

import { test, expect, Locator } from '@playwright/test';

const URL = 'https://www.flipkart.com/search';

test.describe('SVG handling - Flipkart search', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });

    test('click the SVG search icon and print matching product titles', async ({ page }) => {
        await page.locator('input[name="q"]').fill('macmini');

        const svgElements: Locator = page.locator('svg');
        await svgElements.first().click();

        const firstResult: Locator = page.locator('//div[contains(@data-id,"CPU")]/div/a[2]');
        await expect(firstResult.first()).toBeVisible({ timeout: 15000 });

        const titlesResults: Locator = page.locator(
            "//div[contains(@data-id,'CPU') or contains(@data-id,'MP')]/div/a[2]"
        );

        const count: number = await titlesResults.count();
        console.log(`Total products found: ${count}`);

        for (let i = 0; i < count; i++) {
            const title: string | null = await titlesResults.nth(i).textContent();
            console.log(title?.trim());
        }
    });
});
