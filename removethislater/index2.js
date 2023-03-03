// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
// const path = require("path");
const fs = require("fs");

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const questions = [
  {
    type: 'input',
    name: 'empName',
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
//   {
//     type: 'input',
//     name: 'empRole',
//     message: 'Employee role: ',
//     default: 'Employee'
//   },
 
  {
    type: 'list',
    name: 'empROle',
    message: "Employee role:",
    default: 'Employee',
    choices: ['Employee', 'Manager', 'Engineer', 'Intern'],
   
  },
    {
      type: 'input',
      name: 'favorite',
      message: 'Office Number?',
      when(answers) {
        return answers.officeNo;
      },
    },
   
];
  
  inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
  })
