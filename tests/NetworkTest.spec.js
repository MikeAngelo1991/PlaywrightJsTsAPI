const { test, expect, request } = require('@playwright/test');
const { ApiUtils } = require('./utils/ApiUtils.js'); // se importa la clase ApiUtils desde el archivo ApiUtils.js

const loginPayLoad = { userEmail: "sirmiguel28@gmail.com", userPassword: "Inmamm34@@" }
let token; // variable global para almacenar el token de autenticación
const orderPayload = { "orders": [{ "country": "Cuba", "productOrderedId": "6960eac0c941646b7a8b3e68" }] }
//let orderId; // variable global para almacenar el id de la orden generada

let response; // variable global para almacenar la respuesta de la solicitud de creación de orden
test.beforeAll(async () => // se ejecuta antes de todos los tests
{
    // login API call to get the token
    const apiContext = await request.newContext(); // se crea un nuevo contexto de solicitud para realizar solicitudes HTTP
    const apiUtils = new ApiUtils(apiContext, loginPayLoad); // se crea una instancia de la clase ApiUtils y se pasa el contexto de la solicitud y el cuerpo de la solicitud como parámetros
    response = await apiUtils.creatOrder(orderPayload); // se llama a la función creatOrder de la clase ApiUtils y se pasa el cuerpo de la solicitud como parámetro, se espera a que se resuelva la promesa y se almacena el id de la orden generada en la variable response

});

// test 1, test 2, test 3

//create order is successful and verify it in the orders page

    test('Place the order', async ({ page }) => { // se colcoca browser para abrir el navegador


        //const apiUtils = new ApiUtils(response.apiContext, loginPayLoad); // se crea una instancia de la clase ApiUtils y se pasa el contexto de la solicitud y el cuerpo de la solicitud como parámetros
        //const response = await apiUtils.creatOrder(orderPayload); // se llama a la función creatOrder de la clase ApiUtils y se pasa el cuerpo de la solicitud como parámetro, se espera a que se resuelva la promesa y se almacena el id de la orden generada en la variable response
        //const orderId = response.orderId;

        page.addInitScript(value => { // se agrega un script de inicialización a la página para establecer el token de autenticación en el almacenamiento local del navegador
            window.localStorage.setItem('token', value); // se establece el token de autenticación en el almacenamiento local del navegador
        }, response.token);
       
        const email = "sirmiguel28@gmail.com";
        await page.goto("https://rahulshettyacademy.com/client"); 

        page.route("https://rahulshettyacademy.com/api/ecom/user/get-cart-count/68fee61ff669d6cb0a2e44c7", 
            route => {

                const response = page.request.fetch(route.request());
                route.fulfill({
                    
                })
                //interceptin response - API response -> { Playwright fakereponse } -> browser->render -> render data on front 
            }
        );
        await page.locator("button[routerlink*=myorders]").click(); // se hace clic en el enlace de mis ordenes
        await page.locator("tbody").waitFor(); // espera a que el elemento este visible en la pagina
        const rows = await page.locator("tbody tr");

    });

//Verify if the order is showing in the history page
//Precondition - create an order