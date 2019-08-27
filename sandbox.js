// console.log('hello world');
// console.log('2');
//function to log values to console

//variables store a value
//that you can use in the file

// let age = 25;
// let year = 2019;
//this value is now stored in memory
//we can access it later since its stored in memory
// // console.log(age, year);
// age = 30;
// const points = 100;

//we use a const if we dont want the value to change

// var score = 75;

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

// let result = 5 * (10-3)**2;

let likes = 10;

//shorthand notation
likes ++;
likes --;
likes += 10;
likes -= 5;
likes *= 2;
likes /= 2;
//shorthand operation is the same as likes = likes + 1; 
// console.log(likes);

//NaN - not a number

// let result = 'the blog has ' + likes + ' likes';

//template string lets us inject variables 
const title = 'Best reads of 2019';
const author = 'Mario';

//concatenation way
// let result = 'The blog called ' + title + ' by '+ author + ' has ' + likes + ' likes';

//template strings (template literal)
let templitresult = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(templitresult);

//creating html templates
let html = `
<h2>${title}</h2>
<p>By ${author}</p>
<span>This blog has ${likes} likes</span>
`
console.log(html);

//arrays store collections of things
//[] array syntax
let ninjas = ['Donatello', 'Raphael', 'Michelangelo', 'Leonardo da Vinci'];
// ninjas[1] = 'Casey Jones';
// console.log(ninjas[1]);

let ages = [29, 32, 36];
console.log(ages[2]);

let random = ['Desmond', 6, 'Heather', 29, 'Bryan', 32];
console.log(random);

// console.log(ninjas.length);

//array methods
// let result = ninjas.join(', ')
// let result = ninjas.indexOf('Casey Jones');
// let result = ninjas.concat(['Splinter', 'April']);
// let result = ninjas.push('TMNT')
//push returns the length of the new array
//destructive method
// let result = ninjas.pop();
// console.log(result);

//null and undefined both represents a complete lack of value
// let age = null;
//null is intentional lack of value
// console.log(age, age + 3, `the age is ${age}`);
//browser automatically assigns the value undefined when it doesnt have one

//booleans and comparisons
console.log(true, false);

let emails = 'heather.zurek@gmail.com';
let names = ['heather', 'desmond', 'bryan'];
// let result = names.includes('desmond');
//.includes returns a boolean
// console.log(result);

let myAge = 29;
//comparison operators all return booleans
// console.log(myAge == 29);
// console.log(myAge == 30);
// console.log(myAge != 30);
// console.log(myAge > 20);
// console.log(myAge < 30);
// console.log(myAge <= 29);
// console.log(myAge >= 30);
let myName = 'heather';
// console.log(myName == 'heather');
// console.log(myName > 'al');
//abstract equality or loose equality
//== is loose comparison which means different types can be equal
console.log(myAge != '29');


//= sets value
//== asks if 2 things are the same
//returns boolean
//strict equality is === 
//checking if its the same value or type

//type conversion
let score = '100';
let score2 = '200';
score = Number(score);
console.log(score + 1);
console.log(typeof score);

// let result = Number('hello');
// console.log(result);

let result = String(50);
console.log(result, typeof result);