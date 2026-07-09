# AI Agent Guidelines for Playwright Test Automation

## Project Overview
This is a **Playwright E2E test automation** project using CommonJS (despite the `/PlaywrightJsTsAPI` folder name). Tests target practice web applications at `rahulshettyacademy.com` and cover login flows, UI controls, calendar interactions, and e-commerce workflows.

## Quick Commands
```bash
# Run all tests
npx playwright test

# Run single test file
npx playwright test tests/UIBasicstest.spec.js

# Run in debug mode (with page.pause() support)
npx playwright test --debug

# View HTML report (auto-generated after test runs)
npx playwright show-report
```

## Project Structure
- **`tests/`** — 6 test suites (CommonJS `.spec.js` files)
- **`test-results/`** — Auto-saved test artifacts (screenshots, traces, logs) organized by test name
- **`playwright-report/`** — Auto-generated HTML report with full test results and screenshots
- **`playwright.config.js`** — Configuration with Chromium headless=false, full parallelization, 50s timeout, HTML reporter enabled

## Key Conventions

### Testing Patterns
- **No Page Object Model** — Tests use procedural style with inline selectors
- **Extensive Spanish comments** — Code is documented in Spanish; preserve this style
- **Built-in debug** — Tests contain `page.pause()` statements for interactive stepping through execution
- **Simple assertions** — Uses Playwright expect() with matchers like `toHaveTitle()`, `toBeChecked()`, `isVisible()`
- **Credentials in code** — Test credentials (e.g., `sirmiguel28@gmail.com`) are hardcoded; consider parameterization for security improvements

### Auto-Save & Artifact Preservation
1. **Test results auto-save** — After each test run, `/test-results/{testName}/` folders automatically capture:
   - Screenshots for each step (when screenshot='on' in config)
   - `trace.zip` for replay debugging
   - `.txt` logs for test execution details
   
2. **HTML report auto-save** — `/playwright-report/` is regenerated after every test run with:
   - Test summary (passed/failed/skipped counts)
   - Individual test details with embedded screenshots
   - Trace viewer for failed tests
   
3. **No manual intervention needed** — Playwright's configuration automatically handles all preservation; results are never lost between runs

## Development Workflow

### When adding/modifying tests:
1. Follow the existing procedural pattern (no class-based page objects)
2. Include Spanish comments for all major actions
3. Add assertions using `expect()` for validation
4. Leave `page.pause()` in problematic areas for debugging
5. Use selectors matching existing patterns (XPath, locator strings, nth-index selectors)

### When debugging failing tests:
1. Run `npx playwright test --debug` to step through with the browser visible
2. Check `/test-results/{testName}/` for screenshots and trace details
3. Run `npx playwright show-report` to view the HTML report with full context
4. Traces in the report can be replayed to inspect element state at any step

### Configuration Tuning
- **Timeout**: Currently 50s per test; increase in `playwright.config.js` if tests are timing out
- **Headless mode**: Set to `false` (browser visible) — useful for interactive debugging
- **Parallelization**: `fullyParallel: true` runs tests concurrently; disable if tests conflict on shared state

## VS Code Setup (Optional but Recommended)
Install the **Playwright Test for VS Code** extension (`ms-playwright.playwright`) for:
- Run tests directly from the editor
- Debug with breakpoints
- View results inline

Workspace settings in `.vscode/settings.json`:
```json
{
  "files.autoSave": "afterDelay",
  "files.autoSaveDelay": 1000,
  "[javascript]": { "editor.defaultFormatter": "esbenp.prettier-vscode" }
}
```

## Common Pitfalls & Solutions
| Issue | Solution |
|-------|----------|
| Test hangs on page interaction | Add `page.pause()` to inspect; check selector specificity |
| Selector fails intermittently | Add `page.waitForLoadState('networkidle')` before assertions |
| Screenshots missing from results | Ensure `screenshot: 'on'` in config; check `/test-results/` folder permissions |
| Old test results accumulate | Playwright auto-clears `/test-results/` on each run; HTML reports preserve full history in `/playwright-report/` |

## Test Scripts (Suggested Addition to package.json)
```json
{
  "scripts": {
    "test": "playwright test",
    "test:debug": "playwright test --debug",
    "test:single": "playwright test",
    "report": "playwright show-report"
  }
}
```

---

**Last Updated**: 2026-07-09  
**Focus Areas**: Playwright conventions, auto-save artifact preservation, CommonJS test patterns, and interactive debugging workflows.
