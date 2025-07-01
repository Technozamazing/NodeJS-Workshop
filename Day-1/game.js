import readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const target = Math.floor(Math.random() * 100);
let attempts = 0;

function guessNumber() {
    rl.question("Guess a Number between 1 and 100:", (input) => {
    const guess = parseInt(input);
    attempts++;

    guess = Number(guess);
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
})
}