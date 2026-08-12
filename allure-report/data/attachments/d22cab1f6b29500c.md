# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UIBasicstest1.spec.js >> @Web UI Controls
- Location: tests\UIBasicstest1.spec.js:40:1

# Error details

```
Test timeout of 50000ms exceeded.
```

```
Error: locator.click: Test timeout of 50000ms exceeded.
Call log:
  - waiting for locator('#terms')
    - locator resolved to <input id="terms" name="terms" type="checkbox"/>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div id="myModal" class="modal fade show">…</div> intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div id="myModal" class="modal fade show">…</div> intercepts pointer events
    - retrying click action
      - waiting 100ms
    107 × waiting for element to be visible, enabled and stable
        - element is visible, enabled and stable
        - scrolling into view if needed
        - done scrolling
        - <div id="myModal" class="modal fade show">…</div> intercepts pointer events
      - retrying click action
        - waiting 500ms
    - waiting for element to be visible, enabled and stable

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - link "Free Access to InterviewQues/ResumeAssistance/Material" [ref=e3] [cursor=pointer]:
      - /url: https://rahulshettyacademy.com/documents-request
    - link "Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire" [ref=e4] [cursor=pointer]:
      - /url: https://techsmarthire.com/
  - generic [ref=e5]:
    - heading [level=3] [ref=e6]
    - generic [ref=e14]:
      - generic [ref=e15]:
        - generic [ref=e16]: "Username:"
        - textbox "Username:" [ref=e17]
      - generic [ref=e18]:
        - generic [ref=e19]: "Password:"
        - textbox "Password:" [ref=e20]
      - generic [ref=e22]:
        - generic [ref=e23] [cursor=pointer]:
          - text: Admin
          - radio "Admin" [ref=e24]
        - generic [ref=e26] [cursor=pointer]:
          - text: User
          - radio "User" [checked] [ref=e27]
      - combobox [ref=e30]:
        - option "Student"
        - option "Teacher"
        - option "Consultant" [selected]
      - generic [ref=e31]:
        - generic [ref=e32]:
          - checkbox "I Agree to the terms and conditions" [ref=e34]
          - generic [ref=e35]:
            - text: I Agree to the
            - link "terms and conditions" [ref=e36] [cursor=pointer]:
              - /url: "#"
        - button "Sign In" [ref=e37] [cursor=pointer]
      - paragraph [ref=e39]:
        - text: (username is
        - generic [ref=e40]: rahulshettyacademy
        - text: and Password is
        - generic [ref=e41]: Learning@830$3mK2
        - text: )
  - generic [ref=e43]:
    - paragraph [ref=e45]: You will be limited to only fewer functionalities of the app. Proceed?
    - generic [ref=e46]:
      - button "Cancel" [ref=e47] [cursor=pointer]
      - button "Okay" [active] [ref=e48] [cursor=pointer]
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test')
  2  | 
  3  | //test.use({ browserName: 'webkit'});
  4  | test('@Web Browser Context-Validating Error login', async ({ browser }) => {
  5  | 
  6  |     const context = await browser.newContext();
  7  |     const page = await context.newPage();
  8  | 
  9  |     //page.route('**/*.css', route => route.abort()); // se intercepta la solicitud de los archivos CSS y se cancela la solicitud para que no se carguen los estilos de la página
  10 | 
  11 |     //page.route('**/*.{jpg,png,jpeg}', route => route.abort()); // se intercepta la solicitud de las imágenes y se cancela la solicitud para que no se carguen las imágenes de la página
  12 | 
  13 |     const userName = page.locator('#username');
  14 |     const signIn = page.locator("#signInBtn");
  15 |     const cardTitles = page.locator(".card-body a");
  16 | 
  17 |     page.on('request', request => console.log(request.url())); // se imprime en la consola la URL de cada solicitud que se realiza en la página
  18 |     page.on('response', response => console.log(response.url(), response.status())); // se imprime en la consola la URL y el estado de cada respuesta que se recibe en la página
  19 |     await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  20 |     console.log(await page.title());
  21 |     //css 
  22 |     await userName.fill("rahulshetty");
  23 |     await page.locator("[type='password']").fill("Learning@830$3mK2");
  24 |     await signIn.click();
  25 |     console.log(await page.locator("[style*='block']").textContent());
  26 |     await expect(page.locator("[style*='block']")).toContainText('Incorrect');
  27 |     //type - fill
  28 |     await userName.fill("");
  29 |     await userName.fill("rahulshettyacademy");
  30 |     await signIn.click();
  31 |     console.log(await cardTitles.first().textContent());
  32 |     console.log(await cardTitles.nth(1).textContent());
  33 |     const allTitles = await cardTitles.allTextContents();
  34 | 
  35 |     console.log(allTitles);
  36 | 
  37 | });
  38 | 
  39 | 
  40 | test('@Web UI Controls', async ({ page }) => {
  41 |     await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  42 |     const userName = page.locator('#username');
  43 |     const signIn = page.locator("#signInBtn");
  44 |     const documentLink = page.locator("[href*='documents-request']");
  45 |     const dropdown = page.locator("select.form-control");
  46 |     await dropdown.selectOption("consult");
  47 |     await page.locator(".radiotextsty").last().click();
  48 |     await page.locator("#okayBtn").click();
  49 |     console.log(await page.locator(".radiotextsty").last().isChecked());
  50 |     await expect(page.locator(".radiotextsty").last()).toBeChecked();
> 51 |     await page.locator("#terms").click();
     |                                  ^ Error: locator.click: Test timeout of 50000ms exceeded.
  52 |     await expect(page.locator("#terms")).toBeChecked();
  53 |     await page.locator("#terms").uncheck();
  54 |     expect(await page.locator("#terms").isChecked()).toBeFalsy();
  55 |     await expect(documentLink).toHaveAttribute("class", "blinkingText");
  56 | });
  57 | 
  58 | 
  59 | 
  60 | test('@Child windows hadl', async ({ browser }) => {
  61 |     const context = await browser.newContext();
  62 |     const page = await context.newPage();
  63 |     const userName = page.locator('#username');
  64 |     await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  65 |     const documentLink = page.locator("[href*='documents-request']");
  66 | 
  67 |     const [newPage] = await Promise.all(
  68 |         [
  69 |             context.waitForEvent('page'),//listen for any new page pending,rejected,fulfilled
  70 |             documentLink.click(),
  71 | 
  72 |         ]); //new page is opened, now we can perform actions on the new page
  73 |         
  74 | });
```