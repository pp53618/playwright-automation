import {test, expect} from '@playwright/test';

test("Handle input box", async ({page}) => {

    await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F");

    //Input box - first name
    await expect(await page.locator("//input[@id='FirstName']")).toBeVisible();
    await expect(await page.locator("//input[@id='FirstName']")).toBeEmpty();
    await expect(await page.locator("//input[@id='FirstName']")).toBeEditable();
    await expect(await page.locator("//input[@id='FirstName']")).toBeEnabled();

    //await page.locator("//input[@id='FirstName']").fill("Bartek");
    await page.fill("//input[@id='FirstName']", "Bartek");

    await page.waitForTimeout(5000);
})