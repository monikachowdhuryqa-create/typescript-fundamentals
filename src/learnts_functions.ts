// //Basic Function
//    //defing function
//    function openDemoShop() {
//     console.log("Welcome to Demo Shop")
//    }
// //calling function
// openDemoShop()

// //function with parameter
// function searchProduct(product: string) {
//     console.log(`Searching for product: ${product}`);
// }

// searchProduct("Organic Bananas");

// //function with returning value
// function calculateTotalPrice(price: number, quantity: number){
//     return price * quantity;
// }
// const total = calculateTotalPrice(10, 5);
// console.log(`Total Price: ${total}`);

// //use default parameter
// function calculateTotalPriceWithDiscount(price: number, quantity: number, discount: number = 1) {
//     return price * quantity - discount
// }
// let totalWithDiscount = calculateTotalPriceWithDiscount(10, 5);
// console.log(`Total Price with Discount: ${totalWithDiscount}`);

// //function with multiple parameters
// function calculateTotalPriceWithMultipleParams(price: number, quantity: number, discount: number){
// return price * quantity - discount
// }
// let totalWithMultipleParams = calculateTotalPriceWithMultipleParams(10, 5, 2);
// console.log(`Total Price with Multiple Params: ${totalWithMultipleParams}`)
 

//Rest parameter (variable Inputs)
// function CalculateCartTotal(...prices: number[]) {
//     let total = 0;
//     for (let price of prices) {
//         total += price;
//     }
//     return total;
// }
// let cartTotal = CalculateCartTotal(10, 20, 30, 40)
// console.log(`Cart Total: ${cartTotal}`)

//pasing an array to function
function printproductNames(products: string[]) {
    for (let p of products) {
        console.log(p);
    }
}
    let productNames: string[] = ["Organic Bananas", "Organic Apples", "Organic Oranges"];
   

//passing an object to function

type Product_obj= {name: string, price: number, category: number}

function ProductProperties(product: Product_obj) {
    console.log(`Product Name: ${product.name}`);
    console.log(`Product Price: ${product.price}`);
    console.log(`Product Category: ${product.category}`);
}
ProductProperties({name: "Organic Bananas", price: 10, category: 1});
//calling function inside a function
function formatProductName(name: string) {
    return name.toUpperCase();
}
function processProduct(name: string) {
    let formattedName = formatProductName(name);
    console.log(`Processed Product Name: ${formattedName}`);
}
processProduct("tea");

// annonymous function
// setTimeout(function() {
//     console.log("This is an anonymous function");
// }, 2000);

//arrow function
const calculateTotalPrice = (price: number, quantity: number): number =>  price * quantity;
let totalPrice = calculateTotalPrice(10, 5);
console.log(`Total Price using Arrow Function: ${totalPrice}`);

//callback function
function processPoduct(name: string, action: Function): void {
   console.log(name);
    action();
}
processPoduct("Organic Bananas", function() {
    console.log("This is a callback function");
})

//callback function with arrow function
processPoduct("Organic Apples", () => {
    console.log("This is a callback function using arrow function");
})

//callback function with returning value
function procesprice(price: number, operation: Function):void {
    let result = operation(price);
    console.log(`Processed Price: ${result}`);
}
procesprice(10, function(p: number) {
    return p * 2;
})

//callback function with returning value using arrow function
function processprice(price:number, operation:Function):number {
    let result = operation(price);
    return result*2;
}
let callbackPrice= processprice(10, (p: number):number => {
    return p * 0.9;
})
console.log(`Processed Price using Arrow Function: ${callbackPrice}`)