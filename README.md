# Learning Playwright Fundamental 3x Batch

A hands-on learning project for **Playwright** with **TypeScript**. This repository contains
example and practice test specs that cover the fundamentals of browser automation and
end-to-end testing — from writing your first test to locators, frames, web tables, drag &
drop, JavaScript alerts, session storage, and Allure reporting.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Topics Covered](#topics-covered)
- [Running Tests](#running-tests)
- [Codegen (Test Generator)](#codegen-test-generator)
- [Debugging Tests](#debugging-tests)
- [Allure Reporting](#allure-reporting)
- [Session Storage & Credentials](#session-storage--credentials)
- [Configuration](#configuration)
- [Author](#author)
- [License](#license)

## Prerequisites

Make sure the following are installed on your machine:

- [Node.js](https://nodejs.org/) (LTS version recommended, v18 or higher)
- npm (comes bundled with Node.js)
- Java (JRE 8+) — only required to view **Allure** reports

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

   ```bash
   npx playwright install
   ```

   On Linux, to also install the OS-level dependencies:

   ```bash
   npx playwright install --with-deps
   ```

## Project Structure

```
Learning-Playwrite-fundamental-3x-batch/
├── tests/
│   ├── 01_Basics/                          # First tests, contexts, test options
│   ├── 02_TestAnnotations/                 # test / describe / annotations
│   ├── 03_Locator_Commands/                # CSS, getByRole, locator strategies
│   ├── 04_Session_Storage/                 # Reusing an authenticated session
│   ├── 05_Allure_Reporting/                # Allure + custom reporting
│   ├── 06_Multiple _Element_Filter/        # Filtering multiple matching elements
│   ├── 07_WebTables/                       # Web table reading & pagination
│   ├── 08_Web_Select_Frames_Iframe/        # Select dropdowns & custom dropdowns
│   ├── 09_Frame_Iframe/                    # Iframes and nested frames
│   ├── 10_Keyboard_Hover_Drag_Drop_Calender/ # Hover, keyboard, drag & drop, calendar
│   ├── 11_JS_Alerts/                       # JavaScript alerts / dialogs
│   └── 12_Handle_SVG/                      # Locating and interacting with SVG
├── Template/
│   └── Template.spec.ts                    # Starter template for a new test
├── Utils/
│   └── CustomReporter.ts                   # Custom Playwright reporter (reference)
├── playwright.config.ts                    # Playwright configuration
├── package.json
└── README.md
```

Each test file is prefixed with a number (e.g. `222_Test_Options.spec.ts`) so the specs run
roughly in the order the topics are taught.

## Topics Covered

| Folder | What you learn |
| ------ | -------------- |
| `01_Basics` | Writing your first tests, browser contexts, viewport/locale/geolocation options |
| `02_TestAnnotations` | `test()`, `test.describe()`, `skip`, `only`, `fixme`, tags |
| `03_Locator_Commands` | CSS/XPath locators, `getByRole`, chaining and filtering locators |
| `04_Session_Storage` | Logging in once and reusing `storageState` across tests |
| `05_Allure_Reporting` | Adding steps/attachments and generating Allure reports |
| `06_Multiple _Element_Filter` | Handling multiple elements that match one locator |
| `07_WebTables` | Extracting rows/columns and handling paginated tables |
| `08_Web_Select_Frames_Iframe` | Native `<select>` and custom dropdowns |
| `09_Frame_Iframe` | Switching into iframes and nested frames |
| `10_Keyboard_Hover_Drag_Drop_Calender` | Hover, keyboard input, drag & drop, date pickers |
| `11_JS_Alerts` | Handling `alert`, `confirm`, and `prompt` dialogs |
| `12_Handle_SVG` | Locating and interacting with SVG shapes, chart bars, and map paths |

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run a single test file:

```bash
npx playwright test tests/01_Basics/222_Test_Options.spec.ts
```

Run tests in headed mode (browser visible):

```bash
npx playwright test --headed
```

Run tests in a specific browser/project:

```bash
npx playwright test --project=chromium
```

Run tests with the interactive UI mode (great for learning and debugging):

```bash
npx playwright test --ui
```

> Note: `headless` is set to `false` in `playwright.config.ts`, so the browser is visible by
> default during local runs.

## Codegen (Test Generator)

Playwright **Codegen** records your actions in a real browser and generates the
corresponding test code automatically.

```bash
# Record actions against a site
npx playwright codegen

# Start against a specific URL
npx playwright codegen https://app.thetestingacademy.com/playwright/multiple_element_filter

# Emulate a device (e.g. mobile)
npx playwright codegen --device="iPhone 13"
```

While the codegen window is open, perform actions in the browser — clicks, typing,
assertions — and Playwright writes the equivalent test code into the Inspector window. Copy
that code into a `.spec.ts` file under `tests/` and run it.

## Debugging Tests

Run tests with the Playwright Inspector to step through each action:

```bash
npx playwright test --debug
```

You can also pause a test at a specific point by adding `await page.pause();` and running in
debug mode.

## Allure Reporting

The project is configured with the **Allure** reporter:

```ts
reporter: [["line"], ["allure-playwright"]],
```

After a test run, `allure-results/` is populated. Generate and open the HTML report:

```bash
# Generate the report
npx allure generate allure-results --clean -o allure-report

# Open it in the browser
npx allure open allure-report
```

You can also open the Playwright HTML report if configured with `npx playwright show-report`.

## Session Storage & Credentials

The `04_Session_Storage` topic logs into a demo site and saves the authenticated session to
`user-session.json` via `storageState`. That file (and `.env`) are **gitignored** and must
never be committed — they contain session cookies and credentials.

Create a `.env` file in the project root with your own credentials:

```env
VWO_USER=your-username
VWO_PASS=your-password
```

Then run the session setup:

```bash
npx tsx tests/04_Session_Storage/231_Session_Storage.ts
```

## Configuration

Key settings live in `playwright.config.ts`:

| Option          | Description                                            |
| --------------- | ------------------------------------------------------ |
| `testDir`       | Folder where test files are located (`./tests`)        |
| `fullyParallel` | Run tests in files in parallel                         |
| `reporter`      | Test reporters (`line` + `allure-playwright`)          |
| `retries`       | Number of times to retry failed tests (2 on CI)        |
| `workers`       | Number of parallel workers (1 on CI)                   |
| `use.headless`  | Whether to run the browser headless (currently `false`)|
| `use.trace`     | When to collect traces (`on-first-retry`)              |
| `projects`      | Browser/device configurations (Chromium)               |

## Author

**Rahul Kumar**

## License

This project is licensed under the MIT License.
