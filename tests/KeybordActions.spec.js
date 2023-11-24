import { test, expect } from '@playwright/test';

test('Keyboard actions', async ({page}) => {

    await page.goto("https://gotranscript.com/text-compare");

    //await page.locator("name='text1'").fill("welcome to automation");

    await page.type("[name='text1']", "welcome to automation");

    //Ctrl+A - Select the text
    await page.keyboard.press("Control+A");

    //Ctrl+C - Copy the text
    await page.keyboard.press("Control+C");

    //Tab
    await page.keyboard.down("Tab")
    await page.keyboard.up("Tab")

    //Ctrl+v - paste the text
    await page.keyboard.press("Control+V");

    await page.waitForTimeout(5000);
});