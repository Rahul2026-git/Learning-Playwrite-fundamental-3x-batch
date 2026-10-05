// XPath for SVG nodes needs name() because the tag names are namespaced:
// //div[@id='admin1_map_inner']//*[name()='svg']//*[contains(@class,'sm_label')]
import { test } from '@playwright/test';

const SimpleMaps = 'https://simplemaps.com/svg/country/in';

test.describe('Map selection - SimpleMaps India SVG', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(SimpleMaps);
    });

    test('list all states and click the Uttar Pradesh path', async ({ page }) => {
        const states = await page
            .locator(
                `//div[@id='admin1_map_inner']//*[name()='svg']//*[name()='text' and contains(@class,'sm_label')]`
            )
            .allTextContents();

        console.log(`Total states: ${states.length}`);

        for (const state of states) {
            if (state.trim() === 'Uttar Pradesh') {
                await page.locator(`//*[name()='path' and contains(@class,'INUP')]`).click();
            }
        }
    });
});
