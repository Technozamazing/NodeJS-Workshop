// Variables declared with **var** are hoisted (moved to the top), but not initialized
// **let** and **const** are also hoisted, but they remain in a temporal dead zone until initialized

console.log(a); // undefined
var a = 5;

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;

console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 15;

console.log(d); // undefined
var d = 20;


/*
var can be redeclared and reassigned
let can be reassigned but not redeclared    
const cannot be reassigned or redeclared
*/ 