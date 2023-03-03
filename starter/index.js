const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const questions = [
    {
    type: 'input',
    name: 'name',
    message: 'Employee name:'
    },
    {
    type: 'input',
    name: 'empID',
    message: 'Employee ID: '
    },
    {
    type: 'input',
    name: 'empEmail',
    message: 'Employee email: '
    },
    {
        type: 'confirm',
        name: 'manager',
        message: 'manager?'
      },
      {
        type: 'input',
        name: 'officeno',
        message: 'office no?',
        when(answers) {
          return answers.manager;
        },
      },
      {
        type: 'confirm',
        name: 'engineer',
        message: 'engineer?',
      },
      {
        type: 'input',
        name: 'githubID',
        message: 'githubID?',
        when(answers) {
          return answers.engineer;
        },
      },
      {
        type: 'confirm',
        name: 'intern',
        message: 'intern?',
        },
        {
        type: 'input',
        name: 'school',
        message: 'school?',
        when(answers) {
          return answers.intern;
          },
        },
];

inquirer.prompt(questions)
            .then((answers) => writeFileAsync('team.html', render(answers)))
            .then(() => console.log('Successfully wrote to team.html'))
            .catch((err) => console.error(err));
