const base = require('@playwright/test');



exports.customtest = base.test.extend(
    {

        testDataForOrder: {
            username: "sirmiguel28@gmail.com",
            password: "Inmamm34@@",
            productName: "ZARA COAT 3"
        }

    }
);