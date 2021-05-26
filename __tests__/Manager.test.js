const Manager = require('../lib/Manager');

test('creates manager object', () => {
  const manager = new Manager('Derek Karsh', 123, 'derek@gmail.com', '214-000-000');

  expect(manager.name).toBe('Derek Karsh');
  expect(manager.id).toBe(123);
  expect(manager.email).toBe('derek@gmail.com');
  expect(manager.officeNumber).toBe('214-000-000');

});

test('gets managers office number', () => {
  const manager = new Manager('Derek Karsh', 123, 'derek@gmail.com', '214-000-000');

  expect(manager.getOfficeNumber()).toEqual(expect.stringContaining('214-000-000'));

});

test('returns manager', () => {
  const manager = new Manager('Derek Karsh', 123, 'derek@gmail.com', '214-000-000');

  expect(manager.getRole()).toEqual(expect.stringContaining('manager'));

});