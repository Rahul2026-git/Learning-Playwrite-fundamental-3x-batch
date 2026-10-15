import { test, expect } from '@playwright/test';
import userData from './280_User.json';

test('Verify DDT', async ({ page }) => {

    console.log(userData.username);
    console.log(userData.password);

});