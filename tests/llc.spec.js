import {test, expect} from '@playwright/test';

test('Playwright Special locators', async ({ page }) => {
    
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").click();  // se hace clic en el checkbox usando el label del elemento
    await page.getByLabel("Employed").check(); // se verifica que el checkbox este seleccionado usando el label del elemento
    await page.getByLabel("Gender").selectOption("Female"); // se selecciona la opcion del select usando el label del elemento
    await page.getByPlaceholder("Password").fill("abc123"); // se llena el campo de texto usando el placeholder del elemento 
    await page.getByRole("button", {name: "Submit"}).click(); // se hace clic en el boton usando el role del elemento y el nombre del boton
    await page.getByAltText("The Form has been submitted successfully!.").isVisible(); // se verifica que el mensaje de confirmación sea visible
    await page.getByRole("link", {name: "Shop"}).click(); // se hace clic en el enlace usando el role del elemento y el nombre del enlace
    await page.locator("app-card").filter({hasText: "Nokia Edge"}).getByRole("button", {name: "Add"}).click(); // se hace clic en el boton de agregar al carrito del producto Nokia Edge usando el role del elemento y el nombre del boton
    
    // locator(css) are the most common used
    
    

})



// npx playwright test --ui // ejecuta los tests en modo UI