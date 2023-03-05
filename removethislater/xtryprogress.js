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
    type: 'list',
    name: 'direction',
    message: 'What would you like to do?',
    choices: ['Add an Engineer', 'Add an Intern', 'Finish building the team'],
    filter(val){
      return add = val;
    }    
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

function builder() {
  return inquirer.prompt(builder).then((answers) => {
    if (answers.is_finished) {
      return answers;
    } else {
      return getAnswers();
    }
  });
}
            

inquirer.prompt(questions).then((answers) =>
{
  console.log(JSON.stringify(answers, null, '  '));
  if (add === 'Add an Engineer') {
   return inquirer.prompt(engineer).then((answers) => {
    // inquirer.prompt(builder).then((answers) => {
    //   console.log(JSON.stringify(answers, null, '  '))
    // })
      console.log(JSON.stringify(answers, null, '  '))
   })}
  else if (add === 'Add an Intern') {
    return  inquirer.prompt(intern).then((answers) => {
      // inquirer.prompt(builder).then((answers) => {
      //   console.log(JSON.stringify(answers, null, '  '))
      // })
      console.log(JSON.stringify(answers, null, '  '))
  })}
  else console.log(JSON.stringify(answers, null, '  '))
    
})
