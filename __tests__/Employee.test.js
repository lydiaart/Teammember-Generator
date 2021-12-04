 
const Employee = require('../lib/Employee.js');

test('creates an Employee object', () => {
    const employee = new Employee('James', '007', 'J007@madeup.com');

    expect(employee.name).toBe('James');
    expect(employee.id).toBe('007');
    expect(employee.email).toBe('J007@madeup.com');
    expect(employee.getRole()).toBe('Employee');
});

test('gets the name of the employee', () => {
    const employee = new Employee ('Jason', '117', 'J117@madeup.com');

    expect(employee.getName()).toEqual(expect.stringContaining('Jason'));
    
});

test('gets the Id of the employee', () => {
    const employee = new Employee ('Jeffery', '127', 'J127@madeup.com');

    expect(employee.getId()).toEqual('127');
});

test('gets the email of the employee', () => {
    const employee = new Employee('Jacob', '137', 'J137@madeup.com');

    expect(employee.getEmail()).toEqual('J137@madeup.com');
});

test('gets the role of the employee', () => {
    const employee = new Employee ('Joseph', '147', 'J147@madeup.com');

    expect(employee.getRole()).toEqual('Employee');
})
