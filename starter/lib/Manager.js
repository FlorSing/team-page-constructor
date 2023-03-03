// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Manager extends Employee {

    constructor(id, officeNumber){

        super(3, 'fpsMgr', 'fpsMgr@test.com');
    
        this.officeNumber = officeNumber;
        this.role = 'Manager';
    
   
    };
    getRole(){
        console.log(this.role);
    }
    getOfficeNumber(){
        console.log(this.officeNumber);
    }
        
}

module.exports = Manager;

const e = new Manager(1, 500);

e.getRole();
console.log(e.officeNumber);
e.getOfficeNumber();

