class ApiUtils {


    constructor(apiContext)
    {

    }

    async getToken() {
        const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
            {
                data: loginPayLoad // se envía el cuerpo de la solicitud en formato JSON
            }
        );
        // 200, 201

        expect(loginResponse.ok()).toBeTruthy(); // se verifica que la respuesta de la solicitud sea exitosa
        const loginResponseJson = await loginResponse.json(); // se obtiene el cuerpo de la respuesta de la solicitud en formato JSON
        token = loginResponseJson.token; // se obtiene el token de la respuesta de la solicitud
        console.log(token); // se imprime el token en la consola
        return token;
    }
}