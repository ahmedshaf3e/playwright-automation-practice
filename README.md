# Playwright Automation Practice | Hybrid Test Automation Framework  
### *Built with Playwright, TypeScript, Test Runner, Allure Reports & Page Object Model (POM)*

---

## Overview

This is an **End-to-End Hybrid Test Automation Framework** designed for comprehensive testing across **UI** and **API** layers of a web application using **Playwright**.  
The framework is built with **TypeScript**, leveraging **Playwright Test Runner**, and follows **Page Object Model (POM)** principles. It emphasizes **scalability**, **maintainability**, and **CI/CD readiness**.

The framework includes:
- Modular test structure
- Data-driven execution
- Rich HTML & Allure reporting
- Cross-browser testing
- Tracing, video, and screenshot support
- CI/CD integration

---

## Key Features

- **End-to-End UI & API Automation** with Playwright
- **Page Object Model (POM)** design pattern
- **Cross-browser support** (Chromium, Firefox, WebKit)
- **Headless & Headed execution** modes
- **Parallel Execution** with Playwright Test Runner
- **Data-driven testing** using JSON
- **Screenshots, Videos & Traces** for debugging
- **Allure Reports & Playwright HTML Reports**
- **CI/CD Integration Ready** (GitHub Actions, Jenkins, Azure DevOps)

---

## Tech Stack

| Technology     | Purpose                         |
|----------------|---------------------------------|
| Playwright     | UI automation                   |
| TypeScript     | Scripting language              |
| Playwright API | API testing                     |
| Allure Reports | Rich HTML reporting             |
| Node.js / NPM  | Dependency management           |
| VS Code        | Recommended IDE                 |

---

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/aeshamangukiya/playwright-automation-practice
cd playwright-automation-practice
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Tests
- Run all tests:
  ```bash
  npx playwright test
  ```

- Run with headed browser:
  ```bash
  npx playwright test --headed
  ```

- Run specific file:
  ```bash
  npx playwright test tests/auth/login.spec.ts
  ```

- Run with UI Mode:
  ```bash
  npx playwright test --ui
  ```

### 4. Generate Reports
- View Playwright HTML report:
  ```bash
  npx playwright show-report
  ```

- Allure Report (if configured):
  ```bash
  allure generate allure-results --clean -o allure-report
  allure open allure-report
  ```

---

## Project Structure
<details> <summary>Click to expand</summary>

```text
📁 playwright-automation-practice/
├── 📄 playwright.config.ts        # Global configuration (baseURL, retries, etc.)
├── 📄 package.json                # NPM dependencies & scripts
├── 📄 tsconfig.json               # TypeScript configuration

📁 tests/                          # Test specs
│   ├── 📁 auth/
│   │   └── login.spec.ts          # Login tests
│   ├── 📁 dashboard/
│   │   └── dashboard.spec.ts      # Dashboard tests
│   └── other-feature.spec.ts

📁 pages/                          # Page Object Model (POM) classes
│   └── LoginPage.ts
│   └── DashboardPage.ts

📁 fixtures/                       # Test data, custom fixtures
│   └── testData.json

📁 utils/                          # Helper utilities
│   └── helpers.ts

📁 reports/                        # Auto-generated HTML & Allure reports
```
</details>

---

## Sample Test Case

**tests/auth/login.spec.ts**
```ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import testData from '../../fixtures/testData.json';

test('Verify user can login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigateTo('/');
  await loginPage.login(testData.validUser.username, testData.validUser.password);

  await expect(page).toHaveURL(/.*dashboard/);
});
```

---

## Naming Conventions

| Component        | Convention | Example                         |
| ---------------- | ---------- | ------------------------------- |
| Packages/Folders | kebab-case | `tests/auth`, `utils/helpers`   |
| Classes          | PascalCase | `LoginPage.ts`, `DashboardPage.ts` |
| Methods/Vars     | camelCase  | `navigateTo()`, `isUserLoggedIn` |

---

## Parallel Execution
- Playwright runs tests in **parallel by default**.
- Configure workers in `playwright.config.ts`:
```ts
workers: 4,
```

---

## Reporting & Logging
- **Playwright HTML Report:** Generated automatically after execution in `/playwright-report/`.
- **Allure Report:** Generated if configured via `allure-playwright`.
- **Screenshots, Videos & Traces:** Stored automatically under `test-results/`.

---

## Retry & Flaky Test Handling
- Configure retries in `playwright.config.ts`:
```ts
retries: 2,
```
- Mark a test as flaky using annotations:
```ts
test('my test', async ({ page }) => { ... }).flaky();
```

---

## CI/CD Integration
- Works seamlessly with **GitHub Actions**, **Jenkins**, **GitLab CI**, **Azure DevOps**.
- Example GitHub Action workflow (`.github/workflows/playwright.yml`):
```yaml
name: Playwright Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npx playwright install --with-deps
      - run: npx playwright test
```

---

## Contact & Credits
- Maintained by: **Aesha Mangukiya**  
- Email: **aeshamangukiya1@gmail.com**  
- GitHub: [aeshamangukiya](https://github.com/aeshamangukiya)

---
