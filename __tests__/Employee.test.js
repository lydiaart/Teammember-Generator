const { expect } = require('@jest/globals');
const { test } = require('jest-circus');
const employee = require('../lib/Employee.js');

test('creates an Employee object', () => {
    const employee = new Employee('Jason', '007');

    expect(employee.name).toBe('Jason');
    expect(employee.Id).toBe('007');
    expect(employee.email).toBe('J007@madeup.com');
    expect(employee.role).toBe('Employee');
});

test('gets the name of the employee', () => {
    const employee = new Employee ('Jason', '007');

    expect(employee.getName()).toEqual(expect.stringContaining('Jason'));
    
});

test('gets the Id of the employee', () => {
    const employee = new Employee ('Jason', '007');

    expect(employee.getId()).toEqual(expect.stringContatining('007'));
});

test('gets the email of the employee', () => {
    const employee = new Employee('Jason', '007');

    expect(employee.getEmail()).toEqual(expect.stringContaining('J007@madeup.com'));
});

test('gets the role of the employee', () => {
    const employee = new Employee ('Jason', '007');

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
})
