import { test, expect } from '@playwright/test';
import path from 'path';
import { readLoginDataFromExcel } from './util/excelReader';
import type { LoginRow } from './util/yamlReader';

const LOGIN_URL = 'https://app.thetestingacademy.com/playwright/multiple_element_filter';

test.describe('DDT Excel', () => {

    let loginData: LoginRow[] = [];

    test.beforeAll(async () => {
        loginData = await readLoginDataFromExcel(path.join(__dirname, 'test-data/login-data.xlsx'));
    });

    test.afterEach(async ({ }, testInfo) => {
        console.log(`afterEach: ${testInfo.title} — status: ${testInfo.status}`);
    });

    // exceljs is async, so the rows cannot be read at test-collection time.
    // We load them in beforeAll and drive one test.step per row instead.
    test('login with every row from Excel', async ({ page }) => {

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
