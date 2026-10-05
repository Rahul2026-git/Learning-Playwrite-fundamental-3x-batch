import { test, expect, Locator } from '@playwright/test';

const URL = 'https://app.thetestingacademy.com/playwright/widgets/svg';

test.describe('SVG handling - Testing Academy SVG widgets', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });

    test('click a shape by id and assert the output', async ({ page }) => {
        const circleShape: Locator = page.locator('#circle-blue');
        await circleShape.click();

        await expect(circleShape).toHaveClass(/is-selected/);
        await expect(page.locator('#shapes-output')).toContainText('Blue circle');
    });

    test('select a bar chart bar by accessible name', async ({ page }) => {
        await page.getByRole('button', { name: /Q3 bar/ }).click();

        await expect(page.getByTestId('bars-output')).toContainText('Q3');
    });

    test('set a star rating by role and assert the readout', async ({ page }) => {
        await page.getByRole('radio', { name: '4 stars' }).click();

        await expect(page.getByTestId('stars-readout')).toHaveText('Rating: 4 / 5');
    });

    test('iterate every SVG bar and read its data-quarter', async ({ page }) => {
        const allBars: Locator[] = await page.locator('.bar').all();
        expect(allBars.length).toBeGreaterThan(0);

        for (const bar of allBars) {
            const quarter = await bar.getAttribute('data-quarter');
            await bar.click();
            console.log(quarter);
        }
    });
});
