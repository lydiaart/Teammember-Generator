const { expect, test } = require('@jest/globals');
const Intern = require('../lib/Intern.js')

test('creates an Intern object', () => {
    const intern = new Intern('Jack');

    expect(intern.name).toBe('Jack');
    expect(intern.Id).toBe('008');
    expect(intern.email).toBe('J008@madeup.com');
    expect(intern.school).toBe('MIT')
    expect(intern.role).toBe('intern');
});

test('gets the name of the intern', () => {
    const intern = new intern('Jack');

    expect(intern.getName()).toBe('Jack');
});

test('gets the Id of the intern', () => {
    const intern = new intern('Jack');

    expect(intern.getId()).toBe('008');
});

test('gets the email of the intern', () => {
    const intern = new intern('Jack');

    expect(intern.getEmail()).toBe('J008@madeup.com');
});

test('gets the school of the intern', () => {
    const intern = new intern('Jack');

    expect(intern.getSchool()).toBe('MIT');
});

test('gets the role of the intern', () => {
    const intern = new intern('Jack');

    expect(intern.getRole()).toBe('intern');
});