class DashboardPage {

    constructor(page) {

        this.page = page; // se asigna el objeto page a la propiedad page de la clase DashboardPage
        this.products = page.locator(".card-body"); // se busca el elemento del contenedor de productos
        this.productsText = page.locator(".card-body b");
        this.cart = page.locator("[routerlink*='cart']"); // se busca el elemento del enlace del carrito
    }


    async searchProductAddCart(productName) { // se crea una funcion asincrona para agregar un producto al carrito con el parametro de nombre del producto
        
        await this.products.last().waitFor(); // espera a que el elemento este visible en la pagina
        const titles = await this.productsText.allTextContents();

        console.log(titles);
        //await expect(page.locator(".card-body b")).toHaveText(["ADIDAS ORIGINAL", "ZARA COAT 3", "iphone 13 pro"]);

        //ZARA COAT 3
        const count = await this.products.count(); // se obtiene el numero de elementos que coinciden con el selector
        for (let i = 0; i < await count; ++i) { // se recorre el numero de elementos que coinciden con el selector
            if (await this.products.nth(i).locator("b").textContent() === productName) { // se compara el texto del elemento con el nombre del producto
                //add to cart
                await this.products.nth(i).locator("text= Add To Cart").click(); // se hace clic en el boton de agregar al carrito
                break; // se rompe el ciclo una vez que se encuentra el producto y se agrega al carrito
            }
        }
    }

    async navigateToCart() { // se crea una funcion para navegar al carrito
        await this.cart.click(); // se hace clic en el enlace del carrito
    }

}
module.exports = { DashboardPage }; // se exporta la clase DashboardPage para poder ser utilizada en otros archivos