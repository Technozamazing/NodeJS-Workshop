// var name = "roman"
// console.log(name);


// Block Scope vs Function Scope
if (true) {
  var userName = "roman"; // 'var' is function-scoped, so userName is accessible outside this block
  let position = "Manager";
}

console.log(userName); // Output: roman
// console.log(position); // This will throw an error because 'position' is not defined outside the block
console.log(position); // Uncommenting this line will cause a ReferenceError

