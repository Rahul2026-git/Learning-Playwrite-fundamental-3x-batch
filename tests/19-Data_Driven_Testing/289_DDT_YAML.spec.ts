import { test, expect } from '@playwright/test';
import path from 'path';
import { readYAML } from './util/yamlReader';
import type { LoginRow } from './util/yamlReader';

const LOGIN_URL = 'https://app.thetestingacademy.com/playwright/multiple_element_filter';

test.describe('DDT YAML', () => {

    // YAML is read synchronously, so the rows are ready at test-collection time
    // and each row becomes its own test() — exactly like 286.
    const loginData = readYAML<LoginRow>(path.join(__dirname, 'test-data/login-data.yaml'));

    test.beforeEach(async ({ page }) => {
        await page.goto(LOGIN_URL);
    });

    test.afterEach(async ({ }, testInfo) => {
        console.log(`afterEach: ${testInfo.title} — status: ${testInfo.status}`);
    });

    for (const data of loginData) {

        test(`Login with : ${data.description}`, async ({ page }) => {

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
