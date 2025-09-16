import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import testData from '../../fixtures/testData.json';

test.describe('OrangeHRM Login Tests', () => {
  test('Verify user can log in with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login(testData.validUser.username, testData.validUser.password);

    await expect(loginPage.dashboardHeader).toHaveText('Dashboard');
  });

  test('Verify login fails with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateTo('/');
    await loginPage.login(testData.invalidUser.username, testData.invalidUser.password);

    await expect(loginPage.errorMessage).toHaveText('Invalid credentials');
  });
});
