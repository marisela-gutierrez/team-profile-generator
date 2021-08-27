const inquirer = require("inquirer");
const fs = require("fs");
const generatePage = require("./src/page-template");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
let employees = [];

const validateEmail = (input) => {
    if (input.includes('@')){
        return true;
    }
    console.log('\nPlease enter a valid email address!');
    return false;
}

const isManager = (type) => {
    if(type === 'Manager'){
        return true;
    }
    return false;
}

const isEngineer = (type) => {
    if(type === 'Engineer'){
        return true;
    }
    return false;
}

const isIntern = (type) => {
    if(type === 'Intern'){
        return true;
    }
    return false;
}

const employeeType = () => {
    inquirer.prompt({
        type: "list",
        name: "type",
        message:  "Please choose type of employee you would like to add, or are you finished building your team profile?",
        choices: ["Engineer","Intern","Finished"],
    }).then(({type}) => {
      if (type === 'Finished'){
          const pageHTML = generatePage(employees);
          fs.writeFile('./dist/index.html',pageHTML, err =>{
              if (err) {
                  console.log('There was an issue creating the file');
              } else {
                  console.log('Team profile has been created, you will find your file in the dist folder');
              }
          })
      } else {
          employeeInfo(type);
      }
    });
}

const employeeInfo = (type) => {

    console.log(`
    ==========================
    Add a(n) ${type}
    ==========================
    `);

    inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: `What is the ${type}'s name:`,
        validate: nameInput => {
            if (nameInput){
                return true;
            } else {
                console.log('\nPlease enter a name!');
                return false;
            }
        }
      },
      {
        type: "input",
        name: "id",
        message: `What is the ${type}'s employee ID:`,
        validate: nameInput => {
            if (nameInput){
                return true;
            } else {
                console.log("\nPlease enter an ID number!");
                return false;
            }
        }
      },
      {
        type: "input",
        name: "email",
        message: `What is the ${type}'s email:`,
        validate: validateEmail,
      },
      {
        type: "input",
        name: "officeNumber",
        message: `What is the ${type}'s office number:`,
        validate: nameInput => {
            if (nameInput){
                return true;
            } else {
                console.log("\nPlease enter a phone number!");
                return false;
            }
        },
        when: isManager(type),
      },
      {
        type: "input",
        name: "github",
        message: `What is the ${type}'s GitHub username:`,
        validate: nameInput => {
            if (nameInput){
                return true;
            } else {
                console.log("\nPlease enter a username!");
                return false;
            }
        },
        when: isEngineer(type),
      },
      {
        type: "input",
        name: "school",
        message: `What is the ${type}'s school name:`,
        validate: nameInput => {
            if (nameInput){
                return true;
            } else {
                console.log("\nPlease enter a school!");
                return false;
            }
        },
        when: isIntern(type),
      },
    ]).then(({name,id,email,officeNumber,github,school}) => {
        let employee = {};
        switch(type){
            case 'Manager': 
              employee = new Manager(name,id,email,officeNumber);
              break;
            case 'Engineer':
                employee = new Engineer(name,id,email,github);
                break;
            case 'Intern':
                employee = new Intern(name,id,email,school);
                break;      
        }
        employees.push(employee);
        employeeType();
    });
}

employeeInfo('Manager');
