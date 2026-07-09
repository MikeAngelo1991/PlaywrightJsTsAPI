const { test, expect } = require('@playwright/test');

test('Calendar validations', async ({ page }) => {

    const monthNumber = "6";
    const date = "15";
    const year = "2027";
    const expectedList = [monthNumber, date, year]; // se crea un arreglo con los valores esperados de mes, dia y año

    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    await page.locator(".react-date-picker__inputGroup").click(); // se hace clic en el campo de fecha para abrir el calendario
    await page.locator(".react-calendar__navigation__label").click(); // se hace clic en el campo de año para abrir el calendario de años
    await page.locator(".react-calendar__navigation__label").click(); // se hace clic en el campo de año para abrir el calendario de años
    await page.getByText(year).click(); // se hace clic en el año correspondiente al año ingresado
    await page.locator(".react-calendar__year-view__months__month").nth(Number(monthNumber) - 1).click(); // se hace clic en el mes correspondiente al numero de mes ingresado
    await page.locator("//abbr[text()='" + date + "']").click(); // se hace clic en el dia correspondiente al dia ingresado 

    const inputs = page.locator(".react-date-picker__inputGroup__input") // se obtiene el valor de los campos de fecha

    for (let i = 0; i < expectedList.length; i++) { // se recorre el arreglo de valores esperados y se compara con el valor de los campos de fecha

        const value = await inputs.nth(i).inputValue(); // se obtiene el valor del campo de fecha correspondiente al indice i
        expect(value).toEqual(expectedList[i]); // se compara el valor del campo de fecha con el valor esperado

    }



})
