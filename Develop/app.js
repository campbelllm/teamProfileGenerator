const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const htmlRenderer = require('./lib/htmlRenderer');
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const employees = [];

inquirer
  .prompt([
    //manager questions
    {
      type: "input",
      message: "Please enter the Managers name:",
      name: "managerName",
    },
    {
      type: "input",
      message: "What is the Managers id?",
      name: "managerId",
    },
    {
      type: "input",
      message: "What is the Managers email?",
      name: "managerEmail",
    },
    {
      type: "input",
      message: "What is the Managers office number?",
      name: "managerOfficeNumber",
    },
    //engineer questions
    {
      type: "list",
      message: "Would you like to input an engineer?",
      choices: ["yes", "no"],
      name: "engineerYesNo",
    },
  ])
  .then((answers) => {
    //manager answers
    const manager = new Manager (answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber)
    employees.push(manager);
    let engineerYesNo = answers.engineerYesNo;
    
 
    const internYes = () => {
      if (internYesNo === "yes") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "Enter intern name:",
              name: "internName",
            },
            {
              type: "input",
              message: "Enter intern id:",
              name: "internId",
            },
            {
              type: "input",
              message: "Enter intern email:",
              name: "internEmail",
            },
            {
              type: "input",
              message: "Enter intern school:",
              name: "internSchool",
            },
            {
              type: "list",
              message: "Would you like to input another intern?",
              choices: ["yes", "no"],
              name: "internYesNo",
            },
          ])
          .then((answers) => {
            const intern = new Intern (answers.internName, answers.internId, answers.internEmail, answers.internSchool)
            employees.push(intern); 
            internYesNo = answers.internYesNo;
            if (internYesNo === "yes") {
              internYes();
            }else{
                const htmlResult = htmlRenderer(employees)
                fs.writeFileSync('finished.html', htmlResult, 'utf-8')
            }
          });
      }
    };

    const internPrompt = () => {
      inquirer
        .prompt([
          {
            type: "list",
            message: "Would you like to input an intern?",
            choices: ["yes", "no"],
            name: "internYesNo",
          },
        ])
        .then((answers) => {
          internYesNo = answers.internYesNo;
          if(internYesNo === 'yes'){
            internYes()
          }
           const htmlResult = htmlRenderer(employees)
            fs.writeFileSync('finished.html', htmlResult, 'utf-8')
          
        });
    };
    const engineerYes = () => {
      if (engineerYesNo === "yes") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "Enter engineer name:",
              name: "engineerName",
            },
            {
              type: "input",
              message: "Enter engineer id:",
              name: "engineerId",
            },
            {
              type: "input",
              message: "Enter engineer email:",
              name: "engineerEmail",
            },
            {
              type: "input",
              message: "Enter engineers GitHub username",
              name: "engineerGitHub",
            },
            {
              type: "list",
              message: "Would you like to input another engineer?",
              choices: ["yes", "no"],
              name: "engineerYesNo",
            },
          ])
          .then((answers) => {
            const engineer = new Engineer (answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGitHub)
            employees.push(engineer); 
            engineerYesNo = answers.engineerYesNo;
            console.log(engineerYesNo);
            if (engineerYesNo === "yes") {
              engineerYes();
            } else {
              internPrompt();
            }
          });
      } else {
        internPrompt();
      }
    };
    engineerYes();
  });

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
