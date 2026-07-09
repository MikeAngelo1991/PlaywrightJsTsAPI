const {test} = require('@playwright/test');

test('Popup validations', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.goto("https://google.com");
    await page.goBack(); // se hace clic en el boton de retroceder del navegador
    await page.goForward(); // se hace clic en el boton de avanzar del navegador
    await page.reload(); // se hace clic en el boton de recargar del navegador
    
})
