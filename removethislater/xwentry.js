const inquirer = require("inquirer");

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
      type: 'confirm',
      name: 'engineer',
      message: 'engineer?',
    },
    {
      type: 'input',
      name: 'githubID',
      message: 'githubID?',
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
      },
    ];
  
  
  inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
  });

