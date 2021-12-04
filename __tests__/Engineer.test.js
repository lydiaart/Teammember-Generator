const Engineer = require('../lib/Engineer.js')

test('creates an Engineer object', () => {
    const engineer = new Engineer('John');

    expect(engineer.name).toBe('John');
    expect(engineer.id).toBe('001');
    expect(engineer.email).toBe('J001@madeup.com');
    expect(engineer.Github).toBe('github.com/John')
    expect(engineer.getRole()).toBe('Engineer');
});

test('gets the name of the engineer', () => {
    const engineer = new Engineer('Joonho', '111', 'J111@madeup.com');

    expect(engineer.getName()).toBe('Joonho');
});

test('gets the Id of the engineer', () => {
    const engineer = new Engineer('Jamie', '121', 'J121@madeup.com');

    expect(engineer.getId()).toBe('121');
});

test('gets the email of the engineer', () => {
    const engineer = new Engineer('Jose', '131', 'J131@madeup.com');

    expect(engineer.getEmail()).toBe('J131@madeup.com');
});

test('gets the GitHub of the engineer', () => {
    const engineer = new Engineer('Julie', '141', 'J141@madeup.com');

    expect(engineer.getGithub()).toBe('github.com/Julie');
});

test('gets the role of the engineer', () => {
    const engineer = new Engineer('Juliet', '151', 'J151@madeup.com');

    expect(engineer.getRole()).toBe('Engineer');
});