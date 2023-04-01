// @ts-check
import {chromium, webkit, firefox} from "@playwright/test";

const { test, expect } = require('@playwright/test');

// test('has title', async function ({page}){
//   await page.goto('https://playwright.dev/');
//
//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
//
//   // Debug purpose only
//   await page.waitForTimeout(10000);
// });

test('get started link', async ({page}) => {
  // const browser = await chromium.launch();
  // console.log(browser.browserType().name())
  // const context = await browser.newContext();
  // const page = await context.newPage();
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);

  await page.waitForTimeout(10000);
});
