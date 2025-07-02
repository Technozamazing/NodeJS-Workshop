//NodeJS Input through npm package readline-sync

const readline = require('readline-sync');

const target = Math.floor(Math.random() * 100);
let attempts = 0;

function guessNumber() {
    let guess = readline.question("guess Number:");
    attempts++;

    if (isNaN(guess)) {
        console.log('Invalid input! Please enter a valid number.');
        guessNumber();
        return;
    }
    if (guess < 0 || guess > 100) {
        console.log('Invalid input! Please enter a number between 0 and 100.');
        guessNumber();
        return;
    }
    if (guess < target) {
        console.log('Too low! Try again.');
        guessNumber();
    } else if (guess > target) {
        console.log('Too high! Try again.');
        guessNumber();
    } else { 
        console.log(`Congratulations! You've guessed the number ${target} in ${attempts} attempts.`);
        console.log('Thank you for playing!');
        return;
    }
}

console.log("Welcome to the Guess the Number Game!");
console.log("I have selected a number between 0 and 100. Try to guess it!");
guessNumber();