//Login UI -> .json


//test browser open -> .json, cart-, order, orderdetails, orderhistory

const { test, expect } = require('@playwright/test')
let webContext; // variable global para almacenar el contexto del navegador con el estado de la sesión guardado en el archivo JSON para poder reutilizarlo en otros tests

test.beforeAll(async ({ browser }) => {

    const context = await browser.newContext(); // se crea un nuevo contexto de navegador para realizar pruebas de UI
    const page = await context.newPage(); // se crea una nueva página en el contexto del navegador
    await page.goto("https://rahulshettyacademy.com/client");
    const email = "sirmiguel28@gmail.com";
    await page.locator("#userEmail").fill(email); // se llena el campo de correo electronico
    await page.locator("#userPassword").fill("Inmamm34@@");
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle'); // espera a que la pagina cargue completamente // networkidle significa que no hay solicitudes de red pendientes
    await context.storageState({ path: 'state.json' }); // se guarda el estado de la sesión en un archivo JSON para poder reutilizarlo en otros tests
    webContext = await browser.newContext({storageState: 'state.json'}); // se crea un nuevo contexto de navegador con el estado de la sesión guardado en el archivo JSON para poder reutilizarlo en otros tests

});


test('Client app login', async () => { // se colcoca browser para abrir el navegador

    const email = "sirmiguel28@gmail.com";
    const productName = "ZARA COAT 3";
    const page = await webContext.newPage(); // se crea una nueva página en el contexto del navegador con el estado de la sesión guardado en el archivo JSON para poder reutilizarlo en otros tests
    await page.goto("https://rahulshettyacademy.com/client");
    const products = page.locator(".card-body"); // se busca el elemento del contenedor de productos
    await products.last().waitFor(); // espera a que el elemento este visible en la pagina
    const titles = await page.locator(".card-body b").allTextContents();

    console.log(titles);
    //await expect(page.locator(".card-body b")).toHaveText(["ADIDAS ORIGINAL", "ZARA COAT 3", "iphone 13 pro"]);

    //ZARA COAT 3
    const count = await products.count(); // se obtiene el numero de elementos que coinciden con el selector
    for (let i = 0; i < await count; ++i) { // se recorre el numero de elementos que coinciden con el selector
        if (await products.nth(i).locator("b").textContent() === productName) { // se compara el texto del elemento con el nombre del producto
            //add to cart
            await products.nth(i).locator("text= Add To Cart").click(); // se hace clic en el boton de agregar al carrito
            break; // se rompe el ciclo una vez que se encuentra el producto y se agrega al carrito
        }
    }

    //await page.pause(); // se pausa la ejecución del test para poder inspeccionar la página    

    await page.locator("[routerlink*='cart']").click(); // se hace clic en el enlace del carrito
    await page.locator("div li").first().waitFor(); // espera a que los elemento esten visibles en la pagina

    const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible(); // se verifica que el producto agregado al carrito este visible en la pagina
    await expect(bool).toBeTruthy(); // se verifica que el producto este visible en el carrito

    //seleccionar el pais de un drop down type botton
    await page.locator("text=Checkout").click(); // se hace clic en el boton de checkout
    await page.locator("[placeholder*='Country']").pressSequentially("ind", { delay: 100 }); // se escribe el nombre del pais en el campo de busqueda con un delay de 100ms

    const dropdown = page.locator(".ta-results"); // se busca el elemento del contenedor de resultados
    await dropdown.waitFor(); // espera a que el elemento este visible en la pagina

    //seleccionar el pais de un drop down type botton y verificar que el pais seleccionado sea el esperado
    const optionsCount = await dropdown.locator("button").count(); // se obtiene el numero de elementos que coinciden con el selector
    for (let i = 0; i < await optionsCount; ++i) { // se recorre el numero de elementos que coinciden con el selector
        const text = await dropdown.locator("button").nth(i).textContent(); // se obtiene el texto del elemento nth(i) que contiene el nombre del pais
        if (text === " India") { // se compara el texto del elemento con el nombre del pais
            await dropdown.locator("button").nth(i).click(); // se hace clic en el boton del pais
            break; // se rompe el ciclo una vez que se encuentra el pais y se hace clic en el boton
        }
    }

    // realiza la compra y verifica que el mensaje de confirmacion sea el esperado
    await expect(page.locator(".user__name [type='text']").first()).toHaveText(email); // se verifica que el campo de correo electronico tenga el texto del correo electronico ingresado 
    await page.locator(".action__submit").click(); // se hace clic en el boton de submit
    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. "); // espera a que el elemento este visible en la pagina

    // obtiene el id de la orden y lo imprime en la consola
    const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent(); // se obtiene el texto del elemento que contiene el id de la orden
    console.log(orderId); // se imprime el id de la orden y muestra en la consola lo que se esta ejecutando

    //encontrar la order generada en la tabla de ordenes y verificar que el id de la orden sea el mismo que el id de la orden generada
    await page.locator("button[routerlink*=myorders]").click(); // se hace clic en el enlace de mis ordenes

    await page.locator("tbody").waitFor(); // espera a que el elemento este visible en la pagina
    const rows = await page.locator("tbody tr");


    for (let i = 0; i < await rows.count(); ++i) { // se recorre el numero de filas de la tabla
        const rowOrderId = await rows.nth(i).locator("th").textContent(); // se obtiene el texto del elemento que contiene el id de la orden
        if (orderId.includes(rowOrderId)) { // se compara el id de la orden generada con el id de la orden en la tabla
            await rows.nth(i).locator("button").first().click(); // se hace clic en el boton de la fila que contiene el id de la orden
            break; // se rompe el ciclo una vez que se encuentra el id de la orden y se hace clic en el boton
        }
    }

    const orderIdDetails = await page.locator(".col-text").textContent(); // se obtiene el texto del elemento que contiene el id de la orden en la pagina de detalles de la orden
    await expect(orderId.includes(orderIdDetails)).toBeTruthy(); // se verifica que el id de la orden generada sea el mismo que el id de la orden en la pagina de detalles de la orden

});

test('test case 2', async () => { // se colcoca browser para abrir el navegador

    const email = "";
    const productName = "ZARA COAT 3";
    const page = await webContext.newPage(); // se crea una nueva página en el contexto del navegador con el estado de la sesión guardado en el archivo JSON para poder reutilizarlo en otros tests
    await page.goto("https://rahulshettyacademy.com/client");
    const products = page.locator(".card-body"); // se busca el elemento del contenedor de productos

    await products.last().waitFor(); // espera a que el elemento este visible en la pagina
    const titles = await page.locator(".card-body b").allTextContents();

    console.log(titles);


});