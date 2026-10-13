import { expect, takeSnapshot, test } from '@chromatic-com/playwright';

test('captures the AdBuzz homepage', async ({ page }, testInfo) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Create Buzz. Make Brand.' })).toBeVisible();
  await takeSnapshot(page, testInfo);
});
