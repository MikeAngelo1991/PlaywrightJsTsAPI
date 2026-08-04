const { expect } = require("@playwright/test");

class OrdersReviewPage { // se crea una clase para la pagina de review de ordenes
    constructor(page) {
        this.page = page;
        this.country = page.locator("[placeholder*='Country']");
        this.dropdown = page.locator(".ta-results");
        this.emailId = page.locator(".user__name [type='text']").first();
        this.submit = page.locator(".action__submit");
        this.orderConfirmationText = page.locator(".hero-primary");
        this.orderId = page.locator(".em-spacer-1 .ng-star-inserted");

    }

    async searchCountryAndSelect(countryCode, countryName) { // se crea una funcion para buscar el pais y seleccionarlo

        await this.country.type(countryCode, { delay: 100 });
        await this.dropdown.waitFor();
        const optionsCount = await this.dropdown.locator("button").count();
        for (let i = 0; i < optionsCount; ++i) {
            const text = await this.dropdown.locator("button").nth(i).textContent();
            if (text.trim() === countryName) {
                await this.dropdown.locator("button").nth(i).click();
                break;
            }
        }

    }

    async VerifyEmailId(username) { // se crea una funcion para verificar que el correo electronico ingresado sea el mismo que el correo electronico del usuario logueado
        await expect(this.emailId).toHaveText(username);
    }

    async SubmitAndGetOrderId() { // se crea una funcion para realizar el submit del pedido y obtener el id del pedido
        await this.submit.click();
        await expect(this.orderConfirmationText).toHaveText(" Thankyou for the order. ");
        return await this.orderId.textContent(); // se obtiene el texto del elemento que contiene el id de la orden y se retorna
    }
}
module.exports = { OrdersReviewPage };
