const inquirer = require("inquirer");

const managerQuestions = [
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
    choices: ['Add an Engineer', 'Add an Intern', 'Finish building team'],
    // filter (val) {
    //     return add = val;
    // }
  when: (answers) => {
    if (answers.direction === 'Add an Engineer') {
      inquirer.prompt(engineerQuestions)

  };
  },
}
];

const  engineerQuestions = [
    {
    type: 'input',
    name: 'engineerName',
    message: "Engineer's Name: "
    },
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


// function addEngineer() {
//     inquirer.prompt(engineerQuestions)
// }

const internQuestions = [
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
        }
    ];

// function addIntern() {
//     inquirer.prompt(internQuestions)
// }
        
function getAnswers() {
        if (add === 'Add an Engineer') {
            inquirer.prompt(engineerQuestions)
        }
        else if (add === 'Add an Intern') {
            inquirer.prompt(internQuestions)
        } 
        return getAnswers();
      }
;

  
inquirer.prompt(managerQuestions).then((answers) => {
    // getAnswers();
    (console.log(JSON.stringify(answers, null, '  ')))
    // .catch((error) => {});
})