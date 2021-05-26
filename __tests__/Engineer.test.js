

test('creates engineer object', () => {
  const engineer = new Engineer('Sam Smith', 123, 'sam@gmail.com', 'sam-smith');

  expect(engineer.name).toBe('Sam Smith');
  expect(engineer.id).toBe(123);
  expect(engineer.email).toBe('sam@gmail.com');
  expect(engineer.github).toBe('sam-smith');

});

test('gets engineers github', () => {
  const engineer = new Engineer('Sam Smith', 123, 'sam@gmail.com', 'sam-smith');

  expect(engineer.getGithub()).toEqual(expect.stringContaining('sam-smith'));

});

test('returns Engineer', () => {
  const engineer = new Engineer('Sam Smith', 123, 'sam@gmail.com', 'sam-smith');

  expect(engineer.getRole()).toEqual(expect.stringContaining('engineer'));

});