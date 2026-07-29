const { test, expect } = require('@playwright/test'); // Import the test and expect functions from the Playwright testing library
const ExcelJS = require('exceljs'); // Import the ExcelJS library

//con await y tambien con async function para leer el archivo excel y mostrar el numero de fila y columna donde se encuentra un valor especifico
async function writeExcelTest(searchText, replaceText, change, filePath) { // Function to read the Excel file and find the row and column of the specified value
    
    
const workbook = new ExcelJS.Workbook(); // Create a new workbook instance
await workbook.xlsx.readFile(filePath);
// Read the Excel file
const worksheet = workbook.getWorksheet('Sheet1'); // Get the default worksheet (Sheet1)
    const output = await readExcel(worksheet, searchText); // Call the readExcel function to find the row and column of the specified value and store the result in the output variable

    //vamos a cambiar el valor en la celda donde se encuentra el valor "Apple" por "Iphone" y luego guardamos el archivo excel con el nuevo valor
    const cell = worksheet.getCell(output.row, output.column + change.colChange); // Get the cell at the found row and column and apply the change offsets of rowChange and colChange
    cell.value = replaceText; // Change the cell value to the specified replaceText
    await workbook.xlsx.writeFile(filePath); // Save the Excel file with the new value

}

async function readExcel(worksheet, searchText) { // Function to read the Excel file and find the row and column of the specified value

    let output = {row: -1, column: -1}; // Initialize an output object to store the row and column numbers
    worksheet.eachRow((row, rowNumber) => { // Iterate through each row in the worksheet

        row.eachCell((cell, colNumber) => {
            
            if (cell.value === searchText) { // Check if the cell has a value equal to the search text
                output.row = rowNumber; // Store the row number if the cell value is equal to the search text
                output.column = colNumber; // Store the column number if the cell value is equal to the search text
            }

        })

    });
    return output; // Return the output object with the row and column numbers
}

//update Mango Price to 350.
//writeExcelTest("Mango", 350 ,{rowChange:0,colChange:2},"/Users/CHEFM/Downloads/exceldownloadTest.xlsx"); // se llama a la función writeExcelTest con los parámetros de búsqueda, reemplazo, cambios y ruta del archivo 
test('Upload download excel validation', async ({ page }) => {
    
    const testSearch = "Mango"; // Define the search text to find in the Excel file
    const updatedValue = '350'; // Define the value to replace the found value with

    await page.goto("https://rahulshettyacademy.com/upload-download-test/index.html"); // Navigate to the specified URL
    const downloadPromise = page.waitForEvent('download'); // Wait for the download event to occur
    await page.getByRole('button', { name: 'Download' }).click(); // Click the download button to download the Excel file

    await downloadPromise; // Wait for the download to complete

    await writeExcelTest(testSearch, updatedValue ,{rowChange:0,colChange:2},"/Users/CHEFM/Downloads/download.xlsx"); // se llama a la función writeExcelTest con los parámetros de búsqueda, reemplazo, cambios y ruta del archivo 
    await page.locator('#fileinput').click(); // Click the file input to open the file chooser dialog
    await page.locator('#fileinput').setInputFiles('/Users/CHEFM/Downloads/download.xlsx'); // Set the input files for the file input to the specified Excel file
    await page.getByRole('button', { name: 'Upload' }).click(); // Click the upload button to upload the Excel file
    const textlocator = await page.getByText(testSearch); // Get the locator for the text containing the search text
    const desiredRoll = await page.getByRole('row').filter({ has: textlocator}); // Filter the rows to find the one that contains the specified search text
    await expect(desiredRoll.locator('#cell-4-undefined')).toContainText(updatedValue); // Assert that the cell in the found row contains the updated value
});
