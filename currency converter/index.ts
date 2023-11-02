#! /usr/bin/env node
import inquirer from "inquirer"
import chalkAnimation from "chalk-animation"

let sleep=()=>{
    return new Promise((res)=>{
        setTimeout(res,3000);
    })
}
async function welcome() {
const karaoke = chalkAnimation.karaoke('CURRENCY CONVERTER, \nconvert your money into any currency'); // Animation starts
    await sleep();
    karaoke.stop();
}
await welcome();

let convertFrom=await inquirer
    .prompt({
        type:"list",
        name:"conversionfrom",
        message:"Convert From: ",
        choices:["USD", "PKR"]
    })
let convertInto=await inquirer
    .prompt({
        type:"list",
        name:"conversioninto",
        message:"Convert into: ",
        choices:["USD", "PKR"]
    })
let amount=await inquirer
    .prompt({
        type:"number",
        name:"addamount",
        message:"Enter amount: "
    })

if(convertFrom.conversionfrom=="USD" && convertInto.conversioninto=="PKR"){
    console.log(`Your amount is ${amount.addamount*278.97}PKR`);
    
}
else if(convertFrom.conversionfrom=="PKR" && convertInto.conversioninto=="USD"){
    console.log(`Your amount is ${amount.addamount*0.036}USD`);
}else{
    console.log(`${amount.addamount}`);
    
}