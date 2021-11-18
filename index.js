// TODO: Include packages needed for this application
const inquirer =  require('inquirer');
const fs = requirer('fs');
const markdown = require('./generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username? (Include your https!)',
},
{
    type: 'input',
    name: 'email',
    message: 'What is Your Email Please?'
},
{
    type: 'input',
    name: 'project',
    message: 'What is the name of your project?',
},
{
    type: 'input',
    name: 'description',
    message: 'Give a description of your project for the user:',
},
{
    type: 'list',
    name: 'license',
    message: 'What license did you use for this?',
    choices: ['ISC','MIT','Mozilla']
},
{
    type: 'input',
    name: 'install',
    message: 'What command should be run to install dependencies?',
},
{
    type: 'input',
    name: 'repo',
    message: 'What should the Repo be about?',
},
{
    type: 'input',
    name: 'contribution',
    message: 'What should the user know about repo contribution?',
},
{
    type: 'input',
    name: 'test',
    message: 'What command should be run to to run tests?',
},
]
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    writeToFile(filename, data, err => {
        if (err) {
            throw err;
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();
