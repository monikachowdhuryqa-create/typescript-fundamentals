//arithmetic operators
let a = 10;
let b = 12;
console.log(a + b); // addition
console.log(a - b); // subtraction
console.log(a * b); // multiplication
console.log(a / b); // division
console.log(10+"3"); // this is concatenation; will print 103

//assignment operators
let score = 10
score = score+10
console.log(score)

score+=5
console.log(score)

//comparison operators
let x = 10;
let y = 11;
let y1="11";
console.log(x == y); // equality
console.log(x != y); // inequality
console.log(x < y); // less than
console.log(x > y); // greater than
console.log(x <= y); // less than or equal to
console.log(x >= y); // greater than or equal to

console.log(y == y1); // equality == only compares the value, not the type  
console.log(y === y1); // strict equality === compares both value and type

//logical operators
let isLoggedIn = true;
let isAdmin = false;
console.log("Logical Operators");
console.log(isLoggedIn && isAdmin);
console.log(isLoggedIn || isAdmin);
console.log(!isLoggedIn)