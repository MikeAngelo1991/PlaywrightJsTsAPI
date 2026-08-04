const { LoginPage } = require('./LoginPage');
const { DashboardPage } = require('./DashBoardPage');
const { OrdersHistoryPage } = require('./OrdersHistoryPage');
const { OrdersReviewPage } = require('./OrdersReviewPage');
const { CartPage } = require('./CartPage');

class POManager { // se crea una clase POManger para manejar los objetos de las paginas
    constructor(page) { // se crea un constructor para inicializar el objeto page
        this.page = page; // se asigna el objeto page a la propiedad page de la clase POManager

        this.loginPage = new LoginPage(this.page); // se crea una instancia de la clase LoginPage y se le pasa el objeto page como parametro
        this.dashboardPage = new DashboardPage(this.page); // se crea una instancia de la clase DashboardPage y se le pasa el objeto page como parametro
        this.ordersHistoryPage = new OrdersHistoryPage(this.page); // se crea una instancia de la clase OrdersHistoryPage y se le pasa el objeto page como parametro
        this.ordersReviewPage = new OrdersReviewPage(this.page); // se crea una instancia de la clase OrdersReviewPage y se le pasa el objeto page como parametro
        this.cartPage = new CartPage(this.page); // se crea una instancia de la clase CartPage y se le pasa el objeto page como parametro
    }

    getCartPage() { // se crea una funcion para obtener la instancia de la clase CartPage
        return this.cartPage; // se retorna la instancia de la clase CartPage
    }

    getLoginPage() { // se crea una funcion para obtener la instancia de la clase LoginPage
        return this.loginPage; // se retorna la instancia de la clase LoginPage
    }

    getDashboardPage() { // se crea una funcion para obtener la instancia de la clase DashboardPage
        return this.dashboardPage; // se retorna la instancia de la clase DashboardPage
    }

    getOrdersHistoryPage() { // se crea una funcion para obtener la instancia de la clase OrdersHistoryPage
        return this.ordersHistoryPage; // se retorna la instancia de la clase OrdersHistoryPage
    }

    getOrdersReviewPage() { // se crea una funcion para obtener la instancia de la clase OrdersReviewPage
        return this.ordersReviewPage;// se retorna la instancia de la clase OrdersReviewPage
    }


}

module.exports = { POManager };