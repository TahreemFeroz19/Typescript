#!/usr/bin/env node
import inquirer from 'inquirer';
let agan=true;
class customer{
   
    private fname:string;
    private lname:string;
    private gender:string;
    private age:number;
    private mNumber:number;
   
    constructor(fname:string,lname:string,gender:string,age:number,mNumber:number){
      this.fname=fname;
      this.lname=lname;
      this.gender=gender;
      this.age=age;
      this.mNumber=mNumber;
    }

    getfullName(){
     return (this.fname + this.lname);
    }
   
}

interface ibankAccount {
    debit:(amount:number)=>void;
    credit:(amount:number)=>void;

}

class BankAccount implements ibankAccount {
    private bankBalance:number;
   
    constructor(accountbalance:number){
        this.bankBalance=accountbalance;
      
    }
    getAccountBalance(){
        return this.bankBalance
    }
  
    debit(amount:number):void{
       if (amount<0){
      return (console.log("the amount you entered is wrong"))
               }
       else if(this.bankBalance>amount){
        this.bankBalance-=amount;
        return (console.log(`transaction successful \n your new balance is : ${this.bankBalance}`))
               }       
               else{return (console.log(`you dont have enough money to do this transaction`) )}
    }

   credit(amount:number):void{
    if(amount>0){this.bankBalance+=amount;}
    else if(amount>100){this.bankBalance-=1;}
    return (console.log(`your account has been credited successfully`))

   }

}

class program{
    static async main(){
        let ans=await inquirer.prompt([
            {
                name:"fname",
                type:"input",
                message:"enter your first name"
            },
            {
                name:"lname",
                type:"input",
                message:"enter your last name"
            },
            {
                name:"gender",
                type:"input",
                message:"enter your gender"
            },
            {
                name:"age",
                type:"number",
                message:"enter your age"
            },
            {
                name:"mnumber",
                type:"number",
                message:"enter your mobile number"
            },
            {
                name:"balance",
                type:"number",
                message:"enter your bank balance"
            },

        ])

        const mycustomer=new customer(ans.fname,ans.lname,ans.gender,ans.age,ans.mnumber);
        const bankbalance=new BankAccount(ans.balance);
        console.log(`welcome  ${ mycustomer.getfullName()}`);
        console.log(`your balance is : ${bankbalance.getAccountBalance}`);
       while(agan){
        let choice = await inquirer.prompt([
            {
                name:"todo",
                type:"list",
                message:"what you want to do",
                choices:["credit","debit","check balance","exit"]
            }
          ])
         if(choice.todo=="credit"){
            let amount = await inquirer.prompt([
                {
                    name:"money",
                    type:"number",
                    message:"enter the money you want to credit"
                }
            ])
            bankbalance.credit(amount.money);
         }
         if(choice.todo=="debit"){
            let amount = await inquirer.prompt([
                {
                    name:"money",
                    type:"number",
                    message:"enter the money you want to debit"
                }
            ])
            bankbalance.debit(amount.money);
         }
         if(choice.todo=="check balance"){
          console.log(`youe balance is ${  bankbalance.getAccountBalance()}`);
         }
         if(choice.todo=="exit"){
            agan=false;
            console.log("GOOD BYE")
         }
        }
    }
}
program.main();