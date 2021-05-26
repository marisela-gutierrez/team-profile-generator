const Employee = require('./Employee')

class Manager extends Employee{
  constructor(name, id, email, officeNumber) {
    super(name, id, email);

    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return `${this.officeNumber}'s  is now ${this.id}!`;
  }

  getRole() {
    return 'manager';
  }
}

module.exports = Manager;