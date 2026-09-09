const { test, expect } = require('@playwright/test');
const { POManager } = require('../pageobjects/POManager');

test('@Web login practice and verify Iphone X product', async ({ page }) => {
    const poManager = new POManager(page);
    const loginPage = poManager.getPracticeLoginPage();
    const shopPage = poManager.getPracticeShopPage();

    await loginPage.goTo();
    await loginPage.login('rahulshettyacademy', 'Learning@830$3mK2');

    await expect(page).toHaveURL('https://rahulshettyacademy.com/angularpractice/shop');
    await expect(shopPage.products.filter({ hasText: 'iphone X' })).toBeVisible();
});