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

const questionsEmp = [
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
  {
    type: 'input',
    name: 'empRole',
    message: 'Employee role: ',
    default: 'Employee'
  },
 
//   {
//     type: 'list',
//     name: 'empROle',
//     message: "Employee role:",
//     choices: ['Manager', 'Engineer', 'Intern'],
    
//     when: input => {
//             return input.role == "Engineer"
//         },
//         type: "input",
//         name: "github",
//         message: "Enter your github username:",
//     },

//     //when role is intern is true, ask this question
//     {
//         when: input => {
//             return input.role == "Intern"
//         },
//         type: "input",
//         name: "school",
//         message: "What's the school you enrolled in ?",
//     },

// }

//   .then(() => {
//         inquirer.prompt({
//         type: 'list',
//         name: 'beverage',
//         message: 'And your favorite beverage?',
//         choices: ['Pepsi', 'Coke', '7up', 'Mountain Dew', 'Red Bull'],
//         });
//     })

//  {
//     type: "input",
//     name: "github",
//     message: "Enter your github username:",
//     when: (answers) => {
//         if (answers.employeeTitle === "Engineer") {
//             return true;
//         }
// }}

    {
      type: 'input',
      name: 'ofcNumber',
      message: 'Office Number:'
    },
    {
      type: 'input',
      name: 'empRole',
      message: 'Employee role: ',
      default: 'Manager'
    }
   
  ];
  
  const questionsEngr = [
    {
      type: 'input',
      name: 'gitHub',
      message: 'GitHub username:'
    },
    {
      type: 'input',
      name: 'empRole',
      message: 'Employee role: ',
      default: 'Engineer'
    }
   
  ];

  // import inquirer from '../lib/inquirer.js';

  // const questions = [
  //   {
  //     type: 'confirm',
  //     name: 'bacon',
  //     message: 'Do you like bacon?',
  //   },
  //   {
  //     type: 'input',
  //     name: 'favorite',
  //     message: 'Bacon lover, what is your favorite type of bacon?',
  //     when(answers) {
  //       return answers.bacon;
  //     },
  //   },
  //   {
  //     type: 'confirm',
  //     name: 'pizza',
  //     message: 'Ok... Do you like pizza?',
  //     when(answers) {
  //       return !likesFood('bacon')(answers);
  //     },
  //   },
  //   {
  //     type: 'input',
  //     name: 'favorite',
  //     message: 'Whew! What is your favorite type of pizza?',
  //     when: likesFood('pizza'),
  //   },
  // ];
  
  // function likesFood(aFood) {
  //   return function (answers) {
  //     return answers[aFood];
  //   };
  // }
  
  // inquirer.prompt(questions).then((answers) => {
  //   console.log(JSON.stringify(answers, null, '  '));
  // });


  inquirer.prompt(questionsEmp).then((data) => {
    fs.writeFile(`${data.empName}.txt`, JSON.stringify(answers, null, '  '), (err) => err ? console.error(err) : console.log('...README file created'));

  inquirer.prompt(questionsMgr).then((data) => {
    fs.writeFile(`${data.empName}.txt`, '', (err) => err ? console.error(err) : console.log('...README file created'));
  
    // fs.appendFile('README.md', readmeText, (err) => err ? console.error(err) : console.log('...README text appended'));
    
  })});