// Playwright test for EPAM Client Work navigation
import { test, expect } from '@playwright/test';

test.describe('EPAM - Client Work navigation', () => {
  test('should navigate to Services -> Explore Our Client Work and verify Client Work text', async ({ page }) => {
    // 1. Navigate to https://www.epam.com/
    await page.goto('https://www.epam.com/', { waitUntil: 'domcontentloaded' });

    // 2. Select "Services" from the header menu
    // Use a resilient locator: first look for a link or button with visible name Services
    const services = page.locator('text=Services').first();
    await services.scrollIntoViewIfNeeded();
    await services.click();

    // 3. Click the "Explore Our Client Work" link.
    // Wait for navigation or the appearance of the link
    const exploreLink = page.locator('text=Explore Our Client Work');
    await exploreLink.waitFor({ state: 'visible', timeout: 15000 });
    await exploreLink.click();

    // 4. Verify that the "Client Work" text is visible on the page.
    const clientWorkText = page.locator('text=Client Work');
    await expect(clientWorkText).toBeVisible({ timeout: 15000 });
  });
});
