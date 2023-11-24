//Reference : ttps://playwright.dev/docs/input#upload-files

import { test, expect } from '@playwright/test';

test('Single File', async ({page}) => {

    await page.goto("https://www.foundit.in/");

    await page.waitForSelector(".mqfihd-upload");
    await page.locator(".mqfihd-upload").click();

    await page.locator("#file-upload").setInputFiles('tests/uploadFile/testFile1.pdf');

    await page.waitForTimeout(5000);
});

test.only('Multiple Files', async ({page}) => {

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

    await page.locator("#filesToUpload")
            .setInputFiles(["tests/uploadFile/testFile1.pdf",
                            "tests/uploadFile/testFile2.pdf"]);

    expect(await page.locator("#fileList > li:nth-child(1)")).toHaveText("testFile1.pdf");
    expect(await page.locator("#fileList > li:nth-child(2)")).toHaveText("testFile2.pdf");

    await page.waitForTimeout(5000);

    //Removing files
    await page.locator("#filesToUpload").setInputFiles([]);
    expect(await page.locator("#fileList > li:nth-child(1)")).toHaveText("No Files Selected");

    await page.waitForTimeout(5000);
});