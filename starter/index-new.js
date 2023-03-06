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
    name: 'managerName',
    message: "Manager's name: "
    },
    {
    type: 'input',
    name: 'managerID',
    message: 'Employee ID: '
    },
    {
    type: 'input',
    name: 'managerEmail',
    message: 'Email address: '
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'Office Number: '
    },
    {
      type: 'list',
      name: 'direction',
      message: 'What would you like to do?',
      choices: ['Add an Engineer', 'Add an Intern', 'Finish building the team'],
      filter(val){
        return add = val;
      }    
    },
    ]
  
  const teamAdd = [
    {
      type: 'list',
      name: 'direction',
      message: 'What would you like to do?',
      choices: ['Add an Engineer', 'Add an Intern', 'Finish building the team'],
      filter(val){
        return add = val;
      }    
    }
  ]
  
  const engineer = [
          {
            type: 'input',
            name: 'engineerName',
            message: "Engineer's Name: "
          },
          {
            type: 'input',
            name: 'engineerID',
            message: 'Employee ID?'
          },
          {
            type: 'input',
            name: 'engineerEmail',
            message: 'Employee email?'
          },
          {
            type: 'input',
            name: 'githubID',
            message: 'githubID?',
          },
          {
            type: 'list',
            name: 'direction',
            message: 'What would you like to do?',
            choices: ['Add an Engineer', 'Add an Intern', 'Finish building the team'],
            filter(val){
              return add = val;
            }    
          }
        ];
  
  const intern = [
          {
            type: 'input',
            name: 'internName',
            message: "intern's Name: "
          },
          {
            type: 'input',
            name: 'internID',
            message: 'Employee ID?'
          },
          {
            type: 'input',
            name: 'internEmail',
            message: 'Employee email?'
          },
          {
            type: 'input',
            name: 'school',
            message: 'school?',
          },
          {
            type: 'list',
            name: 'direction',
            message: 'What would you like to do?',
            choices: ['Add an Engineer', 'Add an Intern', 'Finish building the team'],
            filter(val){
              return add = val;
            }    
          }
        ];
  

const engr = new Engineer(`${answer.name}`, `${answer.empID}`, `${answers.empEmail}`, `${answers.github}`)

inquirer.prompt(questions)
            .then((answers) => fs.writeFile(outputPath, render(answers)))
            .then((answers) => console.log(JSON.stringify(answers, null, '  ')))
            .then(() => console.log('Successfully wrote to team.html'))
            .catch((err) => console.error(err));

          