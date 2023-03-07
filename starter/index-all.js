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
    //   console.log(manager);
    
      html.push(manager);

      const managerCard = `
      <div class="card employee-card">
      <div class="card-header">
          <h2 class="card-title">${manager.getName()}</h2>
          <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${manager.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
              <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
          </ul>
      </div>
  </div>
      `;
      // html.push(e);
      // console.log(html);
      // fs.writeFile(__dirname, "output", `${answer.managerName}.json`,JSON.stringify(answers, null, '  ') )
      fs.writeFile('teamMgrCard.html', managerCard,(err) => err? console.error(err) : console.log());
    //   fs.appendFile('teamMgrCard.html', managerCard,(err) => err? console.error(err) : console.log('team  page created'));
      return managerCard;
     
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
          // html.push(e);
          // console.log(html);
         buildQuestions();
        //  console.log(engineer);
        
        html.push(engineer);
        const engineerCard =  `
        <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
        </ul>
    </div>
</div>
        `;
        fs.writeFile('teamEngrCard.html', engineerCard,(err) => err? console.error(err) : console.log());
        // fs.appendFile('teamEngrCard.html', engineerCard,(err) => err? console.error(err) : console.log(''));
        // return engineerCard;
         })
    }

    if (add === 'Add an Intern') {
     inquirer.prompt(intern).then((answers) => {
          const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.school);
          // html.push(e);
          // console.log(html);
         buildQuestions();
        //  console.log(intern);
        
          html.push(intern);
         const internCard =  `
         <div class="card employee-card">
     <div class="card-header">
         <h2 class="card-title">${intern.getName()}</h2>
         <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
     </div>
     <div class="card-body">
         <ul class="list-group">
             <li class="list-group-item">ID: ${intern.getId()}</li>
             <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
             <li class="list-group-item">School: ${intern.getSchool()}</li>
         </ul>
     </div>
 </div>
         `;
         fs.writeFile('teamInternCard.html', internCard,(err) => err? console.error(err) : console.log());
        //  fs.appendFile('teamInternCard.html', internCard,(err) => err? console.error(err) : console.log(''));
        //  return internCard;
     })
    }

    if (add === 'Finish building team'){

        // console.log(html);
        // const writer = html['Manager'].name();
        
        // console.log(manager.getRole());
        // console.log(manager.getEmail());
        
        const htmlPage = `
        <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
    
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="team-area col-12 d-flex justify-content-center">
                `;
                
    //                 ${managerCard}
    //                 ${engineerCard}
    //                 ${internCard}
                    
    //             </div>
    //         </div>
    //     </div>
    // </body>
    // </html>
    //     `;
        fs.writeFile('teamPageTop.html', htmlPage,(err) => err? console.error(err) : console.log(''));
        // fs.appendFile('team.html', managerCard,(err) => err? console.error(err) : console.log('team  page created'));
        // fs.appendFile('htmlPage.html', engineerCard,(err) => err? console.error(err) : console.log('team  page created'));
        // fs.appendFile('htmlPage.html', internCard,(err) => err? console.error(err) : console.log('team  page created'));
        
        

      };
       buildPage();
  }


function buildPage() {
    const htmlPageBottom = `  
 
                </div>
            </div>
        </div>
    </body>
    </html>
         `;
        fs.writeFile('team.html', '',(err) => err? console.error(err) : console.log(''));
        fs.appendFile('team.html', './htmlPageTop.html',(err) => err? console.error(err) : console.log(''));
        fs.appendFile('team.html', './managerCard.html',(err) => err? console.error(err) : console.log(''));
        fs.appendFile('team.html', './engineer.html',(err) => err? console.error(err) : console.log(''));
        fs.appendFile('team.html', './intern.html',(err) => err? console.error(err) : console.log(''));
        fs.appendFile('team.html', htmlPageBottom,(err) => err? console.error(err) : console.log(''));
        
        

};


// console.log(manager);
// console.log(intern);
// console.log(engineer);
// buildPage();
// console.log[html];
buildStart();


// creates the team
// const generateTeam = team => {

//     // creates the manager html
//     // const generateManager = manager => {
//     //     return `
//     //     <div class="card employee-card">
//     //     <div class="card-header">
//     //         <h2 class="card-title">${manager.getName()}</h2>
//     //         <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
//     //     </div>
//     //     <div class="card-body">
//     //         <ul class="list-group">
//     //             <li class="list-group-item">ID: ${manager.getId()}</li>
//     //             <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
//     //             <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
//     //         </ul>
//     //     </div>
//     // </div>
//     //     `;
//     // };

//     // creates the html for engineers
// //     const generateEngineer = engineer => {
// //         return `
// //         <div class="card employee-card">
// //     <div class="card-header">
// //         <h2 class="card-title">${engineer.getName()}</h2>
// //         <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
// //     </div>
// //     <div class="card-body">
// //         <ul class="list-group">
// //             <li class="list-group-item">ID: ${engineer.getId()}</li>
// //             <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
// //             <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
// //         </ul>
// //     </div>
// // </div>
// //         `;
// //     };

//     // creates the html for interns
// //     const generateIntern = intern => {
// //         return `
// //         <div class="card employee-card">
// //     <div class="card-header">
// //         <h2 class="card-title">${intern.getName()}</h2>
// //         <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
// //     </div>
// //     <div class="card-body">
// //         <ul class="list-group">
// //             <li class="list-group-item">ID: ${intern.getId()}</li>
// //             <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
// //             <li class="list-group-item">School: ${intern.getSchool()}</li>
// //         </ul>
// //     </div>
// // </div>
// //         `;
//     };

//     const html = [];

//     html.push(team
//         .filter(employee => employee.getRole() === "Manager")
//         .map(manager => generateManager(manager))
//     );
//     html.push(team
//         .filter(employee => employee.getRole() === "Engineer")
//         .map(engineer => generateEngineer(engineer))
//         .join("")
//     );
//     html.push(team
//         .filter(employee => employee.getRole() === "Intern")
//         .map(intern => generateIntern(intern))
//         .join("")
//     );

//     // console.log(html.join(""));

//     return html.join("");
    
// }

// exports function to generate entire page
// module.exports = team => {

//     return `
//     <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <meta http-equiv="X-UA-Compatible" content="ie=edge" />
//     <title>My Team</title>
//     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
//         integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
//     <link rel="stylesheet" href="style.css">
//     <script src="https://kit.fontawesome.com/c502137733.js"></script>
// </head>

// <body>
//     <div class="container-fluid">
//         <div class="row">
//             <div class="col-12 jumbotron mb-3 team-heading">
//                 <h1 class="text-center">My Team</h1>
//             </div>
//         </div>
//     </div>
//     <div class="container">
//         <div class="row">
//             <div class="team-area col-12 d-flex justify-content-center">
//                 ${generateTeam(team)}
//             </div>
//         </div>
//     </div>
// </body>
// </html>
//     `;
// };
