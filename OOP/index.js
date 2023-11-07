import inquirer from 'inquirer';
import chalk from 'chalk';
// Define a Book class to represent books in the library
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.available = true; // Assume all books are initially available
    }
    // Method to check out the book
    checkOut() {
        if (this.available) {
            this.available = false;
            console.log(`${chalk.green(this.title)} by ${chalk.cyan(this.author)} has been ${chalk.red('checked out')}.`);
        }
        else {
            console.log(`${chalk.red(this.title)} is already ${chalk.red('checked out')}.`);
        }
    }
    // Method to return the book
    returnBook() {
        if (!this.available) {
            this.available = true;
            console.log(`${chalk.green(this.title)} has been ${chalk.blue('returned')}.`);
        }
        else {
            console.log(`${chalk.blue(this.title)} is already ${chalk.blue('available')} in the library.`);
        }
    }
}
// Create an array to store the library's collection of books
const library = [];
// Function to display the available books in the library
function displayAvailableBooks() {
    console.log(`${chalk.yellow('Available Books:')}`);
    library.forEach((book, index) => {
        if (book.available) {
            console.log(`${chalk.green(index + 1)}. ${chalk.green(book.title)} by ${chalk.cyan(book.author)}`);
        }
    });
}
// Main program
console.log(chalk.magenta('Welcome to the Library CLI'));
// Add some books to the library
library.push(new Book('The Great Gatsby', 'F. Scott Fitzgerald'));
library.push(new Book('To Kill a Mockingbird', 'Harper Lee'));
library.push(new Book('1984', 'George Orwell'));
library.push(new Book('Pride and Prejudice', 'Jane Austen'));
function runLibrary() {
    displayAvailableBooks();
    inquirer
        .prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: ['Check Out a Book', 'Return a Book', 'Exit'],
        },
    ])
        .then((answers) => {
        if (answers.action === 'Check Out a Book') {
            inquirer
                .prompt([
                {
                    type: 'input',
                    name: 'bookIndex',
                    message: 'Enter the index of the book you want to check out:',
                    validate: (value) => {
                        const parsedValue = parseInt(value);
                        return !isNaN(parsedValue) && parsedValue >= 1 && parsedValue <= library.length;
                    },
                },
            ])
                .then((answers) => {
                const bookIndex = parseInt(answers.bookIndex) - 1;
                library[bookIndex].checkOut();
                runLibrary();
            });
        }
        else if (answers.action === 'Return a Book') {
            inquirer
                .prompt([
                {
                    type: 'input',
                    name: 'bookIndex',
                    message: 'Enter the index of the book you want to return:',
                    validate: (value) => {
                        const parsedValue = parseInt(value);
                        return !isNaN(parsedValue) && parsedValue >= 1 && parsedValue <= library.length;
                    },
                },
            ])
                .then((answers) => {
                const bookIndex = parseInt(answers.bookIndex) - 1;
                library[bookIndex].returnBook();
                runLibrary();
            });
        }
        else {
            console.log(chalk.magenta('Thank you for using the Library CLI.'));
        }
    });
}
runLibrary();
