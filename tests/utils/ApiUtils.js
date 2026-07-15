class ApiUtils {


    constructor(apiContext, loginPayLoad) // se crea un constructor para inicializar la clase ApiUtils y se pasa el contexto de la solicitud como parámetro
    {
        this.apiContext = apiContext; // se asigna el contexto de la solicitud a una propiedad de la clase ApiUtils
        this.loginPayLoad = loginPayLoad; // se asigna el cuerpo de la solicitud de login a una propiedad de la clase ApiUtils
    }

    async getToken() {// se crea una función asincrónica para obtener el token de autenticación

        const loginResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
            {
                data: this.loginPayLoad // se envía el cuerpo de la solicitud en formato JSON
            }
        );
        // 200, 201

        //expect(loginResponse.ok()).toBeTruthy(); // se verifica que la respuesta de la solicitud sea exitosa
        const loginResponseJson = await loginResponse.json(); // se obtiene el cuerpo de la respuesta de la solicitud en formato JSON
        const token = loginResponseJson.token; // se obtiene el token de la respuesta de la solicitud
        console.log(token); // se imprime el token en la consola
        return token;
    }

    async creatOrder(orderPayload) { // se crea una función asincrónica para generar una orden

        let response = {};
        response.token = await this.getToken(); // se llama a la función getToken() para obtener el token de autenticación y se almacena en la variable response
        const orderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
            {
                data: orderPayload,
                headers: {
                    'Authorization': response.token, // se establece el token de autenticación en el encabezado de la solicitud
                    'Content-Type': 'application/json'
                },
            });
        const orderResponseJson = await orderResponse.json(); // se obtiene el cuerpo de la respuesta de la solicitud en formato JSON
        console.log(orderResponseJson); // se imprime la respuesta de la solicitud en la consola
        const orderId = orderResponseJson.orders[0]; // se obtiene el id de la orden generada 
        response.orderId = orderId; // se almacena el id de la orden generada en la variable response
        return response;
    }
}

module.exports = { ApiUtils };