import { test, expect } from '@playwright/test';


test('get started link', async ({ page }) => {
  await page.goto('https://www.axis.bank.in/sitemap');
  await page.locator('#personal').getByRole('link', { name: 'Cards', exact: true }).click();
  await page.getByRole('button', { name: 'Accept All' }).click();
  await page.getByRole('heading', { name: 'Commercial Credit Card', exact: true }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Apply Now' }).nth(2).click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: 'Close' }).click();
});
