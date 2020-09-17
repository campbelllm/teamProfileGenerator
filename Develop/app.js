const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

inquirer
    .prompt([
        //manager questions
        {
            type: 'input',
            message: "Please enter the Managers name:",
            name: 'managerName'
        },
        {
            type: 'input',
            message: "What is the Managers id?",
            name: "managerID"
        },
        {
            type: 'input',
            message: 'What is the Managers email?',
            name: 'managerEmail'

        },
        {
            type: 'input',
            message: 'What is the Managers office number?',
            name: 'managerOfficeNumber'
 
        },
        //engineer questions
        {
            type: 'list',
            message: 'Would you like to input an engineer?',
            choices: ['yes', 'no'],
            name: 'engineerYesNo'
        },
        {
            type: 'input',
            message: 'Enter engineer name:',
            name: 'engineerName'
        },
        {
            type: 'input',
            message: 'Enter engineer id:',
            name: 'engineerId'
        },
        {
            type: 'input',
            message: 'Enter engineer email:',
            name: 'engineerEmail'
        },
        {
            type: 'input',
            message: 'Enter engineers GitHub username',
            name: 'engineerGitHub'
        }
        // intern questions
        {
            type: 'list',
            message: 'Would you like to input an intern?',
            choices: ['yes', 'no'],
            name: 'internYesNo'
        },
        {
            type: 'input',
            message: 'Enter intern name:',
            name: 'internName'
        },
        {
            type: 'input',
            message: 'Enter intern id:',
            name: 'internId'
        },
        {
            type: 'input',
            message: 'Enter intern email:',
            name: 'internEmail'
        },
        {
            type: 'input',
            message: 'Enter intern school:',
            name: 'internSchool'
        }

    ])
    .then((answers) => {
        //manager answers
        const managerName = answers.managerName;
        const managerID = answers.managerID;
        const managerEmail = answers.managerEmail;
        const managerOfficeNumber = answers.managerOfficeNumber;
        //engineer answers
        const engineerYesNo = answers.engineerYesNo;
        const engineerName = answers.engineerName;
        const engineerID = answers.engineerID;
        const engineerEmail = answers.engineerEmail;
        const engineerGitHub = answers.engineerGitHub;
        //intern answer 
        const internYesNo = answers.internYesNo;
        const internName = answers.internName;
        const internID = answers.internID;
        const internEmail = answers.internEmail;
        const internSchool = answers.internSchool;
    })

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
