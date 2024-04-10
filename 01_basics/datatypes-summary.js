// # primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('100')
const anotherId = Symbol('123')

console.log(id === anotherId); // false

const bigNumber = 12345678901234567890n // for BigInt we use "n" after number

// Reference (Non primitive)

// Array, Objects, Function

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "vicky",
    age: 27,
}

const myFunction = function () {
    console.log("Hello World")
}

// typeOf use for find datatypes

console.log(typeof myFunction); // function

//Stack (Primitive), Heap (Non-Primitive)

let myName = " Vicky"

let myAnotherName = myName
myAnotherName = "ChaiaurCode"

console.log(myName); // Vicky
console.log(myAnotherName) // ChaiaurCode  // give copy output

// Heap (Non-Primitive)

let userOne = {
    email: "vicky123@google.com",
    upi: "vicky@ybl"
}

let userTwo = userOne

userTwo.email = "user123@google.com"

console.log(userOne.email); // user123@google.com // give original value
console.log(userTwo.email); // user123@google.com // give original value

