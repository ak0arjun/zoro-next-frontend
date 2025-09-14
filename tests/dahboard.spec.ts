import { test, expect } from '@playwright/test';

const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000';

test('Floating chat button is visible on dashboard', async ({ page }) => {
  await page.goto(FRONTEND_URL + '?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjbWNqOHg2bHkwMDAwbWI5MHRxMjE5dnpmIiwiaWF0IjoxNzU3ODQ5NDUxLCJleHAiOjE3NTc5MzU4NTF9.Dwlkr-81lVYUulELmDyQVBNt7aFOIjgRYTMd56qk3S0');
  await expect(page.getByTestId('home-chat-button-id')).toBeVisible();

});

test('Clicking chat button opens chat box', async ({ page }) => {
  await page.goto(FRONTEND_URL + '?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjbWNqOHg2bHkwMDAwbWI5MHRxMjE5dnpmIiwiaWF0IjoxNzU3ODQ5NDUxLCJleHAiOjE3NTc5MzU4NTF9.Dwlkr-81lVYUulELmDyQVBNt7aFOIjgRYTMd56qk3S0');
  const chatButton = page.getByTestId('home-chat-button-id');
  await chatButton.click();
  const chatBox =page.getByTestId('home-chat-box-id');
  await expect(chatBox).toBeVisible();
});
