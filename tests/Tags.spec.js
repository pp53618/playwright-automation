import { test, expect } from '@playwright/test';

test('test1@sanity', async ({page}) => {
    console.log("This is m test1.....")
});

test('test2@sanity', async ({page}) => {
    console.log("This is m test2.....")
});

test('test3@reg', async ({page}) => {
    console.log("This is m test3.....")
});

test('test4@reg', async ({page}) => {
    console.log("This is m test4.....")
});

test('test5@sanity@reg', async ({page}) => {
    console.log("This is m test5.....")
});