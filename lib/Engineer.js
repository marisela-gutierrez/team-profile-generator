const Employee = require('./Employee')

class Engineer extends Employee{
  constructor(name, id, email, github) {
    super(name, id, email);

    this.github = github;
  }

  getGithub() {
    return `${this.github}'s  is now ${this.id}!`;
  }

  getRole() {
    return 'engineer';
  }
}

module.exports = Engineer;