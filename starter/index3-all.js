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
    choices: ['Add an Engineer', 'Add an Intern', 'Finish building team'],
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
      const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.officeNumber);
      buildQuestions();
      html.push(manager);
    })    
}      

function buildQuestions() {
    inquirer.prompt(builder).then((answers) => {
    buildTeam();
    return answers;
    })
}

function buildTeam() {
    if (add === 'Add an Engineer') {
         inquirer.prompt(engineer).then((answers) => {
           const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.githubID);
         buildQuestions();
        html.push(engineer);
         })
    }

    if (add === 'Add an Intern') {
     inquirer.prompt(intern).then((answers) => {
          const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.school);
         buildQuestions();
         html.push(intern);
     })
    }

    if (add === 'Finish building team'){

      };
       buildPage();
  }


function buildPage() {

    fs.writeFile(outputPath, render(html), (err) => err? console.error(err) : console.log('..created team.html file'));
};


buildStart();


