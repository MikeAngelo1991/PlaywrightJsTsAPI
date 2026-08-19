import { test as baseTest } from '@playwright/test';

interface TestDataForOrder { // se crea una interfaz para definir los tipos de datos de los datos de prueba
    username: string;
    password: string;
    productName: string;
};

export const customTest = baseTest.extend<{ testDataForOrder: TestDataForOrder }>( // se extiende la clase test de playwright para poder usar los datos de prueba
    {

        testDataForOrder: {
            username: "sirmiguel28@gmail.com",
            password: "Inmamm34@@",
            productName: "ZARA COAT 3"
        }

    }
);