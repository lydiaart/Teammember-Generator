const { expect, test } = require('@jest/globals');
const Manager = require('../lib/Manager.js')

test('creates an Manager object', () => {
    const manager = new Manager('Jane');

    expect(manager.name).toBe('Jane');
    expect(manager.Id).toBe('003');
    expect(manager.email).toBe('J003@madeup.com');
    expect(manager.officeNumber).toBe('773-364-5892')
    expect(manager.role).toBe('Manager');
});

test('gets the name of the manager', () => {
    const manager = new Manager('Jane');

    expect(manager.getName()).toBe('Jane');
});

test('gets the Id of the manager', () => {
    const manager = new Manager('Jane');

    expect(manager.getId()).toBe('003');
});

test('gets the email of the manager', () => {
    const manager = new Manager('Jane');

    expect(manager.getEmail()).toBe('J001@madeup.com');
});

test('gets the office number of the manager', () => {
    const manager = new Manager('Jane');

    expect(manager.getofficeNumber()).toBe('773-364-5892');
});

test('gets the role of the manager', () => {
    const manager = new Manager('Jane');

    expect(manager.getRole()).toBe('Manager');
});