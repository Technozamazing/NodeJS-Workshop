const otp = Math.floor(Math.random() * 10000);

console.log(`Your OTP is: ${otp}`);


// there are four type of function declared
// 1. Function Declaration
function greet() {  
    console.log("Hello, World!");
}       
// 2. Function Expression
const greetExpression = function() {
    console.log("Hello, World from Expression!");
}   
// 3. Arrow Function
const greetArrow = () => {
    console.log("Hello, World from Arrow Function!");
}
// 4. Immediately Invoked Function Expression (IIFE)
(function() {
    console.log("Hello, World from IIFE!");
})();
// 5. Named Function Expression
const greetNamed = function namedFunction() {
    console.log("Hello, World from Named Function Expression!");
}       
// 6. Async Function
async function greetAsync() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Hello, World from Async Function!");
            resolve();
        }, 1000);
    });
}
// 7. Generator Function
function* greetGenerator() {
    yield "Hello, World from Generator Function!";
}   
// 8. Function with Parameters
function greetWithParams(name) {
    console.log(`Hello, ${name}!`);
}
// 9. Function with Default Parameters
function greetWithDefault(name = "Guest") {
    console.log(`Hello, ${name}!`);
}
// 10. Function with Rest Parameters
function greetWithRest(...names) {
    names.forEach(name => {
        console.log(`Hello, ${name}!`);
    });
}
// 11. Function with Spread Operator
function greetWithSpread(...names) {
    const greetings = names.map(name => `Hello, ${name}!`);
    console.log(greetings.join("\n"));
}
// 12. Function with Callback
function greetWithCallback(name, callback) {    
    console.log(`Hello, ${name}!`);
    callback();
}
// 13. Function with Closure
function greetWithClosure(name) {
    return function() {
        console.log(`Hello, ${name} from Closure!`);
    };
}
// 14. Function with Context (this)
const person = {
    name: "John",
    greet: function() {
        console.log(`Hello, ${this.name}!`);
    }
};
// 15. Function with Bind
function greetWithBind() {
    console.log(`Hello, ${this.name}!`);
}
const boundGreet = greetWithBind.bind({ name: "Jane" });
// 16. Function with Call
function greetWithCall() {
    console.log(`Hello, ${this.name}!`);
}
greetWithCall.call({ name: "Jack" });
// 17. Function with Apply
function greetWithApply(greeting) {
    console.log(`${greeting}, ${this.name}!`);
}
greetWithApply.apply({ name: "Jill" }, ["Hi"]);
// 18. Function with Throttle
function throttle(func, delay) {
    let lastCall = 0;
    return function(...args) {
        const now = Date.now();
        if (now - lastCall >= delay) {
            lastCall = now;
            return func(...args);
        }
    };
}
// 19. Function with Debounce
function debounce(func, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func(...args);
        }, delay);
    };
}
// 20. Function with Memoization