import inquirer from "inquirer"

import { programmesList,courseList,enrollingCoursePrompt} from "./coursesList.js"

//variable declarations

var studIdList:any=[]

var enrollingQuestions = [
    {
        type:"input",
        name:"stdName",//Student Name
        message:"Enter Student Name",
    },
    {
        type:"input",
        name:"stdFatherName",//Student Father Name
        message:"Enter Student's Father Name",
    },
    {
        type:"input",
        name:"stdSession",//Student Session
        message:"Enter Session (Year):",
        validate:validSession
    },
    {
        type:"list",
        name:"stdProgramme",//Student Programme
        message:"Select Programme:",
        choices:programmesList,
    }
]

 var enrollingCourse = [
    {
        type:"list",
        name:"stdCourse",//Student Course
        message:"Select Course:",
        choices:courseList,
    },

]

async  function validSession(x:any){
    if(/^2\d{3}$/.test(x)){
        return true
    }else{
        return "Enter Correct Session"
    }
}

// class declaration
class Student{
    stdName:string;
    stdFatherName:string;
    stdProgramme:string;
    stdCourse:string;
    stdID:any;
    stdSession:number
    stdfee:number;
    stdduration:string;
    stdcreditHours:number;
    stdBalance:number;
    
    //constructor
    constructor(_stdName:string,_stdFatherName:string,_stdProgramme:string,_stdCourse:string,_stdSession:number,_stdfee:number,_stdduration:string,_stdcreditHours:number){
        this.stdName=_stdName
        this.stdFatherName=_stdFatherName
        this.stdProgramme=_stdProgramme
        this.stdCourse=_stdCourse
        this.stdID = this.checkIdList()
        this.stdSession = _stdSession
        this.stdfee = _stdfee
        this.stdduration = _stdduration
        this.stdcreditHours = _stdcreditHours
        this.stdBalance = 0


    }

    //to generate a unique student ID of student
    checkIdList(){
        let randomID:number = Math.floor(Math.random()*99999)
        if(studIdList.includes(randomID)){
            do{
                var againRandomID = Math.floor((Math.random()*89999)+10000)
            }while(studIdList.includes(againRandomID))
            return againRandomID
        }else{
            return randomID
        }
    }
}

async function enrollSelection() {
    await enrollingCoursePrompt()
}


async function enrollingQuestionsPrompt () {
    return inquirer.prompt(enrollingQuestions)
}


export {enrollSelection,enrollingQuestionsPrompt,enrollingCourse,Student}