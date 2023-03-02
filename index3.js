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
    name: 'emp Name',
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
    type: 'list',
    name: 'empROle',
    message: "Employee role:",
    choices: ['Employee', 'Manager', 'Engineer', 'Intern'],
    filter(val){
        if (val === 'Employee') {
            employeeData();}
        else if (val === 'Manager') {
            managerData();}
        else if (val === 'Engineer') {
            engineerData();}
        else internData();}
   }       
];



function employee(){
    inquirer.prompt(questions).then((answers) => {
        console.log(JSON.stringify(answers, null, '  '));
    })
    };

function managerData(){
    inquirer.prompt(
        {
        type: 'input',
        name: 'ofcNumber',
        message: 'Office Number:'
        },
    ).then((answers) => {
        console.log(JSON.stringify(answers, null, '  '));
    })
    };

function engineerData(){
    inquirer.prompt(
        {
        type: 'input',
        name: 'gitHub',
        message: 'GitHub username:'
        },
        ).then((answers) => {
            console.log(JSON.stringify(answers, null, '  '));
        })
        };

function internData(){
    inquirer.prompt(
        {
        type: 'input',
        name: 'school',
        message: 'School:'
        },
        ).then((answers) => {
            console.log(JSON.stringify(answers, null, '  '));
        })
        };


        



//   inquirer.prompt(questionsEmp).then((data) => {
//     fs.writeFile(`${data.empName}.txt`, '', (err) => err ? console.error(err) : console.log('...README file created'));

//   inquirer.prompt(questionsMgr).then((data) => {
//     fs.writeFile(`${data.empName}.txt`, '', (err) => err ? console.error(err) : console.log('...README file created'));
  
    // fs.appendFile('README.md', readmeText, (err) => err ? console.error(err) : console.log('...README text appended'));
    
//   })});

employee();
