const { test, expect, request } = require('@playwright/test');

const loginPayLoad = { userEmail: "sirmiguel28@gmail.com", userPassword: "Inmamm34@@" }
let token; // variable global para almacenar el token de autenticación
const orderPayload = { "orders": [{ "country": "Cuba", "productOrderedId": "6960eac0c941646b7a8b3e68" }] }
let orderId; // variable global para almacenar el id de la orden generada

test.beforeAll(async () => // se ejecuta antes de todos los tests
{
    // login API call to get the token
    const apiContext = await request.newContext(); // se crea un nuevo contexto de solicitud para realizar solicitudes HTTP


    // generar la compra y validar el id de la orden generada en la tabla de ordenes

    const orderResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
        {
            data: orderPayload,
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            },

        });
        
        const orderResponseJson = await orderResponse.json(); // se obtiene el cuerpo de la respuesta de la solicitud en formato JSON
        orderResponse.ok(); // se verifica que la respuesta de la solicitud sea exitosa
        console.log(orderResponseJson); // se imprime la respuesta de la solicitud en la consola
        orderId = orderResponseJson.orders[0]; // se obtiene el id de la orden generada

});

test.beforeEach(() => // se ejecuta antes de cada test
{



});

// test 1, test 2, test 3


//create order is successful and verify it in the orders page

    test('Place the order', async ({ page }) => { // se colcoca browser para abrir el navegador


        const ApiUtils = new ApiUtils() 
        const orderId = creatOrder(); // 

        page.addInitScript(value => { //|
            window.localStorage.setItem('token', value); // se establece el token de autenticación en el almacenamiento local del navegador
        }, token);
       
        const email = "sirmiguel28@gmail.com";
        await page.goto("https://rahulshettyacademy.com/client");
        const productName = "ZARA COAT 3";
        const products = page.locator(".card-body"); // se busca el elemento del contenedor de productos

       
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
        await page.pause(); // se pausa la ejecución del test para poder inspeccionar la página
        await expect(orderId.includes(orderIdDetails)).toBeTruthy(); // se verifica que el id de la orden generada sea el mismo que el id de la orden en la pagina de detalles de la orden

    });

//Verify if the order is showing in the history page
//Precondition - create an order