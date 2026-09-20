//primitive data type
//strings
let username:string = "Monika"
//number
let age:number = 35
age= "thirty five"

//boolean
let isLoggedIn: boolean= true
let hasError: boolean=false

//array

//let searchKeywords=["organic", "fresh", "grocery"]
//let quantities=[1,2,3]
//quantities.push("ten")
//console.log(quantities)

let searchKeywords: string[]=["organic", "fresh", "grocery"]
let quantities:number[]=[1,2,3,]
//quantities.push("ten")
console.log(quantities)

//objects
// let user={
//     name1:"Monika",
//     email:"mosha1577@yahoo.com",
//     role:"admin",
//     isLoggedIn:true
// }
// console.log("user name", user.name1)

//user.age=35
//console.log("user", user)

//user.role=1
//console.log("user", user)

let user:
{
name1:string,
email:string,
role:string,
isLoggedIn:boolean,
age?:number //Optional property
}

=
{
    name1:"Monika",
    email:"mosha1577@yahoo.com",
    role:"admin",
    isLoggedIn:true,
}

let config: {
    readonly baseURL:string,
    timeout:number}={

        baseURL:"https://qa.cart.com",
        timeout:5000
    }
    console.log("config", config)