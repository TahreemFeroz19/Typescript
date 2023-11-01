#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
//title
//add task
//task list
//which task completed
//updated list
let sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow(`TO-DO APP`);
    await sleep();
    rainbowTitle.stop();
}
await welcome();
console.log(`${chalk.bgCyanBright(`TO-DO APP`)}`);
let todos = [];
async function todolist(todos) {
    let list = await inquirer
        .prompt({
        type: "input",
        name: "todolist",
        message: `${chalk.bgCyanBright(`Add Task: `)}`,
    });
    todos.push(list.todolist);
}
await todolist(todos);
async function createtodo(todos) {
    let addMore;
    do {
        addMore = await inquirer.prompt({
            type: "input",
            name: "addList",
            message: `${chalk.bgCyanBright(`Do you want to add more task? y/n`)}`,
        });
        if (addMore.addList.toLowerCase() == "y") {
            await todolist(todos);
        }
        else if (addMore.addList.toLowerCase() == "n") {
            displayTodos(todos);
        }
    } while (addMore.addList.toLowerCase() === "y");
}
function displayTodos(todos) {
    console.log(`${chalk.bgCyanBright("Your To-Do List:")}`);
    for (let i = 0; i < todos.length; i++) {
        console.log(`${i + 1}. ${todos[i]}`);
    }
}
await createtodo(todos);
async function completeTodo() {
    let complete = await inquirer.prompt({
        type: "number",
        name: "checklist",
        message: `${chalk.bgCyanBright(`If you have completed task, enter the number to delete the task: `)}`,
    });
    if (complete.checklist > 0 && complete.checklist <= todos.length) {
        todos.splice(complete.checklist - 1, 1); // Remove the task at the specified index
        displayTodos(todos);
    }
    else {
        console.log(`${chalk.bgRed("Invalid task number. Nothing deleted.")}`);
        displayTodos(todos);
    }
}
await completeTodo();
