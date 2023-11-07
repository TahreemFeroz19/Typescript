#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"
import { log } from "util";

// class Player{
//     name:string
//     fuel=100
//     constructor(name:string){
//         this.name=name;
//     }
// }

// class Opponent{
//     name:string
//     fuel=100
//     constructor(name:string){
//         this.name=name;
//     }
// }

// let player= await inquirer.prompt(
//     {
//         type:"input",
//         name:"name",
//         message:"Enter your player name: "
//     }
// )

// let opponent=await inquirer.prompt({
//     type:"list",
//     name:"select",
//     message:"Select your opponent: ",
//     choices:["Skeleton", "Assasin", "Zombie"]
// })
// //passing these values
// let p1=new Player(player.name);
// let o1=new Opponent(opponent.select);

// if (opponent.select=="Skeleton"){
//     console.log(`${chalk.bold.green(player.name)} VS ${chalk.bold.red(opponent.select)}`);
//     let ask=await inquirer.prompt({
//         type:"list",
//         name:"opt",
//         message:"Select your option: ",
//         choices:[""]
//     })
// }
class Player {
    name: string;
    health: number = 100;
    healthPotions: number = 3;
  
    constructor(name: string) {
      this.name = name;
    }
  }
  
  const enemies = ["skeleton", "assassin", "zombie"];
  const healthPotionDropChance=50;
  console.log(chalk.bold("\t\tWelcome To The Dungeon"))
  console.log(chalk.red("----------------------------------------------"))
  function getRandomEnemy() {
    const randomIndex = Math.floor(Math.random() * enemies.length);
    return enemies[randomIndex];
  }
  
  function healthdecrease(player: Player) {
    const decreaseAmount = Math.floor(Math.random() * 16) + 15;
    player.health -= decreaseAmount;
    if (player.health < 0) {
      player.health = 0;
    }
    console.log(`Player's health decreased by ${decreaseAmount} to ${chalk.green(player.health)}`);
  }
  
  function useHealthPotion(player: Player) {
    if (player.healthPotions > 0) {
      player.health += 25;
      player.healthPotions--;
      console.log(chalk.blue`You drank a health potion. Your health is now ${chalk.green(player.health)}`);
      console.log(`Health Potions remaining: ${player.healthPotions}`);
    } else {
      console.log(chalk.red`You are out of health potions!`);
    }
  }
  
  async function main() {
    const playerName = "player";
    const player = new Player(playerName);
  
    const enemy = getRandomEnemy();
  
    console.log(`\t #${enemy} has appeared!#\n`);
  
    let variable = `${chalk.green(playerName)} vs ${chalk.red(enemy)}`;
    console.log(variable);
    const opponentHealth = Math.floor(Math.random() * 16) + 15;
    console.log(`${chalk.red(enemy)}'s health: ${opponentHealth}`);
    console.log(`Your health: ${chalk.green(player.health)}`);
    console.log(`Health Potions remaining: ${player.healthPotions}`);
  let running=true;
    while(running){let newobject = await inquirer.prompt([
      {
        name: "action",
        type: "list",
        message: "Choose what you want to do",
        choices: ["Attack", "Run", "Drink health potion"], 
      },
    ]);
  
    if (newobject.action === "Attack") {
      console.log(chalk.blue`You attack the opponent!`);
  
      healthdecrease(player);
  
      if (player.health >= opponentHealth) {
        console.log(chalk.green`Your opponent ${enemy} has been defeated!`);
      }
  
      if (player.health <= 0) {
        console.log(chalk.red`You have been defeated by the opponent.You are too weak to go`);
  break;
      }
      
      
      
    } else if (newobject.action === "Run") {
      console.log(chalk.blue`You have run away from the enemy.`);
      } else if (newobject.action === "Drink health potion") {
      useHealthPotion(player);
    }
  if (Math.random()*100<healthPotionDropChance){
    let potions1=player.healthPotions++;
    console.log(chalk.blue(`#The ${enemy} dropped a health potion! # `));
    console.log(chalk.blue(`You now have ${player.healthPotions} health potions.#`));
    
    
  }  
    const cont=await inquirer.prompt({
      type:"list",
      name:"continue",
      message:"What would you like to do now?",
      choices:["Continue Fighting","Exit Dungeon"]
    })
    if (cont.continue=="Exit Dungeon"){
      running=false
  
    }
  }
  console.log(chalk.yellow("#####################"));
  console.log(chalk.yellow("#Thanks For Playing#"));
  console.log(chalk.yellow("######################"));
  }
  main();