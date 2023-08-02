// Problem #1: (Is Truthy)
// Using if/else statements, create a JS code that prints true if a value is truthy
// prints false if a value is falsey

// To run this code, uncomment out which variables you are trying to test and comment out the others. 
// All variables required to test per the directions are listed below.


let input = "I am a string"
// let input = false
// let input = null
// let input = undefined
// let input = 0
// let input = ""


if (input === false) {
    console.log("The boolean value false is falsy");
} else if (input === null) {
    console.log("The null value is falsy");
} else if (input === undefined) {
    console.log("Undefined is falsy");
} else if (input === 0) {
    console.log("The number 0 is falsy");
} else if (input === "" )
    console.log("The empty string is falsy");
    else {
        console.log(true)
    }



// Problem #2: (Number Line)
// Using if/else statements, JS code that takes the sum of two numbers and prints a corresponding message
// Example of this would be num1 is 50 and num2 is 51, sum is num1 + num2, return the message 101 is greater than 100

// To run this code, uncomment out which variables you are trying to test and comment out the others. 
// All variables required to test per the directions are listed below.

let num1 = 50
let num2 = 51

// let num1 = 99
// let num2 = -2

// let num1 = 0
// let num2 = 101

// let num1 = 500
// let num2 = -500

// let num1 = -1000
// let num2 = 0

// let num1 = -5
// let num2 = 0

let sum = num1 + num2


if (sum > 100) {
    console.log (sum + " is greater than 100");
} else if (sum > 0 && sum < 100) {
    console.log (sum + " is greater than 0");
} else if (sum === 0) {
    console.log (sum + " is equal to 0");
} else {
    console.log (sum + " is a negative number");
}


//Problem #3 (Greater than 5)
// Using if/else statements, write a scripte that prints true if num1 and num2 are greater than or equal to five 
// Have the script print false if one of these conditions is not met 
 
// For example, if num1 = 5 and num2 = 6, then the print should read true
// If num1 = 5 and num2 = 4, then print should read false
// If num1 = 3 and num2 = 1, then print should read false

// To run this code, uncomment out which variables you are trying to test and comment out the others. 
// All variables required to test per the directions are listed below.

let number1 = 5
let number2 = 6

// let number1 = 10
// let number2 = 11

// let number1 = 0
// let number2 = 0

// let number1 = 1000
// let number2 = -1000

// let number1 = 6
// let number2 = 4

// let number1 = 5
// let number2 = 5

if (number1 >= 5 && number2 >= 5) {
    console.log("True");
} else {
    console.log("False");
}


//Problem #4: (Pair and Compare)
//Use if/else statements to write a script with strict equality operators that 
//compares two pairs of values and returns true if at least one pair is true
//For example, "dog" and "dog" along with 5 and "5" would return true because
// "dog" and "dog" are strictly equal even though 5 and "5" are not strictly equal

// To run this code, uncomment out which variables you are trying to test and comment out the others. 
// All variables required to test per the directions are listed below.

param1A = "dog"
param1B = "dog"
param2A = 6
param2B = "6"

// param1A = "five"
// param1B = 5
// param2A = "dog"
// param2B = "dawg"

// param1A = 0
// param1B = false
// param2A = "horse"
// param2B = "horse"

// param1A = "eight"
// param1B = "eight"
// param2A = "ate"
// param2B = "ate"

// param1A = 11
// param1B = "eleven"
// param2A = "four"
// param2B = "for"

// param1A = "cake"
// param1B = "cake"
// param2A = "pie"
// param2B = "pie"


if (param1A === param1B || param2A === param2B) {
    console.log("True");
} else {
    console.log("False");
}
