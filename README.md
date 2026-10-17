# Learning Playwright Fundamental 3x Batch

A hands-on learning project for **Playwright** with **TypeScript**. It contains the practice
tests written during the *Playwright Fundamentals* batch — from launching a browser and
writing your first test, through locator strategies, frames, web tables, drag & drop,
JavaScript alerts, SVG handling, Shadow DOM, file upload/download, scrolling, `expect`
assertions and test hooks, to session storage, Allure reporting and data-driven testing
(CSV, JSON, Excel, YAML, MySQL and Faker), ending with the Page Object Model.

Each module folder is numbered (`01_…` → `20_…`) and each file is prefixed with a lesson
number (`216_…` → `294_…`) so the suite reads in the order the topics were taught.

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
│   ├── 12_Handle_SVG/                        # Locating and interacting with SVG
│   ├── 13_Shadow_DOM/                        # Piercing shadow roots
│   ├── 14_FileUpload/                        # Single, multiple & mixed file uploads
│   ├── 15_File_Download/                     # Capturing downloads
│   ├── 16_Scroll_toElement/                  # Scrolling & lazy-loaded lists
│   ├── 17_Expect_Assertions/                 # expect assertions + cheatsheet
│   ├── 18_Test_hooks/                        # Annotations, hooks, steps & cheat docs
│   ├── 19_Data_Driven_Testing/               # DDT from CSV, JSON, Excel, YAML, MySQL, Faker
│   └── 20_Page_Object_Model/                 # Page objects for the TTACart login/cart flow
├── Template/
│   └── Template.spec.ts                      # Starter template for a new test
├── Utils/
│   └── CustomReporter.ts                     # Custom Playwright reporter (reference)
├── playwright.config.ts                      # Playwright configuration
├── package.json
└── README.md
```

> Modules `21_…` through `23_Advance_PW_Framework` exist as **empty placeholder folders** — no
> tests have been added to them yet, so Git does not track them.

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
| `255_SVG_TestCase.spec.ts` | Flipkart search — fills `input[name="q"]`, clicks the first `svg`, then reads product titles via an XPath predicate on the `data-id` prefixes (`CPU`/`ACC`/`COM`/`MP`) |
| `256_SVG_Advance_TC.spec.ts` | `app.thetestingacademy.com/…/svg` widget — clicks `#circle-blue` and asserts `#shapes-output` text, `getByRole('button', { name: /Q3 bar/ })`, `getByRole('radio', { name: '4 stars' })`, then iterates `.bar` elements reading `data-quarter`/`height` |
| `257_SVG_Map_TC_optimizes.ts` | **Script** — iterates `path` elements on the SimpleMaps India map and clicks any whose `class` ends with `UP` |
| `258_SVG_Map_TC_optimized.spec.ts` | Same SimpleMaps India map logic as `257`, but kept as a collected `.spec.ts` |

### 13_Shadow_DOM

| File | What it demonstrates |
| ---- | -------------------- |
| `259_shadow_DOM_TC.spec.ts` | Piercing shadow roots with `getByTestId` on the Testing Academy shadow-DOM widget — fills + submits an account card and asserts the status shows the email, increments a counter widget (expects `5`), and fills a **nested** shadow host (`nested-host`, `card-inside-*`) |

### 14_FileUpload

| File | What it demonstrates |
| ---- | -------------------- |
| `260_FileUpload_TC.spec.ts` | Uploads `testdata.txt` to `the-internet.herokuapp.com/upload` with `setInputFiles` and asserts `#uploaded-files` contains the name |
| `261_FileUpload_TC.spec.ts` | Sets a single file on `#single-upload` of the Testing Academy upload/download widget |
| `262_Multiple_FileUpload_TC_Spec.ts` | Uploads two **in-memory** files (explicit `name`/`mimeType` + `Buffer.from`) to the PatternFly multiple-file-upload |
| `263_Multiple_FileUpload_Disk_TC.spec.ts` | Uploads `file1.jpg` + `file2.jpg` **from disk** and asserts the dropzone lists both names |
| `264_Mixed_FileUpload_TC.spec.ts` | Uploads a PDF, JPG and DOC together (mixed MIME types inferred from the extension) |
| `265_FileUpload_OtherDir_TC.spec.ts` | Same mixed upload, but sourced from a shared directory outside the module (walks up with `..`) |

> Files `testdata.txt`, `file1.jpg` and `file2.jpg` live next to these specs. `264` and `265`
> reference `sample.pdf`, `sample.jpg` and `sample.doc` from a repo-root `test-data/uploads/`
> folder, which is **not** part of this repo — create it with those fixtures before running them.

### 15_File_Download

| File | What it demonstrates |
| ---- | -------------------- |
| `266_FileDownload_TC.spec.ts` | `Promise.all([page.waitForEvent('download'), click])` on `download-static`, then `download.saveAs('./out/' + suggestedFilename)` |

### 16_Scroll_toElement

| File | What it demonstrates |
| ---- | -------------------- |
| `267_Scroll_TC.spec.ts` | Scroll strategies — `locator.scrollIntoViewIfNeeded()`, `window.scrollBy(0, 1000)`, and `window.scrollTo` to bottom then back to top |
| `268_Lazy_Scroll_TC.spec.ts` | Lazy-loaded list — waits for the initial 10 items, scrolls the loader into view, and uses `expect.poll` to wait until the count grows |
| `269_Abort_Signal_Scroll_TC.spec.ts` | Same lazy-scroll flow, plus an `AbortController` / `signal` demo that cancels `scrollIntoViewIfNeeded` (the assertion rejects with `aborted`) |

### 17_Expect_Assertions

| File | What it demonstrates |
| ---- | -------------------- |
| `270_Expect1.spec.ts` | Value assertions — `toBe`, `toBeFalsy`/`toBeTruthy`, `toBeNull`, `toBeGreaterThan`, and `toEqual` deep equality (order-independent) |
| `271_Expect2.spec.ts` | Locator assertions — `toBeVisible`, `toContainText`, `toHaveAttribute`, `toHaveCount` (16 footer links) |
| `272_Expect3.spec.ts` | Soft assertions (`expect.soft`) that keep the test running, followed by hard assertions, plus negation (`.not.toBeVisible`, `not.toContain`) |
| `273_Expect4.spec.ts` | State assertions — `check()` + `toBeChecked`, `toBeVisible`, `toBeEnabled`, `toHaveTitle`, and a raw `expect(page.url())` check |
| `Expect_CheatSheet.md` | Reference cheatsheet of the common Playwright `expect` assertions, modifiers and interview Q&A |

### 18_Test_hooks

| File | What it demonstrates |
| ---- | -------------------- |
| `274_Test.spec.ts` | Annotations — conditional `test.skip(browserName)`, `test.slow`, `test.fixme`, and `test.fail` |
| `275_TestHook.spec.md` | `test` API cheatsheet — test functions/modifiers, `describe` variants, hooks & their order, fixtures, `test.info()` and `test.step()` |
| `276_Test.spec.ts` | Wraps a login flow in `test.step(...)` blocks — open page, assert fields visible, submit and assert the URL ends at `#login-success` |
| `277_Tk.spec.ts` | Empty placeholder file |
| `278.td.spec.ts` | `test.describe.serial(...)` ordering versus standalone tests that still run in parallel |
| `279.ts.spec.ts` | Tagged tests (`@p1 @smoke`) plus `test.describe.configure({ mode: 'serial' })` — run with `--grep @p1` |
| `Chromium_aRg_List.md` | Reference doc — the Chrome/Chromium command-line arguments that matter in Playwright automation |

### 19_Data_Driven_Testing

The same seven login rows are served from **six different sources** — CSV, JSON, Excel, YAML,
MySQL and Faker — so only the *reader* changes, never the test flow.

| File | What it demonstrates |
| ---- | -------------------- |
| `279_DDT.spec.ts` | Imports a JSON object (`280_User.json`) and logs its fields |
| `280_User.json` | Single-user JSON fixture |
| `281_TestData.json` | Nested JSON fixture (arrays + objects) |
| `282_Login_DDT.spec.js` | Login driven by `test-data/login.json` (`validUser` / `invalidUser`) |
| `283_Read_Write_FS.ts` | **Script** — `fs.readFileSync` + `JSON.parse`, then `writeFileSync` to `output.json` |
| `284_DDT_JSON_ARRAY.spec.ts` | In-file array of five login cases, each carrying `shouldPass` |
| `285_DDT_CSV.spec.ts` | DDT from CSV via `util/csvReader.ts` |
| `286_JSON_DDT.spec.ts` | DDT from `test-data/registration-data.json` |
| `287_DDT_MySQL.spec.ts` | DDT from MySQL via `util/dbReader.ts` — **skipped** unless `MYSQL_HOST` is set |
| `288_DDT_Excel.spec.ts` | DDT from `test-data/login-data.xlsx` via `util/excelReader.ts` |
| `289_DDT_YAML.spec.ts` | DDT from `test-data/login-data.yaml` via `util/yamlReader.ts` |
| `290_DDT_Faker.spec.ts` | DDT on data generated by `@faker-js/faker` |
| `util/` | The readers — `csvReader`, `dbReader`, `excelReader`, `yamlReader`, plus `generateExcel.js` |
| `test-data/` | The shared dataset as `login-data.csv` / `.xlsx` / `.yaml` / `login.json`, plus `seed.sql` |

Two shapes, decided by the reader:

- **Synchronous** readers (CSV, JSON, YAML) run at test-collection time, so each row becomes its
  own `test()`.
- **Asynchronous** readers (Excel, MySQL) load in `beforeAll`, so one test drives every row with a
  `test.step` per row.

The practice page's login is a stub — it validates nothing and renders no error text — so the
`shouldPass` / `expectedError` assertions stay commented out, exactly as in `286`.

The readers pull in `exceljs`, `js-yaml` and `mysql2` (all `devDependencies`), and `290` uses
`@faker-js/faker`. To exercise the MySQL suite, seed the database and point `.env` at it:

```bash
mysql -u root -p < tests/19-Data_Driven_Testing/test-data/seed.sql
```

```env
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=your-password
MYSQL_DATABASE=playwright_ddt
```

To regenerate the Excel workbook from the shared dataset:

```bash
node tests/19-Data_Driven_Testing/util/generateExcel.js
```

> **Note:** Only files ending in a lowercase `.spec.ts` are collected by the runner. Standalone
> scripts and differently-cased files — `217_multiple_context.ts`, `218_Normal_PW.ts`,
> `220_BCP.Spec.ts`, `231_Session_Storage.ts`, and `257_SVG_Map_TC_optimizes.ts` — are run
> directly with a TS runner and are **not** picked up by `npx playwright test`.

### 20_Page_Object_Model

The **Page Object Model** against the TTACart practice app
(`app.thetestingacademy.com/playwright/ttacart/`). `291` shows the raw flow, `292`/`293`
refactor it behind page objects, and `294` measures why a page object can be as large as a
screen without costing anything.

| File | What it demonstrates |
| ---- | -------------------- |
| `291_No_POM.spec.ts` | The login flow written **without** POM — locators and actions inline in the test, as the baseline |
| `292_POM.spec.ts` | The same login refactored into `LoginPage` (`goto()` + `login(user, pass)`) |
| `293_POM.spec.ts` | Full POM journey — `LoginPage` → `InventoryPage` adds the first product → open the cart → `Cartpage` asserts the cart holds that product |
| `294_heavy_Page.spec.ts` | Why locators are cheap — builds a 100-locator `HeavyPage` and asserts construction is fast and methods live on the prototype |
| `Pages/Loginpage.ts` | `LoginPage` — Username/Password fields, `[data-test="login-button"]`, plus `goto()` and `login()` |
| `Pages/inventoryPage.ts` | `InventoryPage` — product name, `add-to-cart*` button and cart icon locators; `goto()` |
| `Pages/CartPage.ts` | `Cartpage` — cart title/name/price/checkout locators built through a `[data-test="…"]` helper |
| `Pages/HeavyPage.ts` | `HeavyPage` — a deliberately oversized page object (100 locators, 110+ methods) proving locators are lazy and methods are shared |

> TTACart tags elements with `data-test`, not Playwright's default `data-testid`, so the page
> objects select `[data-test="…"]` (or set `testIdAttribute: 'data-test'` in the config). The
> specs import the page objects as `./Pages/…`; on case-sensitive filesystems make the import
> path match the file name exactly (`Loginpage.ts`, `inventoryPage.ts`).

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

Filter by title, tag, run headed, or pick a project:

```bash
npx playwright test -g "Login Page"
npx playwright test --grep @p1
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

Or pause at a specific line with `await page.pause();` — several of the newer specs already
call it so you can inspect the page mid-run.

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
| `reporter`      | `line` + `allure-playwright`                      |
| `retries`       | `2` on CI, `0` locally                            |
| `workers`       | `1` on CI, default locally                        |
| `use.headless`  | `false` (browser visible locally)                 |
| `use.trace`     | `on-first-retry`                                  |
| `projects`      | `chromium` (Desktop Chrome)                       |

## Author

**Rahul Kumar**

## License

This project is licensed under the MIT License.
