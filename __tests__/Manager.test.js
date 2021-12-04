const Manager = require('../lib/Manager.js')

test('creates an Manager object', () => {
    const manager = new Manager('Jesus');

    expect(manager.name).toBe('Jesus');
    expect(manager.Id).toBe('003');
    expect(manager.email).toBe('J003@madeup.com');
    expect(manager.officeNumber).toBe('773-364-5892')
    expect(manager.role).toBe('Manager');
});

test('gets the name of the manager', () => {
    const manager = new Manager('Jane', '113', 'J113@madeup.com');

    expect(manager.getName()).toBe('Jane');
});

test('gets the Id of the manager', () => {
    const manager = new Manager('Jenny', '123', 'J123@madeup.com');

    expect(manager.getId()).toBe('123');
});

test('gets the email of the manager', () => {
    const manager = new Manager('Jenna', '133', 'J133@madeup.com');

    expect(manager.getEmail()).toBe('J133@madeup.com');
});

test('gets the office number of the manager', () => {
    const manager = new Manager('Janet', '143', 'J143@madeup.com');

    expect(manager.getofficeNumber()).toBe('773-364-5892');
});

test('gets the role of the manager', () => {
    const manager = new Manager('Justin', '153', 'J153@madeup.com');

    expect(manager.getRole()).toBe('Manager');
});