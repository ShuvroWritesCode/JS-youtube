// primitives 

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol("123")
const secondaryId = Symbol('123')

// console.log(id === secondaryId); // false

const bigNumber = 2344314314513353454325n

// console.log(typeof bigNumber); // bigint


// Reference (Non primtive)

// Array, Objects, Function

const heroes = ["Captain America", "Ironman", "Hulk"]

let myObj = {
    name: "Tony Stark",
    age: "34",
    character: "Ironman"
}
// console.log(myObj); // { name: 'Tony Stark', age: '34', character: 'Ironman' }

const myFunction = function(){
    console.log("Hello World");
}




// ********************************** Memory Allocation **********************************

// Stack (Primitive), Heap (Non-Primitive)

let myGithubName = "ShuvroWritesCode"

let anotherName = myGithubName // this is a copied data in anotherName
anotherName = "Codeforces"
console.log(anotherName);

let user = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userOne = user // this is not a copied data rather a referenced data from heap

userOne.email = "userOne@google.com"

console.log(user.email);
console.log(userOne.email);