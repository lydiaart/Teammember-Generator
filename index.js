const inquirer = require('inquirer');
// const { writeFile } = require('./dist/');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const pageTemplate = require('./src/page-template');
const Managercard = require('./src/Managercard');
const Engineercard = require('./src/Engineercard');
const Interncard = require('./src/Interncard');
const employeeDB = [];

const questionArray = [{
    type: "input",
    name: "name",
    message: "Please enter the employee's name. (Required)",
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter the name of the employee!');
            return false;
        }
    }
},
{
    type: "input",
    name: "id",
    message: "What is the employee's id? (Required)",
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log("Please enter the employee's id!");
            return false;
        }
    }
},
{
    type: "input",
    name: "email",
    message: "What's the employee's email?",
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log("Please enter the employee's email!");
            return false;
        }
    }
}]

const questions = () => {


    questionArray.push(
        {
            type: "input",
            name: "officeNumber",
            message: "What's the manager's office number?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's office number!");
                    return false;
                }
            }
        })

    return inquirer.prompt(questionArray)
}

questions().then(answers => {

    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    employeeDB.push(manager);
    menu();
});

const menu = () => {
    questionArray.pop()
    moreOption().then(response => {
        if (response.moreOption) {
            addEmployee().then(responseType => {
                if (responseType.employeeType === 'Engineer') {
                    addEngineer().then(engineerResponse => {
                        const engineer = new Engineer(engineerResponse.name, engineerResponse.id, engineerResponse.email, engineerResponse.GitHub)
                        employeeDB.push(engineer);
                        menu();
                    });
                }
                else if (responseType.employeeType === 'Intern') {
                    addIntern().then(internResponse => {
                        const intern = new Intern(internResponse.name, internResponse.id, internResponse.email, internResponse.school)
                        employeeDB.push(intern);
                        menu();
                    });
                }
            })
        } else {
            generateHtml();
        }
    });
}

const addEngineer = () => {
    questionArray.push({
        type: 'input',
        name: 'GitHub',
        message: "What's the engineer's GitHub username?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the engineer's GitHub username!");
                return false;
            }
        }
    });
    return inquirer.prompt(questionArray);
}

const addIntern = () => {
    questionArray.push({
        type: "input",
        name: "school",
        message: "What's the employee's school?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the employee's school!");
                return false;
            }
        }
    });
    return inquirer.prompt(questionArray);
}

let generateHtml = () => {
console.log(employeeDB);


  let cards = ""
  for (let i = 0; i < employeeDB.length; i++) {
      if (employeeDB[i].getRole() === "Manager") {
          cards = cards + Managercard(employeeDB[i])
      }
      else if (employeeDB[i].getRole() === "Engineer") {
          cards = cards + Engineercard(employeeDB[i])
      }
      else if (employeeDB[i].getRole() === "Intern") {
          cards = cards + Interncard(employeeDB[i])
      }

  }

  fs.writeFileSync("./dist/team.html", pageTemplate(cards));

}

const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'employeeType',
            message: 'Please choose the following employee',
            choices: ['Engineer', 'Intern']
        }
    ])
}

let moreOption = () => {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'moreOption',
            message: 'Do you want to add more employees?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the manager!');
                    return false;
                }
            }
        },
    ])
}