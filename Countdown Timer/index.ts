#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  function waitForPlayerInput(prompt: string): Promise<string> {
    return new Promise<string>((resolve) => {
      rl.question(prompt, (answer) => {
        resolve(answer);
      });
    });
  }
  
  class CountdownTimer {
    private timer: NodeJS.Timeout | null = null;
  
    start(duration: number) {
      let remainingSeconds = duration;
  
      this.timer = setInterval(() => {
        this.displayTime(remainingSeconds);
  
        if (remainingSeconds === 0) {
          this.stop();
        } else {
          remainingSeconds--;
        }
      }, 1000);
    }
  
    stop() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
        console.log(chalk.red.bold('\nTime\'s up!'));
        rl.close();
      }
    }
  
    displayTime(seconds: number) {
      process.stdout.clearLine(0);
      process.stdout.cursorTo(0);
      process.stdout.write(chalk.green.bold(`Time Left: ${seconds} seconds`));
    }
  }
  
  console.log(chalk.yellow.bold('Welcome to the Countdown Timer CLI\n'));
  
  (async () => {
    const durationInput = await waitForPlayerInput('Enter the countdown duration (seconds): ');
  
    const duration = parseInt(durationInput, 10);
  
    if (isNaN(duration) || duration <= 0) {
      console.log(chalk.red('Invalid input. Please enter a positive number.'));
      rl.close();
      return;
    }
  
    const timer = new CountdownTimer();
    timer.start(duration);
  })();