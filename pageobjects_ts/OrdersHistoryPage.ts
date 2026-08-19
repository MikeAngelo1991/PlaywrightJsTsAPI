import {Page, Locator} from '@playwright/test';

export class OrdersHistoryPage {
    page: Page;
    ordersTable: Locator;
    rows: Locator;
    orderdIdDetails: Locator;

    constructor(page: Page) {
        this.page = page;
        this.ordersTable = page.locator("tbody");
        this.rows = page.locator("tbody tr");
        this.orderdIdDetails = page.locator(".col-text");
    }

    async searchOrderAndSelect(orderId: string) { // se crea una funcion para buscar el id de la orden y seleccionarla

        await this.ordersTable.waitFor();
        for (let i = 0; i < await this.rows.count(); ++i) {

            let rowOrderId: any;
            rowOrderId = await this.rows.nth(i).locator("th").textContent(); // se obtiene el texto del elemento que contiene el id de la orden
            if (orderId.includes(rowOrderId)) {
                await this.rows.nth(i).locator("button").first().click(); // se hace clic en el boton de la fila que contiene el id de la orden
                break;
            }
        }

    }

    async getOrderId() { // se crea una funcion para obtener el id de la orden en la pagina de detalles de la orden
        return await this.orderdIdDetails.textContent();
    }

}
module.exports = { OrdersHistoryPage };
