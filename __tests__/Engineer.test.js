const { test, expect } = require('@jest/globals')
const Engineer = require('../lib/Engineer.js')

test('creates an Engineer object', () => {
    const engineer = new Engineer('John');

    expect(engineer.name).toBe('John');
    expect(engineer.Id).toBe('001');
    expect(engineer.email).toBe('J001@madeup.com');
    expect(engineer.role).toBe('Engineer');
});

test('gets the name of the engineer', () => {
    const engineer = new Engineer('John');

    expect(engineer.getName()).toBe('John');
});

test('gets the Id of the engineer', () => {
    const engineer = new Engineer('John');

    expect(engineer.getId()).toBe('001');
});

test('gets the email of the engineer', () => {
    const engineer = new Engineer('John');

    expect(engineer.getEmail()).toBe('J001@madeup.com');
});

test('gets the role of the engineer', () => {
    const engineer = new Engineer('John');

    expect(engineer.getRole()).toBe('Engineer');
});