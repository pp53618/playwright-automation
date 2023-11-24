import {test, expect} from '@playwright/test';

test("Handle radio button", async ({page}) => {

    await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F");

    //Radio button
    //await page.locator("//input[@id='gender-male']").check();
    await page.check("//input[@id='gender-male']");     //male

    //Assertions
    await expect(await page.locator("//input[@id='gender-male']")).toBeChecked();
    await expect(await page.locator("//input[@id='gender-male']").isChecked()).toBeTruthy();        //male

    //Female radio is not checked
    await expect(await page.locator("//input[@id='gender-female']").isChecked()).toBeFalsy();       //female

    await page.waitForTimeout(5000);
})