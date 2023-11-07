import inquirer from "inquirer";
import { enrollingQuestionsPrompt, enrollingCourse, Student } from "./enrollingQuestions.js";
const courseClassObjectsList = [];
export const programmesList = [];
export const courseList = [];
export const allStudentsList = [];
export const coursePopulatedList = [];
async function enrollingCoursePrompt() {
    var stdName;
    var stdFatherName;
    var stdProgramme;
    var stdCourse;
    var stdSession;
    var stdfee;
    var stdduration;
    var stdcreditHours;
    await enrollingQuestionsPrompt()
        .then((x) => {
        courseClassObjectsList.map((each) => {
            if (each.nameProgramme === x.stdProgramme) {
                if (courseList.includes(each.nameCourse)) {
                    return true;
                }
                else {
                    courseList.push(each.nameCourse);
                }
            }
        });
        stdName = x.stdName;
        stdFatherName = x.stdFatherName;
        stdProgramme = x.stdProgramme;
        stdSession = x.stdSession;
    })
        .then(async () => {
        await inquirer.prompt(enrollingCourse)
            .then((y) => {
            stdCourse = y.stdCourse;
            courseClassObjectsList.map((each) => {
                if (each.nameCourse === y.stdCourse) {
                    stdfee = each.fee;
                    stdduration = each.duration;
                    stdcreditHours = each.creditHours;
                }
            });
        });
    });
    let Student_Name = new Student(stdName, stdFatherName, stdProgramme, stdCourse, stdSession, stdfee, stdduration, stdcreditHours);
    allStudentsList.push(Student_Name);
    console.log(allStudentsList);
}
class Course {
    constructor(_nameProgramme, _nameCourse, _fee, _duration, _creditHours) {
        this.nameProgramme = _nameProgramme;
        this.nameCourse = _nameCourse;
        this.fee = _fee;
        this.duration = _duration;
        this.creditHours = _creditHours;
    }
}
//add new courses
const course1 = new Course("BS", "BS Physics", 2000, "2 Years", 120);
const course2 = new Course("MS", "MS Math", 2000, "2 Years", 120);
const course3 = new Course("PHd", "PHd Education", 2000, "2 Years", 120);
const course4 = new Course("ADP", "ADP Electrical", 5000, "2 Years", 120);
const course5 = new Course("ADP", "BS Physics", 2000, "2 Years", 120);
const course6 = new Course("MPhil", "MPhil Education", 6000, "2 Years", 120);
const course7 = new Course("MPhil", "MPhil Geography", 8000, "2 Years", 120);
courseClassObjectsList.push(course1, course2, course3, course4, course5, course6, course7);
courseClassObjectsList.map((each) => {
    if (programmesList.includes(each.nameProgramme)) {
        return true;
    }
    else {
        programmesList.push(each.nameProgramme);
    }
});
export { enrollingCoursePrompt };
