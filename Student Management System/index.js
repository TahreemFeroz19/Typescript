#! /usr/bin/env node
import inquirer from "inquirer";
import { enrollSelection } from "./enrollingQuestions.js";
import { payFeeSelection } from "./fee.js";
import { status } from "./status.js";
//questioning
export const selectOperations = [
    {
        type: "list",
        name: "operations",
        message: "Select an Operation:",
        choices: ["Enroll Student", "Pay Fee", "Show Status", "Exit"]
    },
];
//questioning
async function questioning() {
    await inquirer.prompt(selectOperations)
        .then(async (answers) => {
        if (answers.operations === "Enroll Student") { //"Enroll Student"
            await enrollSelection();
        }
        else if (answers.operations === "Exit ") { //Exit process
            process.exit();
        }
        else if (answers.operations === "Pay Fee") { //Pay fee 
            await payFeeSelection();
        }
        else if (answers.operations === "Show Status") { //show status
            await status();
        }
    });
}
//again asking prompt
const again = [
    {
        type: "input",
        name: "ask",
        message: "Do You Want to Run Again (Y|N):"
    }
];
//main function where to start
async function main() {
    do {
        await questioning();
        var aski = await inquirer.prompt(again);
    } while (aski.ask === "Y" || aski.ask === "y");
}
main();
export { questioning };
