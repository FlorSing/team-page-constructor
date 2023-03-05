// TODO: Write code to define and export the Employee class
class Employee {

  constructor(name, id, email) {
    
    // if (!name) {
    //   throw new Error("Please provide name.");
    // };
    // if (!id) {
    //   throw new Error("Please provide ID.");
    // };
    // if (!email) {
    //   throw new Error("Please provide email.");
    // };

    this.name = name;
    this.id = id;
    this.email = email;
    this.role = 'Employee';
  }

    getName(){
        return this.name;
    };
    getId(){
      return this.id;
    };
    getEmail() {
      return this.email;
    };
    getRole(){
      return this.role;
    };
  };

module.exports = Employee;
