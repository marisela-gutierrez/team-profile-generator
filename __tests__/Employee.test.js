const Employee = require('../lib/Employee');

test('creates employee object', () => {
  const employee = new Employee('Mary Hill', 123, 'mary@gmail.com');

  expect(employee.name).toBe('Mary Hill');
  expect(employee.id).toBe(123);
  expect(employee.email).toBe('mary@gmail.com');

});

test('gets employees name', () => {
  const employee = new Employee('Mary Hill', 123, 'mary@gmail.com');

  expect(employee.getName()).toEqual(expect.stringContaining('Mary'));

});

test('gets employees Id', () => {
  const employee = new Employee('Mary Hill', 123, 'mary@gmail.com');

  expect(employee.getId()).toEqual(expect.stringContaining('123'));

});

test('gets employees email', () => {
  const employee = new Employee('Mary Hill', 123, 'mary@gmail.com');

  expect(employee.getEmail()).toEqual(expect.stringContaining('mary@gmail.com'));

});

test('returns Employee', () => {
  const employee = new Employee('Mary Hill', 123, 'mary@gmail.com');

  expect(employee.getRole()).toEqual(expect.stringContaining('employee'));

});