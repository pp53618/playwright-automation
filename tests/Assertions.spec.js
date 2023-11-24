import { test, expect } from '@playwright/test';

test('Assertions Test', async ({page}) => {

    //open app url
    await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F");

    //check url
    await expect(page).toHaveURL("https://demo.nopcommerce.com/register?returnUrl=%2F");

    //check title
    await expect(page).toHaveTitle("nopCommerce demo store. Register");

    //check element is visible
    const logoElement = await page.locator(".header-logo");
    await expect(logoElement).toBeVisible();

    //check the element is availbe or not
    const searchStoreBox = await page.locator("#small-searchterms");
    await expect(searchStoreBox).toBeEnabled();

    //radio btn
    const maleRadioBtn = await page.locator("#gender-male");
    await maleRadioBtn.click()          //select radio button
    await expect(maleRadioBtn).toBeChecked();

    //check box
    const newsletterCheckbox = await page.locator("#Newsletter");
    await expect(newsletterCheckbox).toBeChecked();

    //check the locators has attribute
    const regButton = await page.locator("#register-button")
    await expect(regButton).toHaveAttribute("type", "submit")

    //Element matches text
    await expect(await page.locator(".page-title > h1")).toHaveText("Register"); //full text

    //Element contains text
    await expect(await page.locator(".page-title > h1")).toContainText("Reg"); //partial text        

    //Input has a value
    const emailInput = await page.locator("#Email");
    await emailInput.fill("test@demo.com");
    await expect(emailInput).toHaveValue("test@demo.com");

    //List of elements has given lenght
    const options = await page.locator("select[name='DateOfBirthMonth'] > option");
    await expect(options).toHaveCount(13);
})