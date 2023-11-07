import inquirer from "inquirer"

import { enrollingQuestionsPrompt, enrollingCourse,Student } from "./enrollingQuestions.js";

const courseClassObjectsList:any = []
export const programmesList:any = []
export const courseList:any = []
export const allStudentsList:any = []
export const coursePopulatedList:any = []

async function enrollingCoursePrompt () {
    var stdName:any;
    var stdFatherName:any;
    var stdProgramme:any;
    var stdCourse:any;
    var stdSession:any;
    var stdfee:any
    var stdduration:any
    var stdcreditHours:any

    await enrollingQuestionsPrompt()
    .then((x:any)=>{
            courseClassObjectsList.map((each:any)=>{
                if(each.nameProgramme === x.stdProgramme){
                    
                    if(courseList.includes(each.nameCourse)){
                        return true
                    }else{
                        courseList.push(each.nameCourse)
                    }
                }
                

                
        })
        stdName = x.stdName
        stdFatherName = x.stdFatherName
        stdProgramme = x.stdProgramme
        stdSession = x.stdSession
})  
    .then(async()=>{
        await inquirer.prompt(enrollingCourse)
        .then((y:any)=>{
            stdCourse = y.stdCourse
            courseClassObjectsList.map((each:any)=>{
                if(each.nameCourse === y.stdCourse){
                    stdfee = each.fee
                    stdduration = each.duration
                    stdcreditHours = each.creditHours

                }

            })
            
        })
})
    
    let Student_Name  = new Student(stdName,stdFatherName,stdProgramme,stdCourse,stdSession,stdfee,stdduration,stdcreditHours)
    allStudentsList.push(Student_Name)

    console.log(allStudentsList);
}

class Course {
    nameProgramme:string;    
    nameCourse:string;
    fee:number;
    duration:string;
    creditHours:number;

    constructor(_nameProgramme:string,_nameCourse:string,_fee:number,_duration:string,_creditHours:number){
        this.nameProgramme = _nameProgramme
        this.nameCourse=_nameCourse
        this.fee=_fee
        this.duration=_duration
        this.creditHours=_creditHours
    }
}

//add new courses
const course1 = new Course("BS","BS Physics",2000,"2 Years",120)
const course2 = new Course("MS","MS Math",2000,"2 Years",120)
const course3 = new Course("PHd","PHd Education",2000,"2 Years",120)
const course4 = new Course("ADP","ADP Electrical",5000,"2 Years",120)
const course5 = new Course("ADP","BS Physics",2000,"2 Years",120)
const course6 = new Course("MPhil","MPhil Education",6000,"2 Years",120)
const course7 = new Course("MPhil","MPhil Geography",8000,"2 Years",120)


courseClassObjectsList.push(course1,course2,course3,course4,course5,course6,course7)


courseClassObjectsList.map((each:any)=>{
    if(programmesList.includes(each.nameProgramme)){
        return true
    }else{
        programmesList.push(each.nameProgramme)
    }
})

export {enrollingCoursePrompt}