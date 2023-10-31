#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const subtract_js_1 = require("./subtract.js");
const add_js_1 = require("./add.js");
const division_js_1 = require("./division.js");
const multiply_js_1 = require("./multiply.js");
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_animation_1 = __importDefault(require("chalk-animation"));
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbowTitle = chalk_animation_1.default.rainbow("Lets start calculation");
    await sleep();
    rainbowTitle.stop();
    console.log(`     _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|`);
}
async function askQuestion() {
    await inquirer_1.default
        .prompt([
        {
            type: "list",
            name: "operator",
            message: "Which operator do you want to perform?",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"]
        },
        {
            type: "number",
            name: "num1",
            message: "Enter first number",
        },
        {
            type: "number",
            name: "num2",
            message: "Enter second number",
        }
    ])
        .then((answers) => {
        if (answers.operator == "Addition") {
            console.log(`Addition of ${answers.num1} + ${answers.num2} is ${(0, add_js_1.Sum)(answers.num1, answers.num2)}`);
        }
        else if (answers.operator == "Subtraction") {
            console.log(`Subtraction of ${answers.num1} - ${answers.num2} is ${(0, subtract_js_1.Sub)(answers.num1, answers.num2)}`);
        }
        else if (answers.operator == "Multiplication") {
            console.log(`Multiplication of ${answers.num1} * ${answers.num2} is ${(0, multiply_js_1.Multiply)(answers.num1, answers.num2)}`);
        }
        else if (answers.operator == "Division") {
            console.log(`Division of ${answers.num1} / ${answers.num2} is ${(0, division_js_1.Division)(answers.num1, answers.num2)}`);
        }
    });
}
await welcome();
async function startAgain() {
    do {
        await askQuestion();
        var again = await inquirer_1.default.prompt({
            type: "input",
            name: "restart",
            message: "Do you want to continue? Press y or n"
        });
    } while (again.restart == 'y' || again.restart == 'Y');
}
startAgain();
