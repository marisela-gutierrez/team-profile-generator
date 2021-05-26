const Employee = require('./Employee')

class Intern extends Employee{
  constructor(name, id, email, school) {
    super(name, id, email);

    this.school = school;
  }

  getSchool() {
    return `${this.school}'s  is now ${this.id}!`;
  }

  getRole() {
    return 'intern';
  }
}

module.exports = Intern;