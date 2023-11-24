import { test, expect } from '@playwright/test';

test('Data Picker', async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    //await page.fill("#datepicker", "10/02/2024");

    //data picker
    const year="2022"
    const month="March"
    const date="21"

    await page.click("#datepicker")     //open calender

    while(true)
    {
        const currentYear=await page.locator(".ui-datepicker-year").textContent();
        const currentMonth=await page.locator(".ui-datepicker-month").textContent();

        if(currentYear == year && currentMonth == month)
        {
            break;
        }

        //await page.locator("a[title='Next']").click();      //Next
        await page.locator("//a[@title='Prev']").click();       //Previous

    }

    const dates=await page.$$(".ui-state-default");

    //date selection using loop
    /*for(const dt of dates)
    {
        if(await dt.textContent()==date)
        {
            await dt.click();
            break;
        }
    }
*/

    //data selection - wihout loop
    await page.click(`//a[@class='ui-state-default'][text()='${date}']`);

    await page.waitForTimeout(3000);
});