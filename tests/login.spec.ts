import { INTERNATIONALIZATION } from '@/lib/i8n';
import { test, expect } from '@playwright/test';

const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3001';

test('Check static information', async ({ page }) => {
  await page.goto(FRONTEND_URL);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Zoro AI/);

  await expect(page.getByTestId('login-title-id')).toBeVisible();

  const emailInput = page.getByPlaceholder('Enter your email');
  await expect(emailInput).toBeVisible();

  const loginButton = page.getByRole('button', { name: 'Login' });
  await expect(loginButton).toBeVisible();
});

test('Click login with error email 1', async ({ page }) => {
  await page.goto(FRONTEND_URL);


  const loginButton = page.getByRole('button', { name: 'Login' });

  await loginButton.click();

  await expect(page.getByText(INTERNATIONALIZATION.EN_US.LOGIN_EMAIL_INCORRECT_ERROR)).toBeVisible();
});

test('Click login with error email 2', async ({ page }) => {
  await page.goto(FRONTEND_URL);


  const loginButton = page.getByRole('button', { name: 'Login' });

  await loginButton.click();

  const emailInput = page.getByPlaceholder('Enter your email');
  await emailInput.fill('test');
  await expect(page.getByText(INTERNATIONALIZATION.EN_US.LOGIN_EMAIL_INCORRECT_ERROR)).toBeVisible();
});

test('Click login with error email 3', async ({ page }) => {
  await page.goto(FRONTEND_URL);


  const loginButton = page.getByRole('button', { name: 'Login' });

  await loginButton.click();

  const emailInput = page.getByPlaceholder('Enter your email');
  await emailInput.fill('test@abc');
  await expect(page.getByText(INTERNATIONALIZATION.EN_US.LOGIN_EMAIL_INCORRECT_ERROR)).toBeVisible();
});

test('Click login with correct email', async ({ page }) => {
  await page.route('*/**/login', async route => {
    const json = { 'status': 'success', 'message': 'Email sent' };
    await route.fulfill({ json });
  });
  await page.goto(FRONTEND_URL);


  const loginButton = page.getByRole('button', { name: 'Login' });


  const emailInput = page.getByPlaceholder('Enter your email');
  await emailInput.fill('test@a.com');

  await loginButton.click();

  await expect(page.getByText(INTERNATIONALIZATION.EN_US.LOGIN_EMAIL_GENERATED_MESSAGE)).toBeVisible();
});
