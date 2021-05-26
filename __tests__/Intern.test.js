const Intern = require('../lib/intern');

test('creates intern object', () => {
  const intern = new Intern('Amy Sanders', 123, 'amy@gmail.com', 'Texas University');

  expect(intern.name).toBe('Amy Sanders');
  expect(intern.id).toBe(123);
  expect(intern.email).toBe('amy@gmail.com');
  expect(intern.school).toBe('Texas University');

});

test('gets interns school', () => {
  const intern = new Intern('Amy Sanders', 123, 'amy@gmail.com', 'Texas University');

  expect(intern.getSchool()).toEqual(expect.stringContaining('Texas University'));

});

test('returns intern', () => {
  const intern = new Intern('Amy Sanders', 123, 'amy@gmail.com', 'Texas University');

  expect(intern.getRole()).toEqual(expect.stringContaining('intern'));

});