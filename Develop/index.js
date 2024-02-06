// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
const { type } = require('os');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',

    },

    {
        type: 'input',
        name: 'description',
        message: 'Describe what the project does?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How to install the project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How to use the project?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How to contribute to the project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How to test the project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What is the license for the project?',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile('./utils/README.md', generateMarkdown(answers));
    });
}

// Function call to initialize app
init();

