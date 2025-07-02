import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter an integer between 1 and 7: ", (input)=> {
    const day = parseInt(input);
    if (isNaN(day) || day < 1 || day > 7) {
        console.log("Invalid input, please enter a number between 1 and 7.");
        rl.close();
        return;
    }
    switch (day) {
        case 1: console.log("Sunday"); break;
        case 2: console.log("Monday"); break;
        case 3: console.log("Tuesday"); break;  
        case 4: console.log("Wednesday"); break;
        case 5: console.log("Thursday"); break;
        case 6: console.log("Friday"); break;
        case 7: console.log("Saturday"); break;
        default: console.log("Invalid");
    }
    rl.close();
});