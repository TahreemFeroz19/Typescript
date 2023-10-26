#! /usr/bin/env node
import {Sub} from "./subtract.js"
import { Sum } from "./add.js"
import { Division } from "./division.js"
import { Multiply } from "./multiply.js"
import inquirer from "inquirer"
import chalk from "chalk"
import chalkAnimation from "chalk-animation"
import { type } from "os"
import { log } from "console"

const sleep =() =>{
    return new Promise((res)=>{
        setTimeout(res, 2000)
    })
}

async function welcome() {
    let rainbowTitle=chalkAnimation.rainbow("Lets start calculation");
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

async function askQuestion(){
    await inquirer
    .prompt([
        {
            type:"list",
            name:"operator",
            message:"Which operator do you want to perform?",
            choices:["Addition", "Subtraction", "Multiplication", "Division"]
        },
        {
            type:"number",
            name: "num1",
            message:"Enter first number",
        },
        {
            type:"number",
            name: "num2",
            message:"Enter second number",            
        }
    ])
    .then((answers)=>{
        if(answers.operator=="Addition"){
            console.log(`Addition of ${answers.num1} + ${answers.num2} is ${Sum(answers.num1,answers.num2)}`);
        }
        else if(answers.operator=="Subtraction"){
            console.log(`Subtraction of ${answers.num1} - ${answers.num2} is ${Sub(answers.num1,answers.num2)}`);
            
        }
        else if(answers.operator=="Multiplication"){
            console.log(`Multiplication of ${answers.num1} * ${answers.num2} is ${Multiply(answers.num1,answers.num2)}`);
            
        }
        else if(answers.operator=="Division"){
            console.log(`Division of ${answers.num1} / ${answers.num2} is ${Division(answers.num1,answers.num2)}`);
            
        } 
    })
}
await welcome();

async function startAgain() {
    
    do{
        await askQuestion();
        var again=await inquirer.prompt({
            type: "input",
            name:"restart",
            message:"Do you want to continue? Press y or n"
        })
        
    }
    while(again.restart =='y' || again.restart=='Y')    
    
}
startAgain();