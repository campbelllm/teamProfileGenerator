// TODO: Write code to define and export the Employee class
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
  questions () {
    inquirer.prompt([
      {
        type: "input",
        message: "Please enter name:",
        name: "name",
      },
      {
        type: "input",
        message: "Enter ID:",
        name: "id",
      },
      {
        type: "input",
        message: "Enter email:",
        name: "email",
      }
    ]);
    }
}

module.exports = Employee;
