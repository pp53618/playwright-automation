import { test, expect } from '@playwright/test';

/* Skip only browser
test('test1', async ({page, browserName}) => {
    console.log("This is my test1.....")
    if(browserName==="chromium")
    {
        test.skip();
    }
});

test('test2', async ({page}) => {
    console.log("This is my test2.....")
});
*/

/*
// Fixme
test('test3', async ({page}) => {
    test.fixme();
    console.log("This is my test3.....")
});

test('test4', async ({page}) => {
    console.log("This is my test4.....")
});
*/

//Fail
/*test('test5', async ({page}) => {
    test.fail();    //exp
    console.log("This is my test5.....");
    expect(1).toBe(2);  //If both exp & actual failed then test pass
});*/
/*
test('test6', async ({page, browserName}) => {
    console.log("This is my test6.....");
    if(browserName==="firefox")
    {
        test.fail() //exp
    }
});
*/

//Slow
test('test7', async ({page}) => {
    //test.slow();
    test.setTimeout(5000);
    console.log("This is my test7.....");
    await page.goto("https://demoblaze.com/")
});