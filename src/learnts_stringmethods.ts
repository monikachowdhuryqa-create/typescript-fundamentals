//getting length of string
let productTitle: string = "Organic Bananas";
console.log(productTitle.length);

if (productTitle.length > 1) {
    console.log("Product title is valid");
}

//changing case of string
let searchText = "organic bananas";
console.log(searchText.toUpperCase());
console.log(searchText.toLowerCase());

let expectedSearchText = "organic bananas";
let actualSearchText = "Organic Bananas";

//Replace text in string
let product:string = "Organic Bananas"; 
console.log(product.replace("Bananas", "Apples")); // Organic Apples

//split string 
let categories: string = "Fruits, Vegetables, Dairy, Bakery";
let categoriesArray: string[] = categories.split(", ");


for (let category of categoriesArray) {
    console.log(category);
}

//trim string
let productName: string = "   Organic Bananas   ";
console.log(productName.trim()); // "Organic Bananas"