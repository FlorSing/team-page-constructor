// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require('./Employee');

class Engineer extends Employee {

    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
        this.role = 'Engineer';
        
    
        
   
    };
    getRole(){
        return this.role;
    }
    getGithub(){
        return this.github;
    }
        
}

module.exports = Engineer;

// const testingList = [];
// const engr = new Engineer('test', 1, 'test@test', 'testing');
// // const engr2 = new Engineer('test2', 2, 'test@test2', 'testing2');
// testingList.push(engr);
// // testingList.push(engr2);
// const a = JSON.stringify(testingList);
// console.log(engr.getEmail());
