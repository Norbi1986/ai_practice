import { test, expect } from '@playwright/test';

test('EPAM - Services -> Explore Our Client Work shows Client Work', async ({ page }) => {
  // 1. Navigate to https://www.epam.com/
  await page.goto('https://www.epam.com/');

  // 2. Select "Services" from the header menu
  await page.getByRole('link', { name: 'Services' }).click();

  // 3. Click the "Explore Our Client Work" link.
  await page.getByRole('link', { name: 'Explore Our Client Work' }).click();

  // 4. Verify that the "Client Work" text is visible on the page.
  await expect(page.locator('text=Client Work')).toBeVisible();
});
