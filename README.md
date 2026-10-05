# Learning Playwright Fundamental 3x Batch

A hands-on learning project for **Playwright** with **TypeScript**. It contains the practice
tests written during the *Playwright Fundamentals* batch — from launching a browser and
writing your first test, through locator strategies, frames, web tables, drag & drop,
JavaScript alerts, and SVG handling, to session storage and Allure reporting.

Each module folder is numbered (`01_…` → `12_…`) and each file is prefixed with a lesson
number (`216_…` → `257_…`) so the suite reads in the order the topics were taught.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [What the Tests Cover](#what-the-tests-cover)
- [Running Tests](#running-tests)
- [Codegen (Test Generator)](#codegen-test-generator)
- [Debugging Tests](#debugging-tests)
- [Allure Reporting](#allure-reporting)
- [Session Storage & Credentials](#session-storage--credentials)
- [Configuration](#configuration)
- [Author](#author)
- [License](#license)

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS, v18 or higher) with npm
- Java (JRE 8+) — only needed to open **Allure** reports

Verify:

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
│   ├── 01_Basics/                            # First tests, contexts, test options
│   ├── 02_TestAnnotations/                   # test / describe / annotations
│   ├── 03_Locator_Commands/                  # CSS, XPath, getByRole locators
│   ├── 04_Session_Storage/                   # Reusing an authenticated session
│   ├── 05_Allure_Reporting/                  # Steps, attachments, custom reporter
│   ├── 06_Multiple _Element_Filter/          # Handling many matching elements
│   ├── 07_WebTables/                         # Web tables & pagination
│   ├── 08_Web_Select_Frames_Iframe/          # Native & custom dropdowns
│   ├── 09_Frame_Iframe/                      # Iframes and nested frames
│   ├── 10_Keyboard_Hover_Drag_Drop_Calender/ # Keyboard, hover, drag & drop, context menu
│   ├── 11_JS_Alerts/                         # alert / confirm / prompt dialogs
│   └── 12_Handle_SVG/                        # Locating and interacting with SVG
├── Template/
│   └── Template.spec.ts                      # Starter template for a new test
├── Utils/
│   └── CustomReporter.ts                     # Custom Playwright reporter (reference)
├── playwright.config.ts                      # Playwright configuration
├── package.json
└── README.md
```

## What the Tests Cover

### 01_Basics

| File | What it demonstrates |
| ---- | -------------------- |
| `216_example.spec.ts` | First test — `page.goto` and `expect(page).toHaveTitle(/Playwright/)` on `playwright.dev` |
| `216_Examplee.spec.ts` | Two tests asserting the exact Playwright home-page title |
| `217_multiple_context.ts` | **Script** — launches Chromium and opens two browser contexts (admin/viewer) at `app.vwo.com/login` |
| `218_Normal_PW.ts` | **Script** — browser → context → page lifecycle and `page.title()` on `example.com` |
| `219_tta.spec.ts` | Fills a login form using `getByRole('textbox')` + `getByTestId('login-button')`, including `press('CapsLock')` |
| `220_BCP.Spec.ts` | **Script** — Browser / Context / Page levels and reverse-order cleanup |
| `221_TA.spec.ts` | Opens three contexts (admin, user, guest) navigating to different sites |
| `222_Test_Options.spec.ts` | `browser.newContext()` options — viewport, locale, timezone, geolocation, permissions, and mobile emulation |

### 02_TestAnnotations

| File | What it demonstrates |
| ---- | -------------------- |
| `223_TestAnnotations.Spec.ts` | `test.skip`, `test.only`, `test.fail`, `test.fixme`, `test.slow()`, and conditional `test.fixme(browserName === …)` |
| `224_TestDescribe.spec.ts` | Grouping tests with `test.describe` and annotations inside a suite |

### 03_Locator_Commands

| File | What it demonstrates |
| ---- | -------------------- |
| `225_LC.spec.ts` | Navigation options — `waitUntil: 'commit' / 'domcontentloaded'`, `timeout`, `referer` |
| `226_Refere.spec.ts` | Setting a `Referer` header for the whole context via `extraHTTPHeaders` |
| `227_Fresh.spec_defalt locator SEE.ts` | Default CSS locators (`#id`, `[name=…]`) and an inline error-message assertion on `app.vwo.com` |
| `228_Project3.spec.ts` | XPath locators on the Wingify free-trial page and asserting the invalid-email message |
| `229_getByRole.spec.ts` | `getByRole('textbox', { name, exact })` on the Wingify login |
| `230_getByRole.spec.ts` | `getByRole('link', …)` to click "Make Appointment" on the CURA demo site |

### 04_Session_Storage

| File | What it demonstrates |
| ---- | -------------------- |
| `231_Session_Storage.ts` | **Helper script** (not a test) — logs into Wingify using `VWO_USER`/`VWO_PASS` from `.env` and saves `storageState` to `user-session.json` |
| `232_TestWingify.spec.ts` | Reuses the saved session with `test.use({ storageState })` and lands directly on the dashboard (no login) |

### 05_Allure_Reporting

| File | What it demonstrates |
| ---- | -------------------- |
| `232_TestWingify.spec.ts` | Dashboard tests reusing `storageState` |
| `233_Custom_Report_TestWingify.spec.ts` | Same dashboard checks, intended for the custom reporter |
| `234_Media_Custom_Report.spec.ts` | `test.step(...)`, `testInfo.attach(...)`, and per-test `screenshot`/`video`/`trace` set to `'on'` — run with `--reporter=./Utils/CustomReporter.ts` |

### 06_Multiple _Element_Filter

| File | What it demonstrates |
| ---- | -------------------- |
| `235_ME.spec.ts` | `allInnerTexts()`, looping over multiple `a.list-group-item`, and clicking by matching text |
| `236_ME.spec.ts` | `locator().all()` and reading each element's `href` attribute |

### 07_WebTables

| File | What it demonstrates |
| ---- | -------------------- |
| `236_WebTable.spec.ts` | Starter page for the web-table lesson |
| `237_TestCase.spec.ts` | Reads a table on `awesomeqa.com/webtable1.html` row by row with `locator('tbody tr')` and `allInnerTexts()` |
| `238_TestCase.spec.ts` | Dynamic XPath table traversal (`tr[i]/td[j]`) and `following-sibling::td` to find a person's country |
| `239_TestCase.spec.ts` | `locator().filter({ hasText })` and `toHaveAttribute` for a footer link |
| `240_TestCase.spec.ts` | Row-targeted checkbox using `tr:has(td:text('…'))` |
| `241_WebTable_Pagination.spec.ts` | Paginates with `getByTestId('next-page')` until the target row is found, then reads `td[data-col]` cells |
| `242_WebTable_Pagination.spec.ts` | Same pagination logic refactored into a reusable `findRowByName(page, name)` helper |

### 08_Web_Select_Frames_Iframe

| File | What it demonstrates |
| ---- | -------------------- |
| `243_Select_TestCase.spec.ts` | Native `<select>` with `page.selectOption('#dropdown', 'Option 2')` |
| `244_CustomDropDown_TestCase.spec.ts` | Custom dropdowns via `getByTestId('...-trigger')` + `getByRole('option', …)` |
| `245_AdvanceCustomDropDown_TestCase.spec.ts` | Single / multi / creatable / async select boxes, chips, and dismissing with `keyboard.press('Escape')` |

### 09_Frame_Iframe

| File | What it demonstrates |
| ---- | -------------------- |
| `246_Iframe_TestCase.spec.ts` | `frameLocator('#frame-one')` — fills and submits a vehicle-registration form |
| `247_Framework_TestCase.spec.ts` | Enumerating `//frame` elements (name/src) and acting inside a named frame |
| `248_Nested_Iframe_TestCase.spec.ts` | Three-level nested frames (`#pact1 → #pact2 → #pact3`) |

### 10_Keyboard_Hover_Drag_Drop_Calender

| File | What it demonstrates |
| ---- | -------------------- |
| `249_TestCase.spec.ts` | `keyboard.press` (`A`, `ArrowLeft`, `Shift+O`), `keyboard.up/down`, and screenshots per key on `keycode.info` |
| `250_Hover-TestCase.spec.ts` | `locator.dragTo(target, { force: true })` on the Testing Academy DnD widget |
| `251_Drag_Drop.spec.ts` | Plain `dragTo()` on `the-internet.herokuapp.com/drag_and_drop` |
| `252_Advance_Drag_Drop.spec.ts` | Manual drag using `boundingBox()` + `mouse.move/down/up` (Kanban board) |
| `253_Context_Drag_Drop.spec.ts` | Right-click (`button: 'right'`) context menu and selecting an option |

### 11_JS_Alerts

| File | What it demonstrates |
| ---- | -------------------- |
| `254_JS_Alerts.spec.ts` | `page.once('dialog', …)` handling for **alert**, **confirm**, and **prompt** using `dialog.accept()` / `dialog.dismiss()` |

### 12_Handle_SVG

| File | What it demonstrates |
| ---- | -------------------- |
| `255_SVG_Practice.spec.ts` | SVG shapes by `#id`, bars via `getByRole('button', …)`, star rating via `getByRole('radio', …)`, and iterating `.bar` attributes |
| `256_SVG_Project.spec.ts` | Clicking an SVG search icon on Flipkart and reading product titles |
| `257_Advance_SVG_Project.spec.ts` | XPath with `name()` for namespaced SVG nodes on the SimpleMaps India map |

> **Note:** Files named `.ts` without `.spec.ts` (`217_multiple_context.ts`, `218_Normal_PW.ts`,
> `220_BCP.Spec.ts`, `231_Session_Storage.ts`) are standalone scripts run with a TS runner, not
> collected by the Playwright test runner.

## Running Tests

Run everything:

```bash
npx playwright test
```

Run one module or one file:

```bash
npx playwright test tests/07_WebTables
npx playwright test tests/03_Locator_Commands/230_getByRole.spec.ts
```

Filter by title, run headed, or pick a project:

```bash
npx playwright test -g "Login Page"
npx playwright test --headed
npx playwright test --project=chromium
npx playwright test --ui
```

> `headless` is set to `false` in `playwright.config.ts`, so the browser is visible by default
> during local runs.

## Codegen (Test Generator)

Record actions in a real browser and generate test code automatically:

```bash
npx playwright codegen
npx playwright codegen https://app.thetestingacademy.com/playwright/multiple_element_filter
npx playwright codegen --device="iPhone 13"
```

## Debugging Tests

Step through a test with the Playwright Inspector:

```bash
npx playwright test --debug
```

Or pause at a specific line with `await page.pause();`.

## Allure Reporting

`playwright.config.ts` uses the **Allure** reporter:

```ts
reporter: [["line"], ["allure-playwright"]],
```

Each run writes to `allure-results/`. Generate and open the HTML report:

```bash
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

## Session Storage & Credentials

The `04_Session_Storage` module logs into Wingify once and saves the authenticated session to
`user-session.json` via `context.storageState()`. Later specs reuse it with
`test.use({ storageState: './user-session.json' })` to skip the login step.

`user-session.json` and `.env` are **gitignored** and must never be committed — they contain
session cookies and credentials. Create your own `.env`:

```env
VWO_USER=your-username
VWO_PASS=your-password
```

Then generate the session file:

```bash
npx tsx tests/04_Session_Storage/231_Session_Storage.ts
```

> The session file is created per environment/user, so specs that depend on it (modules 04 and
> 05) only pass after `231_Session_Storage.ts` has been run with your own credentials.

## Configuration

Key settings in `playwright.config.ts`:

| Option          | Value                                            |
| --------------- | ------------------------------------------------ |
| `testDir`       | `./tests`                                        |
| `fullyParallel` | `true`                                           |
| `reporter`      | `line` + `allure-playwright`                     |
| `retries`       | `2` on CI, `0` locally                           |
| `workers`       | `1` on CI, default locally                       |
| `use.headless`  | `false` (browser visible locally)                |
| `use.trace`     | `on-first-retry`                                 |
| `projects`      | `chromium` (Desktop Chrome)                      |

## Author

**Rahul Kumar**

## License

This project is licensed under the MIT License.
