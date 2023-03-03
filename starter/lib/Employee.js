// TODO: Write code to define and export the Employee class
class Employee {

  constructor(name, id, email) {
    
    if (!name) {
      throw new Error("Please provide name.");
    };
    if (!id) {
      throw new Error("Please provide ID.");
    };
    if (!email) {
      throw new Error("Please provide email.");
    };

    this.name = name;
    this.id = id;
    this.email = email;
    this.role = 'Employee';
  }

    getName(){
        console.log(this.name);
    };
    getId(){
      console.log(this.id);
    };
    getEmail() {
      console.log(this.email);
    };
    getRole(){
      console.log(this.role);
    };
  };

module.exports = Employee;

const e = new Employee('flor s','fps@fps',25);

console.log(typeof(e));
console.log(e.name);
console.log(e.id);
console.log(e.email);

e.getEmail();
e.getId();
e.getName();
e.getRole();


