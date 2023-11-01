#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 1000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow("Welcome to My Bank");
    await sleep();
    rainbowTitle.stop();
}
await welcome();
let username = "Ali";
let userpin = 1234;
let balance = 20000;
async function user() {
    let details = await inquirer.prompt({
        type: "number",
        name: "pin",
        message: "Enter the pin: "
    });
    if (userpin == details.pin) {
        console.log(`${chalk.blue(`Hello ${username}!`)}`);
    }
}
await user();
async function enterAmount() {
    let amountEnter = await inquirer.prompt({
        type: "number",
        name: "amount",
        message: "Enter the amount "
    });
}
async function transaction() {
    let transactionType = await inquirer
        .prompt([
        {
            type: "list",
            name: "choice",
            message: "Choose any of the transaction options:",
            choices: ["Withdraw", "Balance Inquiry", "Add Amount"]
        }
    ]);
    if (transactionType.choice == "Withdraw") {
        let amount = await inquirer.prompt({
            name: "amountenter",
            type: "number",
            message: "Enter the amount "
        });
        if (balance != 0 && !(balance < amount.amountenter)) {
            balance -= amount.amountenter;
            console.log("Your ramaining amount is " + balance);
        }
        else {
            console.log("Your balance is not enough to withdraw this amount");
        }
    }
    if (transactionType.choice == "Balance Inquiry") {
        console.log("Your total amount is " + balance);
    }
    if (transactionType.choice == "Add Amount") {
        let amount = await inquirer.prompt({
            name: "amountenter",
            type: "number",
            message: "Enter the amount "
        });
        balance += amount.amountenter;
        console.log("Your total amount is " + balance);
    }
}
transaction();
