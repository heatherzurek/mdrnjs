// console.log('hello world');
// console.log('2');
//function to log values to console

//variables store a value
//that you can use in the file

let age = 25;
let year = 2019;
//this value is now stored in memory
//we can access it later since its stored in memory
// console.log(age, year);
age = 30;
const points = 100;

//we use a const if we dont want the value to change

var score = 75;

//variables cannot start with a number
//reserved keywords we cant use: let, const

//7 data types in js
//number, string, boolean
//null - explicity set a variable with no value //undefined - automatically given to vars that havent been defined
//object complex data structures, arrays, dates, literals, ect
//symbol new addition to js
//js is a loosely typed language because you can change variable data types

//strings
let email = 'heather.zurek@gmail.com';
// console.log('email');
//concatenation (joining things together)
let firstName = 'Heather';
let lastName = 'Zurek';

let fullName = firstName + ' ' + lastName;
// console.log(fullName);

//getting characters
//with square bracket notation
// console.log(fullName[3]);
//a string has methods and properties
// console.log(fullName.length);

//strings have several methods
//a function is a snippet of code that preforms a task
//a method is just a function thats assosiated with a perticular object or datatype
// console.log(fullName.toUpperCase());
// let result = fullName.toLowerCase();
// console.log(fullName);

//these methods do not alter the original value
//some methods do

let index = email.indexOf('@');
// when we pass a value into a method its an argument
//or parameter
// console.log(index);

// let result = email.lastIndexOf('m');
// let result = email.slice(2, 6)
// let result = email.substr(4, 10)
// let result = email.replace('m', 'w');
// let result = email.replace('e', 'w');
// console.log(result);

let radius = 10;
const pi = 3.14;
//math operations
// +, -, *, /, **, %
let calc = 10 * 3.14;
console.log(radius, pi);
console.log(10/2);
// let result = radius % 3;
// let result = pi * radius**2;

//order of operation - dictates how we preform calculations
// B I D M A S Bracekets Indices Division Multiplation Addition Subtraction

let result = 5 * (10-3)**2;
console.log(result);

let likes = 10;

//shorthand notation
likes ++;
likes --;
likes += 10;
likes -= 5;
likes *= 2;
likes /= 2;
//shorthand operation is the same as likes = likes + 1; 
console.log(likes);