class LoginPage {

    constructor(page) {

        this.page = page; // se asigna el objeto page a la propiedad page de la clase LoginPage
        this.signInbutton = page.locator("[value='Login']"); // se busca el elemento del boton de login
        this.userName = page.locator("#userEmail"); // se busca el elemento del campo de correo electronico
        this.password = page.locator("#userPassword"); // se busca el elemento del campo de contraseña

    }

    async goTo() { // se crea una funcion para navegar a la pagina de login
        await this.page.goto("https://rahulshettyacademy.com/client"); // se navega a la pagina de login
    }

    async validLogin(username, password) { // se crea una funcion asincrona para realizar el login con los parametros de usuario y contraseña
        await this.userName.fill(username); // se llena el campo de correo electronico
        await this.password.fill(password);
        await this.signInbutton.click();
        await this.page.waitForLoadState('networkidle'); // espera a que la pagina cargue completamente // networkidle significa que no hay solicitudes de red pendientes
    }

}

module.exports = { LoginPage }; // se exporta la clase LoginPage para poder ser utilizada en otros archivos