const inquirer = require("inquirer");

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

function buildStart() {
    inquirer.prompt(manager).then((answers) =>
    
    {
      console.log(answers);
    buildQuestions();
    }
    )    
}      

function buildQuestions() {
    inquirer.prompt(builder).then((answers) => {
    buildTeam();
    })
}

function buildTeam() {
    if (add === 'Finish building team'){
        inquirer.prompt().then((answers) => {
          console.log(answers);
    })  }
    if (add === 'Add an Engineer') {
         inquirer.prompt(engineer).then((answers) => {
         buildQuestions();
         })
    }
    if (add === 'Add an Intern') {
     inquirer.prompt(intern).then((answers) => {
         buildQuestions();
     })
    }
  }


buildStart();