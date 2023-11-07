import inquirer from "inquirer";
import { allStudentsList } from "./coursesList.js";
const feeQuestions = [
    {
        type: "input",
        name: "stud_ID",
        message: "Enter Student ID:",
        validate: validID
    },
    {
        type: "input",
        name: "depositFees",
        message: "Fee Received:",
        validate: validNumber,
        when: (answers) => answers.stud_ID
    }
];
function validNumber(num) {
    if (num) {
        if (isNaN(num)) {
            return "Enter Valid Number";
        }
        else {
            return true;
        }
    }
    else {
        return "Enter Some Value";
    }
}
function validID(input) {
    if (input) {
        if (isNaN(input)) {
            return "Enter Valid ID";
        }
        else {
            const student = allStudentsList.find((x) => x.stdID === parseInt(input));
            if (student) {
                return true; // Input is valid
            }
            else {
                return "Student with this ID does not exist.";
            }
        }
    }
    else {
        return "Enter Student ID";
    }
}
// function if selection is " Pay Fee"
async function payFeeSelection() {
    await inquirer.prompt(feeQuestions)
        .then((xy) => {
        if (allStudentsList.length > 0) {
            const stdState = allStudentsList.find((x) => x.stdID === parseInt(xy.stud_ID));
            let balanceCheck = stdState.stdfee - parseInt(xy.depositFees);
            if (balanceCheck >= 0) {
                stdState.stdfee = balanceCheck;
            }
            else {
                stdState.stdfee = 0;
                stdState.stdBalance = Math.abs(balanceCheck);
            }
        }
        else {
            return "Enter Students Credentials First";
        }
    });
}
export { payFeeSelection, validNumber, validID };
