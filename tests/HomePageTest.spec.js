const { test, expect } = require('@playwright/test');

test('Home Page',async ({page}) => {

    await page.goto('https://demoblaze.com/');

    const pageTitle = await page.title();
        console.log('Page title is:', pageTitle);

    await expect(page).toHaveTitle('STORE');

    const pageUrl = await page.url()
        console.log('Page Url is:',pageUrl )

    await expect(page).toHaveURL('https://demoblaze.com/')

    await page.close();

})