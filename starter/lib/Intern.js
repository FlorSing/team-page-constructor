// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Intern extends Employee {

    constructor(id, school){

        super(2, 'fpsI', 'fpsI@test.com');
    
        this.school = school;
        this.role = 'Intern';
    
   
    };
    getRole(){
        console.log(this.role);
    }
    getSchool(){
        console.log(this.school);
    }
        
}

module.exports = Intern;



const e = new Intern(1, 'Oxford');

e.getRole();
console.log(e.school);
e.getSchool();

