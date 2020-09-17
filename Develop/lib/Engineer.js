// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")
class Engineer extends Employee{
    constructor(name, id, email, gitHub ){
      super(name, email, id) ;
      this.gitHub = gitHub;
    }
    getGitHub(){
        return this.gitHub;
    }
    getRole(){
        return 'Engineer';
    }
}
const lindsey = new Engineer('lindsey', 1232, 'campbelllm@gmail.com')
lindsey.getGitHub('campbelllm')
console.log(lindsey)

module.exports = Engineer;