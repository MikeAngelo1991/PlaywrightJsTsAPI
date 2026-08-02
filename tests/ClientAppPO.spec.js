const { test, expect } = require('@playwright/test')

const { LoginPage } = require('../pageobjects/LoginPage'); // Import the LoginPage class from the pageobjects/LoginPage.js file
const { DashboardPage } = require('../pageobjects/DashBoardPage'); // Import the DashboardPage class from the pageobjects/DashBoardPage.js file

test('Client app login', async ({page}) => { // se colcoca browser para abrir el navegador

    //js file locators- login js, DashboardPage.js, CartPage.js, CheckoutPage.js, OrderPage.js etc

    const userName = "sirmiguel28@gmail.com";
    const password = "Inmamm34@@";
    const productName = "ZARA COAT 3";
    const products = page.locator(".card-body"); // se busca el elemento del contenedor de productos
    const loginPage = new LoginPage(page); // se crea una instancia de la clase LoginPage y se le pasa el objeto page como parametro


    await loginPage.goTo(); // se llama a la funcion goTo() de la clase LoginPage para navegar a la pagina de login
    await loginPage.validLogin(userName,password); // se llama a la funcion validLogin() de la clase LoginPage para realizar el login con los parametros de usuario y contraseña
    
    const dashboardPage = new DashboardPage(page); // se crea una instancia de la clase DashboardPage y se le pasa el objeto page como parametro
    await dashboardPage.searchProductAddCart(productName); // se llama a la funcion searchProduct() de la clase DashboardPage para buscar el producto con el parametro de nombre del producto
    await dashboardPage.navigateToCart(); // se llama a la funcion navigateToCart() de la clase DashboardPage para navegar al carrito
    
    //await page.pause(); // se pausa la ejecución del test para poder inspeccionar la página    

    
    await page.locator("div li").first().waitFor(); // espera a que los elemento esten visibles en la pagina

    const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible(); // se verifica que el producto agregado al carrito este visible en la pagina
    await expect(bool).toBeTruthy(); // se verifica que el producto este visible en el carrito

    //seleccionar el pais de un drop down type botton
    await page.locator("text=Checkout").click(); // se hace clic en el boton de checkout
    await page.locator("[placeholder*='Country']").pressSequentially("ind", {delay: 100}); // se escribe el nombre del pais en el campo de busqueda con un delay de 100ms
    
    const dropdown = page.locator(".ta-results"); // se busca el elemento del contenedor de resultados
    await dropdown.waitFor(); // espera a que el elemento este visible en la pagina

    //seleccionar el pais de un drop down type botton y verificar que el pais seleccionado sea el esperado
    const optionsCount = await dropdown.locator("button").count(); // se obtiene el numero de elementos que coinciden con el selector
    for(let i=0; i < await optionsCount; ++i){ // se recorre el numero de elementos que coinciden con el selector
        const text = await dropdown.locator("button").nth(i).textContent(); // se obtiene el texto del elemento nth(i) que contiene el nombre del pais
        if(text === " India"){ // se compara el texto del elemento con el nombre del pais
            await dropdown.locator("button").nth(i).click(); // se hace clic en el boton del pais
            break; // se rompe el ciclo una vez que se encuentra el pais y se hace clic en el boton
        }}

    // realiza la compra y verifica que el mensaje de confirmacion sea el esperado
    await expect(page.locator(".user__name [type='text']").first()).toHaveText(userName); // se verifica que el campo de correo electronico tenga el texto del correo electronico ingresado 
    await page.locator(".action__submit").click(); // se hace clic en el boton de submit
    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. "); // espera a que el elemento este visible en la pagina
    
    // obtiene el id de la orden y lo imprime en la consola
    const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent(); // se obtiene el texto del elemento que contiene el id de la orden
    console.log(orderId); // se imprime el id de la orden y muestra en la consola lo que se esta ejecutando
    
    //encontrar la order generada en la tabla de ordenes y verificar que el id de la orden sea el mismo que el id de la orden generada
    await page.locator("button[routerlink*=myorders]").click(); // se hace clic en el enlace de mis ordenes
    
    await page.locator("tbody").waitFor(); // espera a que el elemento este visible en la pagina
    const rows = await page.locator("tbody tr");
    

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
