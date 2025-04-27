import { INTERNATIONALIZATION } from '@/lib/i8n';
import { test, expect } from '@playwright/test';

test('Check static information', async ({ page }) => {
  await page.goto('http://localhost:3001/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Zoro AI/);

  await expect(page.getByTestId('login-title-id')).toBeVisible();

  const emailInput = page.getByPlaceholder('Enter your email');
  await expect(emailInput).toBeVisible();

  const loginButton = page.getByRole('button', { name: 'Login' });
  await expect(loginButton).toBeVisible();
});

test('Click login with error email 1', async ({ page }) => {
  await page.goto('http://localhost:3001/');


  const loginButton = page.getByRole('button', { name: 'Login' });

  await loginButton.click();

  await expect(page.getByText(INTERNATIONALIZATION.EN_US.LOGIN_EMAIL_INCORRECT_ERROR)).toBeVisible();
});

test('Click login with error email 2', async ({ page }) => {
  await page.goto('http://localhost:3001/');


  const loginButton = page.getByRole('button', { name: 'Login' });

  await loginButton.click();

  const emailInput = page.getByPlaceholder('Enter your email');
  await emailInput.fill('test');
  await expect(page.getByText(INTERNATIONALIZATION.EN_US.LOGIN_EMAIL_INCORRECT_ERROR)).toBeVisible();
});

test('Click login with error email 3', async ({ page }) => {
  await page.goto('http://localhost:3001/');


  const loginButton = page.getByRole('button', { name: 'Login' });

  await loginButton.click();

  const emailInput = page.getByPlaceholder('Enter your email');
  await emailInput.fill('test@abc');
  await expect(page.getByText(INTERNATIONALIZATION.EN_US.LOGIN_EMAIL_INCORRECT_ERROR)).toBeVisible();
});
