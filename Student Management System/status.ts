import inquirer from "inquirer"
import { allStudentsList } from "./coursesList.js"
import { validID } from "./fee.js"
import chalk from "chalk"


const statusQuestions = [
    {
        type: "input",
        name: "stud_ID",
        message:"Enter Student ID:",
        validate: validID
    },
]

async function status() {
    await inquirer.prompt(statusQuestions)
    .then((valID)=>{
        const student = allStudentsList.find((x: any) => x.stdID === parseInt(valID.stud_ID));
        console.log(`${student}`);
        console.log(`
        ${chalk.redBright(`<=== STUDENT CREDENTIALS ==>`)}
        ${chalk.greenBright(`Student ID`)} = ${student.stdID}
        ${chalk.greenBright(`Student Name`)} = ${student.stdName}
        ${chalk.greenBright(`Father Name`)} = ${student.stdFatherName}
        
        ${chalk.redBright(`<=== ENROLLMENT DETAIL ==>`)}
        ${chalk.greenBright(`Enrolled Programme`)} = ${student.stdProgramme}
        ${chalk.greenBright(`Enrolled Course`)} = ${student.stdCourse}
        ${chalk.greenBright(`Session`)} = ${student.stdSession}
        ${chalk.greenBright(`Duration`)} = ${student.stdduration}
        ${chalk.greenBright(`Credit Hours`)} = ${student.stdcreditHours}

        ${chalk.redBright(`<=== FEE STATUS ==>`)}
        ${chalk.greenBright(`Pending Payment`)} = ${student.stdfee}
        ${chalk.greenBright(`Balance`)} = ${student.stdBalance}
        `);
        
    })


}

export{status}