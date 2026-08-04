const { test, expect } = require('@playwright/test')

const { LoginPage } = require('../pageobjects/LoginPage'); // Import the LoginPage class from the pageobjects/LoginPage.js file
const { POManager } = require('../pageobjects/POManager'); // Import the POManager class from the pageobjects/POManager.js file


test('Client app login', async ({page}) => { // se colcoca browser para abrir el navegador

    //js file locators- login js, DashboardPage.js, CartPage.js, CheckoutPage.js, OrderPage.js etc

    const poManager = new POManager(page); // se crea una instancia de la clase POManager y se le pasa el objeto page como parametro

    const userName = "sirmiguel28@gmail.com";
    const password = "Inmamm34@@";
    const productName = "ZARA COAT 3";
    const products = page.locator(".card-body"); // se busca el elemento del contenedor de productos
    const loginPage = poManager.getLoginPage(); // se crea una instancia de la clase LoginPage y se le pasa el objeto page como parametro


    await loginPage.goTo(); // se llama a la funcion goTo() de la clase LoginPage para navegar a la pagina de login
    await loginPage.validLogin(userName,password); // se llama a la funcion validLogin() de la clase LoginPage para realizar el login con los parametros de usuario y contraseña
    
    const dashboardPage = poManager.getDashboardPage(); // se crea una instancia de la clase DashboardPage y se le pasa el objeto page como parametro
    await dashboardPage.searchProductAddCart(productName); // se llama a la funcion searchProduct() de la clase DashboardPage para buscar el producto con el parametro de nombre del producto
    await dashboardPage.navigateToCart(); // se llama a la funcion navigateToCart() de la clase DashboardPage para navegar al carrito
    
     const cartPage = poManager.getCartPage(); // se crea una instancia de la clase CartPage y se le pasa el objeto page como parametro
    await cartPage.VerifyProductIsDisplayed(productName); // se llama a la funcion VerifyProductIsDisplayed() de la clase CartPage para verificar que el producto se encuentra en el carrito con el parametro de nombre del producto
    await cartPage.Checkout(); // se llama a la funcion Checkout() de la clase CartPage para realizar el checkout del producto

    const ordersReviewPage = poManager.getOrdersReviewPage(); // se crea una instancia de la clase OrdersReviewPage y se le pasa el objeto page como parametro
    await ordersReviewPage.searchCountryAndSelect("ind","India"); // se llama a la funcion searchCountryAndSelect() de la clase OrdersReviewPage para buscar el pais y seleccionarlo con los parametros de nombre del pais y nombre del pais completo
    const orderId = await ordersReviewPage.SubmitAndGetOrderId(); // se llama a la funcion SubmitAndGetOrderId() de la clase OrdersReviewPage para realizar el submit del pedido y obtener el id del pedido
   console.log(orderId); // se imprime el id del pedido en la consola
   await dashboardPage.navigateToOrders(); // se llama a la funcion navigateToOrders() de la clase DashboardPage para navegar a la pagina de ordenes
   const ordersHistoryPage = poManager.getOrdersHistoryPage(); // se crea una instancia de la clase OrdersHistoryPage y se le pasa el objeto page como parametro
   await ordersHistoryPage.searchOrderAndSelect(orderId); // se llama a la funcion searchOrderAndSelect() de la clase OrdersHistoryPage para buscar el pedido y seleccionarlo con el parametro de id del pedido
   expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy(); // se verifica que el id del pedido obtenido de la pagina de ordenes sea igual al id del pedido obtenido de la pagina de review de ordenes
});
