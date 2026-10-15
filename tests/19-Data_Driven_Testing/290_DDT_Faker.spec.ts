import { test } from '@playwright/test';
import { faker } from '@faker-js/faker';

test.describe('DDT Faker', () => {

    const loginData = [
        { description: 'faker user 1', username: faker.internet.email(), password: faker.internet.password() },
        { description: 'faker user 2', username: faker.internet.email(), password: faker.internet.password() },
        { description: 'faker user 3', username: faker.internet.email(), password: faker.internet.password() },
    ];

    for (const data of loginData) {

        test(`Login with : ${data.description}`, async ({ page }) => {
            await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
            await page.getByRole('textbox', { name: 'Email Address' }).fill(data.username);
            await page.getByRole('textbox', { name: 'Password' }).fill(data.password);
            await page.getByRole('button', { name: 'Login to Practice Account' }).click();
        });

    }

});
