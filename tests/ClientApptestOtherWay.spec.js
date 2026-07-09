const { test, expect } = require('@playwright/test')

test('Client app login', async ({page}) => { // se colcoca browser para abrir el navegador

    const email = "sirmiguel28@gmail.com";
    const productName = "ZARA COAT 3";
    const products = page.locator(".card-body"); // se busca el elemento del contenedor de productos

    await page.goto("https://rahulshettyacademy.com/client");
    await page.getByPlaceholder("email@example.com").fill(email); // se llena el campo de correo electronico
    await page.getByPlaceholder("enter your passsword").fill("Inmamm34@@");
    await page.getByRole("button", { name: "Login" }).click();
    
    await page.waitForLoadState('networkidle'); // espera a que la pagina cargue completamente // networkidle significa que no hay solicitudes de red pendientes
    await page.locator(".card-body").last().waitFor(); // espera a que el elemento este visible en la pagina
    

    //ZARA COAT 3
    await page.locator(".card-body").filter({ hasText: "ZARA COAT 3"})
    .getByRole("button", { name: " Add To Cart" }).click(); // se hace clic en el boton de agregar al carrito
    
    //await page.pause(); // se pausa la ejecución del test para poder inspeccionar la página    

    await page.getByRole("listitem").getByRole("button", { name: "Cart" }).click(); // se hace clic en el enlace del carrito
    await page.locator("div li").first().waitFor(); // espera a que los elemento esten visibles en la pagina

    await expect(page.getByText("ZARA COAT 3")).toBeVisible(); // se verifica que el producto agregado al carrito este visible en la pagina

    //seleccionar el pais de un drop down type botton
    await page.getByRole("button", { name: "Checkout" }).click(); // se hace clic en el boton de checkout
    await page.getByPlaceholder("Select Country").pressSequentially("ind", {delay: 100}); // se escribe el nombre del pais en el campo de busqueda con un delay de 100ms
    
    await page.getByRole("button", { name: "India" }).nth(1).click(); // se hace clic en el boton del pais

    // realiza la compra y verifica que el mensaje de confirmacion sea el esperado
    await page.getByText("PLACE ORDER").click(); // se hace clic en el boton de submit
    await expect(page.getByText(" Thankyou for the order. ")).toBeVisible(); // espera a que el elemento este visible en la pagina

    // obtiene el id de la orden y lo imprime en la consola
    const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent(); // se obtiene el texto del elemento que contiene el id de la orden
    console.log(orderId); // se imprime el id de la orden y muestra en la consola lo que se esta ejecutando
    
    //encontrar la order generada en la tabla de ordenes y verificar que el id de la orden sea el mismo que el id de la orden generada
    await page.locator("button[routerlink*=myorders]").click(); // se hace clic en el enlace de mis ordenes
    
    await page.locator("tbody").waitFor(); // espera a que el elemento este visible en la pagina
    const rows = await page.locator("tbody tr"); // se busca el elemento de la tabla de ordenes y se obtiene el numero de filas de la tabla
    

    for(let i=0; i < await rows.count(); ++i){ // se recorre el numero de filas de la tabla
        const rowOrderId = await rows.nth(i).locator("th").textContent(); // se obtiene el texto del elemento que contiene el id de la orden
        if(orderId.includes (rowOrderId)){ // se compara el id de la orden generada con el id de la orden en la tabla
            await rows.nth(i).locator("button").first().click(); // se hace clic en el boton de la fila que contiene el id de la orden
            break; // se rompe el ciclo una vez que se encuentra el id de la orden y se hace clic en el boton
        }
    }

    const orderIdDetails = await page.locator(".col-text").textContent(); // se obtiene el texto del elemento que contiene el id de la orden en la pagina de detalles de la orden
    await expect(orderId.includes(orderIdDetails)).toBeTruthy(); // se verifica que el id de la orden generada sea el mismo que el id de la orden en la pagina de detalles de la orden

});
