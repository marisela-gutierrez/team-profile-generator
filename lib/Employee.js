class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return `${this.name}'s  ${this.id}!`;
  }

  getId() {
    return `${this.name}'s  ${this.id}!`;
  }

  getEmail() {
    return `${this.email}'s  is now ${this.id}!`;
  }

  getRole() {
    return 'employee';
  }
}

module.exports = Employee;