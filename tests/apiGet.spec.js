//Author : Miguel Muñoz

const { test, expect } = require('@playwright/test');
const { OrdersHistoryPage } = require('../pageobjects/OrdersHistoryPage');
const dataset = JSON.parse(JSON.stringify(require('./utils/placeorderTestData.json')));

test('@API GET request', async ({ request }) => {
    const apiData = dataset[0];
    const response = await request.get(apiData.endpoint);

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(apiData.expectedStatus);

    const responseBody = await response.json();
    expect(responseBody).toMatchObject(apiData.expectedBody);
});

test('@OrdersHistoryPage object', async ({ page }) => {
    const ordersHistoryPage = new OrdersHistoryPage(page);

    expect(ordersHistoryPage).toBeInstanceOf(OrdersHistoryPage); // 
});
