const readline = require('readline-sync');

let num1 = parseFloat(readline.question("Enter first number: "));
let num2 = parseFloat(readline.question("Enter second number: "));
let operator = readline.question("Enter operator (+,-,*,/): ");

let result;
switch(operator) {
    case '+':
        result = num1 + num2; break;
    case '-':
        result = num1 - num2; break;
    case '*':
        result = num1 * num2; break;
    case '/':
        result = num2 == 0 ? "Cannot divide by zero" : num1 / num2; break;
    default:
        console.log("Invalid operator");
        result = null;
}
if (result !== null) {
    console.log(`Result: ${result}`);
}