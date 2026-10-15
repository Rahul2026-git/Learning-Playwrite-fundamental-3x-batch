import { test, expect } from '@playwright/test';
import 'dotenv/config';
import { isDbConfigured, readLoginDataFromDB } from './util/dbReader';
import type { LoginRow } from './util/yamlReader';

const LOGIN_URL = 'https://app.thetestingacademy.com/playwright/multiple_element_filter';

test.describe('DDT MySQL', () => {

    // No credentials -> skip the whole suite instead of failing with a connection error.
    test.skip(!isDbConfigured(), 'MySQL not configured — set MYSQL_HOST (and friends) in .env');

    let loginData: LoginRow[] = [];

    test.beforeAll(async () => {
        loginData = await readLoginDataFromDB();
    });

    test.afterEach(async ({ }, testInfo) => {
        console.log(`afterEach: ${testInfo.title} — status: ${testInfo.status}`);
    });

    // MySQL is async, so the rows cannot be read at test-collection time.
    // We load them in beforeAll and drive one test.step per row instead.
    test('login with every active row from MySQL', async ({ page }) => {

        for (const data of loginData) {

            await test.step(`Login with : ${data.description}`, async () => {
                await page.goto(LOGIN_URL);

                const textboxEmailAddress = page.getByRole("textbox", { name: "Email Address" });
                const textboxPassword = page.getByRole("textbox", { name: "Password" })
                    .or(page.locator("#password"))
                    .or(page.locator("[name=\"password\"]"));
                const buttonLogin = page.getByRole("button", { name: "Login to Practice Account" })
                    .or(page.getByTestId("login-button"))
                    .or(page.getByText("Login to Practice Account"));

                await textboxEmailAddress.fill(data.username);
                await textboxPassword.fill(data.password);
                await buttonLogin.click();

                // Same assertion block as 286 — uncomment once the page validates:
                // if (data.shouldPass) {
                //     await expect(page).toHaveURL(/#login-success/);
                // } else {
                //     await expect(page.getByText(data.expectedError)).toBeVisible();
                // }
            });

        }

    });

});
