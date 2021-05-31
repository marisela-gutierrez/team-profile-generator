const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/Manager');
const fs = require("fs");
const generatePage = require("./src/page-template");
let team = [];

const isEngineer = (action) => {
  if(action === 'add an engineer'){
      return true;
  }
  return false;
}

const isIntern = (action) => {
  if(action === 'add an intern'){
      return true;
  }
  return false;
}

function Team() {
  this.manager;
  this.engineer;
  this.intern;

}

Team.prototype.initializeTeam = function() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'managerName',
      message: 'What is your name? (Required)',
      validate: managerNameInput => {
        if (managerNameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'managerId',
      message: 'Enter your employee ID (Required)',
      validate: managerId => {
        if (managerId) {
          return true;
        } else {
          console.log('Please enter your employee ID');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'managerEmail',
      message: 'Enter your email address (Required)',
      validate: managerEmail => {
        if (managerEmail) {
          return true;
        } else {
          console.log('Please enter your email address!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'managerOffice',
      message: 'Enter your office number (Required)',
      validate: managerOffice => {
        if (managerOffice) {
          return true;
        } else {
          console.log('Please enter your office number!');
          return false;
        }
      }
    },
  ])
  .then(({ managerName, managerId, managerEmail, managerOffice }) => {
    this.manager = new Manager(managerName, managerId, managerEmail, managerOffice);

    this.startNewTeam();
 }); 
};

Team.prototype.startNewTeam = function() {
    inquirer
    .prompt({
      type: 'list',
      message: 'What would you like to add an employee or finsih building team?',
      name: 'action',
      choices: ['add an engineer', 'add an intern', 'finish building my team'],
    })
    .then(({ action }) => {
      if (action === 'finish building my team') {
        
        const pageHTML = generatePage(team);
          fs.writeFile('./dist/index.html',pageHTML, err =>{
              if (err) {
                  console.log('There was a problem creating file');
              } else {
                  console.log('Team profile has been created, file located in the dist folder');
              }
          })
      } else {
          this.employeeData(action);
      }
    });
};

Team.prototype.employeeData = function(action) {

  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: `Enter ${action}'s name!`,
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: `Enter ${action}'s employee Id!`,
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log('Please enter employee ID');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: `Enter ${action}'s email address!`,
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please enter email address!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: `What is the ${action}'s github?`,
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter github!');
          return false;
        }
      },
      when: isEngineer(action),
    },
    {
      type: 'input',
      name: 'school',
      message: `What is the ${action}'s school name?`,
      validate: schoolInput => {
        if (schoolInput) {
          return true;
        } else {
          console.log('Please enter school!');
          return false;
        }
      },
      when: isIntern(action),
    },
  ])
  .then(({ name, id, email,  github, school }) => {
    this.engineer = new Engineer(name, id, email, github);
    this.intern = new Intern(name, id, email, school);

    let employee = {};
        switch(action){
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
        team.push(team);
        employeeAction();

    //get employee data
  }); 
}

initializeTeam();
