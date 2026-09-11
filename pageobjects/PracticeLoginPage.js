class PracticeLoginPage {
    constructor(page) {
        this.page = page;
        this.username = page.locator('#username');
        this.password = page.locator('#password');
        this.terms = page.locator('#terms');
        this.signInButton = page.locator('#signInBtn');
    }

    async goTo() {
        await this.page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    }

    async login(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.terms.check();
        await Promise.all([ // Promise significa que se ejecutarán las acciones de manera concurrente y se esperará a que todas se completen
            this.page.waitForURL('**/angularpractice/shop'),
            this.signInButton.click(),
        ]);
    }
}

module.exports = { PracticeLoginPage };