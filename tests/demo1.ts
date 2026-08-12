import { expect, type Locator, type Page } from '@playwright/test';

let message1 : string = "Hello"; // This is a string type variable
message1 = "bye";

console.log(message1); // Output: bye

let age1 : number = 20; // This is a number type variable
console.log(age1); // Output: 20
let isActive : boolean = false; // This is a boolean type variable

let numbers1 : number[] = [1, 2, 3]; // This is an array of numbers

let data : any = "this could be anything"; // This can be any type

data = 42; // Now it's a number

function add1(a: number, b: number): number { // This function takes two numbers as parameters and returns a number
    return a + b;
}

add1(5, 10); // Output: 15
let user: {name:string,age:number,location:string}= {name: "John", age: 30, location: "delhi"}; // This is an object with name, age, and location properties
user.location = "USA"; // Adding a new property to the object
console.log(user); // Output: { name: 'John', age: 30, location: 'USA' }

class CartPage
{

    page: Page;
    cartProducts: Locator;
    productsText: Locator;
    cart: Locator;
    orders: Locator;
    checkout: Locator;

constructor(page: Page)
{
    this.page = page;
    this.cartProducts = page.locator("div li").first();
    this.productsText = page.locator(".card-body b");
    this.cart =  page.locator("[routerlink*='cart']");
    this.orders = page.locator("button[routerlink*='myorders']");
    this.checkout = page.locator("text=Checkout");

}
}