const { Before, BeforeStep , After , AfterStep, Status } = require('@cucumber/cucumber');
const { POManager } = require('../../pageobjects/POManager');
const playwright = require('playwright/test');

Before(async function () { // This hook will be executed before all steps in a scenario
    const browser = await playwright.chromium.launch({ headless: false }); // se abre el navegador
    const context = await browser.newContext(); // se abre una nueva pestaña 
    this.page = await context.newPage(); // creacion de una nueva pagina y se asigna a la propiedad page del objeto this para poder usarla en los pasos de prueba
    this.poManager = new POManager(this.page);
});

BeforeStep( function () {
  // This hook will be executed before all steps in a scenario with tag @foo
});


AfterStep( async function ({result}) {
  // This hook will be executed after all steps, and take a screenshot on step failure
  if(result.status === Status.FAILED){
    const screenshot = await this.page.screenshot({path: `screenshot-failed.png`}); // se toma una captura de pantalla de la pagina y se guarda en la ruta especificada
    this.attach(screenshot, 'image/png'); // se adjunta la captura de pantalla al reporte de cucumber
  }
});

// Asynchronous Promise
After(async function () {
  // Assuming this.driver is a selenium webdriver
  console.log('I am last to execute'); //traduce como "Soy el último en ejecutarse"


});

