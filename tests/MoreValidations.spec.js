const {test, expect} = require('@playwright/test');

test('Popup validations', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    //await page.goto("https://google.com");
    //await page.goBack(); // se hace clic en el boton de retroceder del navegador
    //await page.goForward(); // se hace clic en el boton de avanzar del navegador
    //await page.reload(); // se hace clic en el boton de recargar del navegador
    await expect (page.locator("#displayed-text")).toBeVisible(); // se verifica que el elemento este visible en la pagina
    await page.locator("#hide-textbox").click(); // se hace clic en el boton de ocultar el elemento
    await expect (page.locator("#displayed-text")).toBeHidden(); // se verifica que el elemento este oculto en la pagina
    
    page.on("dialog", dialog => dialog.accept()); // se acepta el cuadro de dialogo
    await page.locator("#confirmbtn").click(); // se hace clic en el boton de confirmacion 
    
    //page.on("dialog", dialog => dialog.dismiss()); // se descarta el cuadro de dialogo
    //await page.locator("#confirmbtn").click(); // se hace clic en el boton de confirmacion 

    await page.locator("#mousehover").hover(); // se hace hover sobre el elemento
    await page.locator(".mouse-hover-content a").last().click(); // se hace clic en el ultimo elemento del menu desplegable

    const framespage = page.frameLocator("#courses-iframe"); // se busca el iframe por su id
    framespage.locator("li a[href*='lifetime-access']:visible").click(); // se hace clic en el enlace de acceso de por vida dentro del iframe visible
    
    const textCheck = await framespage.locator(".text h2").textContent(); // se obtiene el texto del elemento dentro del iframe
    console.log(textCheck.split(" ")[1]); // se divide el texto en un array y se obtiene el segundo elemento del array

})
