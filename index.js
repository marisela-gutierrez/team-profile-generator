const inquirer = require('inquirer');
const Employee = require('./Employee')
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/intern');
const Manager = require('../lib/Manager');

function Team() {
  this.manager;

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
 }); 
};

new Team().initializeTeam();
