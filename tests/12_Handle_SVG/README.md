# Module 12: Handle SVG

This module shows how to locate and interact with **SVG** elements in Playwright tests. It
covers SVG roots, child shapes, chart bars, map paths, SVG text labels, attribute reads,
clicks, and assertions after SVG interactions.

## Key Files

- `255_SVG_Practice.spec.ts` — uses the Testing Academy SVG widget page to click a circle,
  assert the output text, select a chart bar by accessible name, choose a star rating, and
  iterate every SVG bar by its `data-quarter` attribute.
- `256_SVG_Project.spec.ts` — uses Flipkart search, clicks an SVG search icon, waits for
  product results, and prints the matching product titles.
- `257_Advance_SVG_Project.spec.ts` — uses the SimpleMaps India SVG to read the state labels
  and click the Uttar Pradesh path.

## SVG Locator Patterns

SVG nodes work with the same CSS selectors as HTML:

```ts
page.locator('svg');
page.locator('#circle-blue');
page.locator('.bar');
```

XPath selectors need `name()` because SVG tag names are namespaced (e.g. `svg:path`):

```ts
page.locator("//*[name()='svg']//*[name()='text']");
page.locator("//*[name()='path' and contains(@class,'INUP')]");
```

Useful SVG actions and checks:

```ts
await page.locator('#circle-blue').click();
await page.locator('.bar').first().getAttribute('data-quarter');
await expect(page.locator('#shapes-output')).toContainText('Blue circle');
await page.getByRole('radio', { name: '4 stars' }).click();
```

## Run This Module

Run all SVG specs:

```bash
npx playwright test tests/12_Handle_SVG
```

Run one lesson:

```bash
npx playwright test tests/12_Handle_SVG/255_SVG_Practice.spec.ts
```

Use headed mode when learning or debugging SVG clicks:

```bash
npx playwright test tests/12_Handle_SVG --headed
```
