import { test, expect } from '@playwright/test';

let page;

test.beforeEach(async ({browser})=> {
    page=await browser.newPage();

    await page.goto("https://demoblaze.com/");
    //Login
    await page.locator("#login2").click();
    await page.locator("#loginusername").fill("pavanol");
    await page.locator("#loginpassword").fill("test@123");
    await page.locator("button[onclick='logIn()']").click();
});

test.afterEach(async() => {
    //Logout
    await page.locator("#logout2").click();
})

test('Home Page Test', async () => {
    //Home Page
    const products=await page.$$(".hrefch");
    expect(products).toHaveLength(9);
});

test('Add Product to cart Test', async () => {
    //Add product to cart
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
    await page.locator(".btn.btn-success.btn-lg").click();

    page.on('dialog',async dialog=> {
        expect(dialog.message()).toContain("Product added.");
        await dialog.accept();
    })
});