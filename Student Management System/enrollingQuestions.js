import inquirer from "inquirer";
import { programmesList, courseList, enrollingCoursePrompt } from "./coursesList.js";
//variable declarations
var studIdList = [];
var enrollingQuestions = [
    {
        type: "input",
        name: "stdName",
        message: "Enter Student Name",
    },
    {
        type: "input",
        name: "stdFatherName",
        message: "Enter Student's Father Name",
    },
    {
        type: "input",
        name: "stdSession",
        message: "Enter Session (Year):",
        validate: validSession
    },
    {
        type: "list",
        name: "stdProgramme",
        message: "Select Programme:",
        choices: programmesList,
    }
];
var enrollingCourse = [
    {
        type: "list",
        name: "stdCourse",
        message: "Select Course:",
        choices: courseList,
    },
];
async function validSession(x) {
    if (/^2\d{3}$/.test(x)) {
        return true;
    }
    else {
        return "Enter Correct Session";
    }
}
// class declaration
class Student {
    //constructor
    constructor(_stdName, _stdFatherName, _stdProgramme, _stdCourse, _stdSession, _stdfee, _stdduration, _stdcreditHours) {
        this.stdName = _stdName;
        this.stdFatherName = _stdFatherName;
        this.stdProgramme = _stdProgramme;
        this.stdCourse = _stdCourse;
        this.stdID = this.checkIdList();
        this.stdSession = _stdSession;
        this.stdfee = _stdfee;
        this.stdduration = _stdduration;
        this.stdcreditHours = _stdcreditHours;
        this.stdBalance = 0;
    }
    //to generate a unique student ID of student
    checkIdList() {
        let randomID = Math.floor(Math.random() * 99999);
        if (studIdList.includes(randomID)) {
            do {
                var againRandomID = Math.floor((Math.random() * 89999) + 10000);
            } while (studIdList.includes(againRandomID));
            return againRandomID;
        }
        else {
            return randomID;
        }
    }
}
async function enrollSelection() {
    await enrollingCoursePrompt();
}
async function enrollingQuestionsPrompt() {
    return inquirer.prompt(enrollingQuestions);
}
export { enrollSelection, enrollingQuestionsPrompt, enrollingCourse, Student };
