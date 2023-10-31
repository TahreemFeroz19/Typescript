#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
const chalk_animation_1 = __importDefault(require("chalk-animation"));
let score = 0;
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 3000);
    });
};
async function welcome() {
    let neonTitle = chalk_animation_1.default.neon("WELLCOME TO THE NUMBER GUESSING GAME MADE BY TAHREEM");
    await sleep();
    neonTitle.stop();
    let rules = chalk_animation_1.default.neon(`Read the rules:
    1. you have to guess the number
    2. you will have 3 chances to guess the correct number, then you can proceed to next level
    3. there are 3 levels to the game "Easy", "Medium", "Difficult"
    4. Easy level will start from 0-25, Medium from 0-50, Difficult from 0-100
    Press any key!`);
    await sleep();
    rules.stop();
}
async function user() {
    let userName = await inquirer_1.default
        .prompt([
        {
            type: "string",
            name: "username",
            message: chalk_1.default.magenta("Enter your name: ")
        }
    ]);
    console.log(`${chalk_1.default.magenta(`Hello ${userName.username}! lets start the game\n\n ${chalk_1.default.bgMagentaBright(`EASY LEVEL`)}`)}`);
}
await welcome();
await user();
async function game(Num) {
    for (let i = 0; i < 3; i++) {
        Num = Math.floor(Math.random() * Num);
        let userNumber = await inquirer_1.default
            .prompt([
            {
                "type": "number",
                "name": "guessnumber",
                "message": chalk_1.default.magenta("Guess the number: ")
            }
        ]);
        if (Num == userNumber.guessnumber) {
            console.log(`${chalk_1.default.bgGreenBright(`correct number`)}`);
            score++;
        }
        else {
            console.log(`${chalk_1.default.bgRedBright(`wrong number`)}`);
        }
    }
}
let easyNumber = 25;
await game(easyNumber);
if (score > 1) {
    console.log(`your score is ${score}, you have passed to next level\n ${chalk_1.default.bgMagentaBright(`MEDIUM LEVEL`)}`);
    let mediumNumber = 50;
    await game(mediumNumber);
    if (score > 1) {
        console.log(`your score is ${score}, you have passed to next level\n ${chalk_1.default.bgMagentaBright(`DIFFICULT LEVEL`)}`);
        let difficultNumber = 100;
        await game(difficultNumber);
    }
    else {
        console.log(`${chalk_1.default.bgRed(`GAME OVER`)}`);
    }
}
else {
    console.log(`${chalk_1.default.bgRed(`\nGAME OVER`)}`);
}
console.log(`\n${chalk_1.default.magenta("Your total score is " + score)}`);
