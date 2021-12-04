const inquirer = require('inquirer');
// const generatePage = require('./src/page-template');
// const { writeFile } = require('./dist/generate-webpage');
const fs = require('fs');
const Manager = require('./lib/Manager');
const employeeDB = [];

const questions = () => {
    return inquirer.prompt([
        {
            type:'input',
            name: 'name',
            message: 'Please enter the name of the manager. (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the manager!');
                    return false;
                }
            }
        },
        {
            type:'input',
            name: "id",
            message: "What is the manager's id? (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's id!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What's the manager's email?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's email!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What's the manager's office number?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's office number!");
                    return false;
                }
            }
        }
    ])
}


questions().then(answers => {
 const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
 employeeDB.push(manager);
 console.log(employeeDB);
});