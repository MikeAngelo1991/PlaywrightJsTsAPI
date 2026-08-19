import {LoginPage} from './LoginPage';
import {DashboardPage} from './DashBoardPage';
import {OrdersHistoryPage} from './OrdersHistoryPage';
import {OrdersReviewPage} from './OrdersReviewPage';
import { CartPage } from './CartPage';
import { expect, type Locator, type Page } from '@playwright/test';


export class POManager { // se crea una clase POManger para manejar los objetos de las paginas

    loginPage : LoginPage; // se crea una propiedad loginPage de tipo LoginPage que es la clase que contiene los elementos y funciones de la pagina de login
    dashboardPage : DashboardPage; // se crea una propiedad dashboardPage de tipo DashboardPage que es la clase que contiene los elementos y funciones de la pagina de dashboard
    ordersHistoryPage : OrdersHistoryPage; // se crea una propiedad ordersHistoryPage de tipo OrdersHistoryPage que es la clase que contiene los elementos y funciones de la pagina de historial de ordenes
    ordersReviewPage : OrdersReviewPage; // se crea una propiedad ordersReviewPage de tipo OrdersReviewPage que es la clase que contiene los elementos y funciones de la pagina de review de ordenes
    cartPage : CartPage; // se crea una propiedad cartPage de tipo CartPage que es la clase que contiene los elementos y funciones de la pagina del carrito
    page : Page; // se crea una propiedad page de tipo Page que es el objeto que representa la pagina web

    constructor(page: Page) { // se crea un constructor para inicializar el objeto page
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