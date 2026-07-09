const { test, expect } = require('@playwright/test')

test('Browser Context Playwright test', async ({ browser }) => { // se colcoca browser para abrir el navegador

    // playwright code-
    //step1   -open browser
    //step2  - enter u/p 2 seconds
    //await 
    //step3  -click

    //chrome - plugins / coockies

    const context = await browser.newContext(); // se abre una nueva pestaña 
    const page = await context.newPage(); // creacion de una nueva pagina

    const usrName = page.locator("#username"); // se busca el elemento del campo de usuario
    const passWord = page.locator("#password");
    const signInBtn = page.locator("#signInBtn");
    const cardTitles = page.locator(".card-body a"); // se busca el elemento del titulo de la tarjeta

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/"); // se abre la pagina web
    console.log(await page.title()); // se imprime el titulo de la pagina y muestra en la consola lo que se esta ejecutando
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy"); // se hace la comparacion del titulo de la pagina
    // css , xpath
    await usrName.fill("rahulshettyacadem/y"); // se llena el campo de usuario
    await passWord.fill("Learning@830$3mK2"); // se llena el campo de contraseña
    await signInBtn.click(); // se hace clic en el botón de inicio de sesión
    const error = await page.locator("[style*='block']").textContent(); // se busca el elemento que contiene el mensaje de error
    console.log(error); // se imprime el mensaje de error y muestra en la consola lo que se esta ejecutando
    await expect(error).toContain("Incorrect"); // se hace la comparacion del mensaje de error
    //type - fill
    await usrName.fill("");
    await usrName.fill("rahulshettyacademy");
    await passWord.fill("Learning@830$3mK2");
    await signInBtn.click();
    //console.log(await cardTitles.first().textContent()); // se imprime el texto del primer enlace y muestra en la consola lo que se esta ejecutando
    //console.log(await cardTitles.nth(1).textContent());
    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles); // se imprime el texto de todos los enlaces y muestra en la consola lo que se esta ejecutando



});

test('UI Controls', async ({ page }) => { // se coloca page para abrir el navegador // only para ejecutar solo este test

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const usrName = page.locator("#username"); // se busca el elemento del campo de usuario
    const passWord = page.locator("#password");
    const signInBtn = page.locator("#signInBtn");
    const documentLink = page.locator("[href*='documents-request']"); // se busca el elemento del enlace de documentos
    const dropdown = page.locator("select.form-control"); // se busca el elemento del campo de selección

    dropdown.selectOption("consult"); // se selecciona la opción "consult" del campo de selección

    await page.locator(".radiotextsty").last().click(); // se hace clic en el último elemento del grupo de botones de radio
    await page.locator("#okayBtn").click(); // se hace clic en el botón de "OK" del cuadro de diálogo

    //assertion
    await expect(page.locator(".radiotextsty").last()).toBeChecked(); // se verifica que el último botón de radio esté seleccionado
    console.log("Is the last radio button checked? " + await page.locator(".radiotextsty").last().isChecked()); // se imprime en la consola si el último botón de radio está seleccionado o no

    await page.locator("#terms").click(); // se hace clic en el checkbox de términos y condiciones
    await expect(page.locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck(); // se desmarca el checkbox de términos y condiciones
    expect(await page.locator("#terms").isChecked()).toBeFalsy(); // es falso porque el checkbox está desmarcado await dentro de expect si funciona, pero si se pone fuera de expect no funciona, porque es una promesa y hay que esperar a que se resuelva
    //await expect(page.locator("#terms")).not.toBeChecked(); 
    console.log("Is the terms checkbox checked? " + await page.locator("#terms").isChecked());

    await expect(documentLink).toHaveAttribute("class", "blinkingText"); // se verifica que el enlace de documentos tenga la clase "blinkingText"

    //await page.pause(); // se pausa la ejecución del test para poder inspeccionar la página

    //await usrName.fill("rahulshettyacadem/y"); // se llena el campo de usuario
    //await passWord.fill("Learning@830$3mK2"); // se llena el campo de contraseña
    //await signInBtn.click(); // se hace clic en el botón de inicio de sesión

});

test('Child Windows handling', async ({ browser }) => {

    const context = await browser.newContext(); // se abre una nueva pestaña 
    const page = await context.newPage(); // creacion de una nueva pagina
    const usrName = page.locator("#username"); // se busca el elemento del campo de usuario
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']"); // se busca el elemento del enlace de documentos

    const [newPage] = await Promise.all([ // se espera a que se abra una nueva pestaña y se hace clic en el enlace de documentos
    context.waitForEvent('page'), // se espera a que se abra una nueva pestaña // promise pending, reject, fulfilled
    documentLink.click(),  // se hace clic en el enlace de documentos a una nueva pestaña
    ]) 

    const text = await newPage.locator(".red").textContent(); // se busca el elemento que contiene el texto en la nueva pestaña
    const arrayText = text.split("@"); // se divide el texto en un array usando el caracter "@" como separador
    const domain = arrayText[1].split(" ")[0]; // se divide el segundo elemento del array en otro array usando el espacio como separador y se toma el primer elemento
    console.log(domain); // se imprime el dominio y muestra en la consola lo que se esta ejecutando

    await usrName.type(domain); // se llena el campo de usuario con el dominio obtenido de la nueva pestaña
    //await page.pause(); // se pausa la ejecución del test para poder inspeccionar la página
    //console.log(await usrName.textContent()); // se imprime el contenido del campo de usuario y muestra en la consola lo que se esta ejecutando
    console.log(await usrName.inputValue()); // se imprime el valor del campo de usuario y muestra en la consola lo que se esta ejecutando
  

});

