#! /usr/bin/env node
import inquirer from "inquirer"
import chalkAnimation from "chalk-animation"

let sleep=()=>{
    return new Promise((res)=>{
        setTimeout(res, 4000);
    })
}

async function welcome() {
    const pulse=chalkAnimation.pulse(`Word Counter`)
    await sleep();
    pulse.stop();
}
await welcome();

async function main() {
    const userInput= await getuserInput();
    const processed= removeWhitespaces(userInput);
    const characterCount=processed.length;
    const word=userInput.split(' ');
    const wordCount=word.length;

    console.log(`Total characters are ${characterCount}`);
    console.log(`Total words are ${wordCount}`);
    
}
async function getuserInput() {
    let words=await inquirer
    .prompt({
        type:"input",
        name:"para",
        message:"Start writing"
    })
    return words.para;
}

function removeWhitespaces(text:string){
    return text.replace(/\s+/g,'');
}
main();