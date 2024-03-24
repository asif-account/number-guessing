import inquirer from "inquirer";
import chalk from "chalk";
//Displaying Rules of the game
console.log(chalk.red.bold("WELCOME TO THE NUMBER GUESSING GAME!\n"));
console.log(chalk.green("Following are the Rules of the Game!\n"));
console.log("1) Computer will generate a random number btw 1 & 100");
console.log("2) You have to guess the number in  8 attempts");
console.log("3) The computer will provide you hints in guessing the number\n");
const decision = await inquirer.prompt([
    {
        type: "list",
        name: "decision",
        message: "Do you want to start the Game?",
        choices: [
            "Play",
            "Exit"
        ]
    }
]);
// Generating random number
const randomNumber = Math.floor(Math.random() * 100) + 1;
const attemps = 8;
if (decision.decision === "Play") {
    start_guessing_game();
}
else if (decision.decision === "Exit") {
    console.log("lets exit");
}
// start guessing game function
async function start_guessing_game() {
    console.log(chalk.bold.bgBlackBright("\nComputer have already guessed a number\n"));
    for (let i = 0; i < attemps; i++) {
        let userInput = await inquirer.prompt([
            {
                type: "number",
                name: "guess",
                message: "Enter your guess: "
            }
        ]);
        if (userInput.guess === randomNumber) {
            console.log(chalk.green.bold("Congrats! You got it in " + (i + 1) + " attempts!"));
            break;
        }
        else if (userInput.guess < randomNumber) {
            console.log(chalk.red("Your guess is less than random number!"));
        }
        else {
            console.log(chalk.red("Your guess is higher than random number!"));
        }
    }
}
