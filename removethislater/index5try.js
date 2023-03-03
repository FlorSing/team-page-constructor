const inquirer = require("inquirer");

inquirer
  .prompt({
    type: 'list',
    name: 'chocolate',
    message: "What's your favorite chocolate?",
    choices: ['Mars', 'Oh Henry', 'Hershey'],
    when: (answers)
    },
    {
      type: 'input',
      name: 'beverage',
      message: 'And your favorite beverage?',

    }

    ).then((answers) => {

        console.log(answers)
    })

