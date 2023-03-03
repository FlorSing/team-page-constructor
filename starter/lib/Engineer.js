// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require('./Employee');


class Engineer extends Employee {

    
    constructor(id, githubId){

        super(1, 'fps', 'fps@test.com');
    
        this.githubId = githubId;
        this.role = 'Engineer';
    
   
    };
    getRole(){
        console.log(this.role);
    }
    getGithub(){
        console.log(this.githubId);
    }
        
}

const e = new Engineer(1, 'fpsGit');

e.getRole();
console.log(e.githubId);
e.getGithub();

