const inquirer = require("inquirer");

const questions = [
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
  
  
  inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
  });

