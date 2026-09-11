class PracticeShopPage {
    constructor(page) {
        this.page = page;
        this.products = page.locator('.card-body h4');
    }

    async isProductDisplayed(productName) {
        return this.products.filter({ hasText: productName }).isVisible();
    }
}

module.exports = { PracticeShopPage };