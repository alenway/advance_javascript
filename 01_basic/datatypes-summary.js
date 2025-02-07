// Primitive

// 7 type : String, Number, Boolean, null, undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 110.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);
// const bigNumber = 2394879234929347n



// Reference (Non-Primitive)

// Array, Objects, Functions

const heros = ["ironman", "batman", "captinameriaca"]

let myObj = {
    name: "nitin",
    age: 22,
}

const myFunction = function() {
    console.log("hello world");
}

console.log(typeof myFunction);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let usertwo = userOne

usertwo.email = "nitin@gmail.com"

console.log(userOne);
console.log(usertwo);



// Stack (primitive) , heap (non-primitive)
