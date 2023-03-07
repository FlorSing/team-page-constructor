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

const manager = [
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
  ]

const builder = [
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
        
      ];

const html = [];

function buildStart() {
    inquirer.prompt(manager).then((answers) =>{
      render(new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.officeNumber));
      // html.push(e);
      // console.log(html);
      // fs.writeFile(__dirname, "output", `${answer.managerName}.json`,JSON.stringify(answers, null, '  ') )
      buildQuestions();
    })    
}      

function buildQuestions() {
    inquirer.prompt(builder).then((answers) => {
    buildTeam();
    return answers;
    })
}

function buildTeam() {
    if (add === 'Finish building team'){
      console.log(JSON.stringify(answers, null, '  '))
  }
    if (add === 'Add an Engineer') {
         inquirer.prompt(engineer).then((answers) => {
          render(new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.github));
          // html.push(e);
          // console.log(html);
         buildQuestions();
         })
    }
    if (add === 'Add an Intern') {
     inquirer.prompt(intern).then((answers) => {
          render(new Intern(answers.internName, answers.internID, answers.internEmail, answers.school));
          // html.push(e);
          // console.log(html);
         buildQuestions();
     })
    }
  }

// console.log[html];
buildStart();

// const engr = new Engineer(`${answer.name}`, `${answer.empID}`, `${answers.empEmail}`, `${answers.github}`)

// inquirer.prompt(questions)
//             .then((answers) => fs.writeFile(outputPath, render(answers)))
//             .then((answers) => console.log(JSON.stringify(answers, null, '  ')))
//             .then(() => console.log('Successfully wrote to team.html'))
//             .catch((err) => console.error(err));

          