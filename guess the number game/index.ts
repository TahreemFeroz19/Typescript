#! /usr/bin/env node
import inquirer  from "inquirer";
import chalk from "chalk";
import chalkAnimation, { karaoke } from "chalk-animation";
import { log } from "console";

let score:number=0;
const sleep=() =>{
    return new Promise((res)=>{
        setTimeout(res,3000);
    })
}
async function welcome() {

    let neonTitle=chalkAnimation.neon("WELLCOME TO THE NUMBER GUESSING GAME MADE BY TAHREEM");
    await sleep();
    neonTitle.stop();
    let rules=chalkAnimation.neon(`Read the rules:
    1. you have to guess the number
    2. you will have 3 chances to guess the correct number, then you can proceed to next level
    3. there are 3 levels to the game "Easy", "Medium", "Difficult"
    4. Easy level will start from 0-25, Medium from 0-50, Difficult from 0-100
    Press any key!`);
    await sleep();
    rules.stop();
}

async function user() {
    let userName=await inquirer
    .prompt([
        {
            type: "string",
            name:"username",
            message:chalk.magenta("Enter your name: ")
        }
    ])
    console.log(`${chalk.magenta(`Hello ${userName.username}! lets start the game\n\n ${chalk.bgMagentaBright(`EASY LEVEL`)}`)}`);
}
await welcome();
await user();

async function game(Num:number) {
    
    for(let i=0;i<3;i++){
        Num=Math.floor(Math.random()*Num);
    let userNumber=await inquirer
    .prompt([
        {
            "type":"number",
            "name":"guessnumber",
            "message":chalk.magenta("Guess the number: ")
        }
    ])
    
        if(Num==userNumber.guessnumber){
            console.log(`${chalk.bgGreenBright(`correct number`)}`);
            score++;
        }else{
            console.log(`${chalk.bgRedBright(`wrong number`)}`);
            
        }
    }
    
    
    
}
let easyNumber: number=25;
await game(easyNumber);
if(score>1){
    console.log(`your score is ${score}, you have passed to next level\n ${chalk.bgMagentaBright(`MEDIUM LEVEL`)}`);
    let mediumNumber: number=50;
    await game(mediumNumber);
    if(score>1){
        console.log(`your score is ${score}, you have passed to next level\n ${chalk.bgMagentaBright(`DIFFICULT LEVEL`)}`);
        let difficultNumber: number=100;
        await game(difficultNumber);
        
    }else{
        console.log(`${chalk.bgRed(`GAME OVER`)}`);
        
    }
}
else{
    console.log(`${chalk.bgRed(`\nGAME OVER`)}`);
    
}
console.log(`\n${chalk.magenta("Your total score is "+score)}`);