import { test, expect } from '@playwright/test';


test.skip('get started link', async ({ page }) => {
  await page.goto('https://www.axis.bank.in/sitemap');
  await page.locator('#personal').getByRole('link', { name: 'Cards', exact: true }).click();
  await page.getByRole('button', { name: 'Accept All' }).click();
  await page.getByRole('heading', { name: 'Commercial Credit Card', exact: true }).click();
  const page1Promise = page.waitForEvent('popup');
});
test.skip('TCS Page', async ({ page }) => {
  await page.goto('https://www.tcs.com/');
  await page.getByRole('button', { name: 'Accept all cookies' }).click();
  await page.getByRole('menuitem', { name: 'Who we are' }).click();
  await page.getByRole('menuitem', { name: 'Leadership' }).click();
  await page.getByRole('link', { name: 'Read more   about   K.' }).first().click();
  await page.getByRole('button', { name: 'Connect with us' }).click();
  await page.getByRole('textbox', { name: 'First name' }).click();
  await page.getByRole('textbox', { name: 'First name' }).fill('Prashant');
  await page.getByRole('textbox', { name: 'First name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Last name' }).fill('Tripathi');
  await page.getByRole('textbox', { name: 'Last name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Email' }).fill('prashant.tripathi2@tcsBanking.com');
  await page.getByRole('textbox', { name: 'Email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Organization' }).fill('TCS');
  await page.getByRole('textbox', { name: 'Organization' }).press('Tab');
  await page.getByRole('combobox', { name: 'Industry' }).first().click();
  await page.getByRole('textbox', { name: 'How can we help you?' }).click();
  await page.getByRole('textbox', { name: 'How can we help you?' }).fill('Please connect with me for exciting oppurtunity');
  await page.locator('.row').first().click();
  await page.locator('.px-3.my-2.col-12').first().click();
});

test('Bank of Baroda', async ({ page }) => {
  await page.goto('https://www.bobibanking.com/index.html');
  await page.goto('https://www.bobibanking.bankofbaroda.bank.in/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  await page.getByRole('button', { name: 'What is new' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => { });
  });
  await page.getByRole('link', { name: 'Health & Home' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Contact Us' }).click();
  await page.locator('section').click();
  await page.getByRole('link', { name: 'Sitemap' }).click();

  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('link', { name: 'Australia' }).click()
  ]);
});
