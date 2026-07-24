const { test, expect, request } = require('@playwright/test');

test('@QW Security test request intercept', async ({ page }) => {

    //login and reach orders page

    const email = "sirmiguel28@gmail.com";
    const productName = "ZARA COAT 3";
    const products = page.locator(".card-body"); // se busca el elemento del contenedor de productos

    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill(email); // se llena el campo de correo electronico
    await page.locator("#userPassword").fill("Inmamm34@@");
    await page.locator("[value='Login']").click();

    await page.waitForLoadState('networkidle'); // espera a que la pagina cargue completamente // networkidle significa que no hay solicitudes de red pendientes
    await products.first().waitFor(); // espera a que el elemento este visible en la pagina
    await page.locator("button[routerlink*='myorders']").click();

    //intercepting the request and modifying the response to a fake response

    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
        route => { // route es un objeto que representa la solicitud que se está interceptando buscar en playwright route.continue() y route.fulfill()
            route.continue({ url: "https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=6a5c2c6285b8849b49f69b45" }); // se permite que la solicitud continúe sin ser interceptada
        }
    )
    await page.locator("button:has-text('view')").first().click(); // se hace clic en el botón de ver detalles de la orden
    //await page.pause(); // se pausa la ejecución del test para poder inspeccionar la página
    await expect(page.locator("p").last()).toHaveText("You are not authorize to view this order"); // se verifica que el texto del elemento sea el esperado

})
