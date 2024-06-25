"use strict";

// fname="Pawan";
// console.log(fname);

// Rules for naming variables
// 1. Variable name should not start with a number
// 2. Variable name should not contain special characters except $ and _
// 3. Variable name should not contain spaces
// 4. Variable name should not be a keyword
// 5. Variable name should be meaningful

// let var and const
// var is globally scoped
// let and const are block scoped

// String indexing
let name="Pawan";
console.log(name[100]); // undefined
console.log(name.slice()); // Pawan
// P a w a n
// 0 1 2 3 4

// String Methods

let age=22;
console.log(typeof(age));
age=String(age);
console.log(typeof(age));

let s1="17";
let s2="10";
let nstr=+s1 + +s2;
console.log(nstr);

// undefined
let fs;
console.log(fs);

// Changes Made here
// map() method
// filter() method
// reduce() method

// sort() method
let arr=[1,2,3,4,5,6,7,8,9];
console.log(arr.sort());
// Splice() method
// Slice() method
