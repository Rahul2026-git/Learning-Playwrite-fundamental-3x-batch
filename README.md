# Learning Playwright Fundamental 3x Batch

A hands-on learning project for **Playwright** with TypeScript. This repository contains example and practice test specs that cover the fundamentals of browser automation and end-to-end testing with Playwright.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Setup](#project-setup)
- [Project Structure](#project-structure)
- [Running Tests](#running-tests)
- [Codegen (Test Generator)](#codegen-test-generator)
- [Debugging Tests](#debugging-tests)
- [Viewing Reports](#viewing-reports)
- [Configuration](#configuration)

## Prerequisites

Make sure the following are installed on your machine:

- [Node.js](https://nodejs.org/) (LTS version recommended, v18 or higher)
- npm (comes bundled with Node.js)

Verify your installation:

```bash
node -v
npm -v
```

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Rahul2026-git/Learning-Playwrite-fundamental-3x-batch.git
   cd Learning-Playwrite-fundamental-3x-batch
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Install the Playwright browsers**

   Playwright needs its own browser binaries (Chromium, Firefox, WebKit). Install them with:

   ```bash
   npx playwright install
   ```

   If you are on Linux and need the OS-level dependencies as well:

   ```bash
   npx playwright install --with-deps
   ```

## Project Setup

Initialize a Playwright project from scratch (already done in this repo):

```bash
npm init playwright@latest
```

During setup you will be prompted for:

- **TypeScript or JavaScript** – choose TypeScript
- **Test folder name** – default is `tests`
- **Add a GitHub Actions workflow** – optional
- **Install Playwright browsers** – yes

If you prefer to set it up manually, install the packages and create a config:

```bash
npm install -D @playwright/test
npx playwright install
```

Then create a `playwright.config.ts` at the root:

```ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
    headless: false,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
```

## Project Structure

```
Learning-Playwrite-fundamental-3x-batch/
├── tests/
│   ├── example.spec.ts      # Basic example test
│   └── tta.spec.ts          # Practice login test
├── playwright.config.ts     # Playwright configuration
├── package.json
├── img.png
└── README.md
```

## Running Tests

Run all tests in headless mode:

```bash
npx playwright test
```

Run a single test file:

```bash
npx playwright test tests/tta.spec.ts
```

Run tests in headed mode (browser visible):

```bash
npx playwright test --headed
```

Run tests in a specific browser:

```bash
npx playwright test --project=chromium
```

Run tests with the interactive UI mode (great for learning/debugging):

```bash
npx playwright test --ui
```

## Codegen (Test Generator)

Playwright **Codegen** records your actions in a real browser and generates the corresponding test code automatically.

**1. Generate a test by recording actions:**

```bash
npx playwright codegen
```

**2. Start codegen with a specific URL:**

```bash
npx playwright codegen https://app.thetestingacademy.com/playwright/multiple_element_filter
```

**3. Save the generated code directly to a file:**

```bash
npx playwright codegen --target=typescript https://playwright.dev/
```

**4. Generate code for a specific browser:**

```bash
npx playwright codegen --browser=firefox
```

**5. Emulate a device (e.g. mobile):**

```bash
npx playwright codegen --device="iPhone 13"
```

**6. Generate locators for an existing test file (Pick locator):**

```bash
npx playwright codegen --test-id-attribute=data-testid
```

While the codegen window is open, perform actions in the browser — clicks, typing, assertions — and Playwright writes the equivalent test code into the Playwright Inspector window on the right. Copy that code into a `.spec.ts` file under `tests/` and run it.

## Debugging Tests

Run tests with the Playwright Inspector to step through each action:

```bash
npx playwright test --debug
```

Pause the test at a specific point in code with `await page.pause();`, then run in debug mode.

## Viewing Reports

After a test run, open the HTML report:

```bash
npx playwright show-report
```

## Configuration

Key settings live in `playwright.config.ts`:

| Option           | Description                                          |
| ---------------- | ---------------------------------------------------- |
| `testDir`        | Folder where test files are located (`./tests`)      |
| `fullyParallel`  | Run tests in files in parallel                       |
| `reporter`       | Test reporter (e.g. `html`, `list`, `json`)           |
| `retries`        | Number of times to retry failed tests                |
| `workers`        | Number of parallel workers                           |
| `use.headless`   | Whether to run the browser in headless mode          |
| `use.baseURL`    | Base URL for `page.goto('/path')`                    |
| `use.trace`      | When to collect traces (`on-first-retry`, `on`, etc.)|
| `projects`       | Browser/device configurations to run tests against   |

## License

This project is licensed under the MIT License.
