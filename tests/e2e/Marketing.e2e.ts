import { expect, test } from '@playwright/test';

test.describe('Marketing site', () => {
  test('renders the homepage and opens the contact page', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('heading', { name: 'Create Buzz. Make Brand.' })).toBeVisible();

    await page.getByRole('link', { name: 'Discuss your project' }).first().click();

    await expect(page).toHaveURL(/contact$/u);
    await expect(page.getByRole('heading', { name: /Let’s talk/i })).toBeVisible();
  });

  test('renders the legal and service pages', async ({ page }) => {
    await page.goto('/privacy-policy');
    await expect(page.getByRole('heading', { name: 'Privacy policy', exact: true })).toBeVisible();

    await page.goto('/creative-campaigns-events');
    await expect(page.getByRole('heading', { name: /Creative campaigns/i })).toBeVisible();
  });
});
