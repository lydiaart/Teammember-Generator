const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile } = require('./dist/generate-webpage');

const promptUser = () => {
    return inquirer.prompt([
        {
            type:'input',
            name: 'name',
            message: ''
        }
    ])
}