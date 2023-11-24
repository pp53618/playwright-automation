import { test, expect } from "@playwright/test"

test('tes1', async ({page}) => {
    await page.goto('https://demoblaze.com/');
    await expect(page).toHaveTitle("STORE")
});

test('tes2', async ({page}) => {
    await page.goto("https://demo.opencart.com/");
    await expect(page).toHaveTitle("Your Store")
});
