import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class DashboardPage extends BasePage {
  readonly profileMenu: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    super(page);
    this.profileMenu = page.locator('#profileMenu');
    this.logoutButton = page.locator('#logout');
  }

  async logout() {
    await this.profileMenu.click();
    await this.logoutButton.click();
  }
}
