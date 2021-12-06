const Intern = require('../lib/Intern.js')

test('creates an Intern object', () => {
    const intern = new Intern('Jack', '008', 'J008@madeup.com', 'MIT');

    expect(intern.name).toBe('Jack');
    expect(intern.id).toBe('008');
    expect(intern.email).toBe('J008@madeup.com');
    expect(intern.school).toBe('MIT')
    expect(intern.getRole()).toBe('Intern');
});

test('gets the name of the intern', () => {
    const intern = new Intern('Jerry', '118', 'J118@madeup.com');

    expect(intern.getName()).toBe('Jerry');
});

test('gets the Id of the intern', () => {
    const intern = new Intern('Jackson', '128', 'J128@madeup.com');

    expect(intern.getId()).toBe('128');
});

test('gets the email of the intern', () => {
    const intern = new Intern('Jorge', '138', 'J138@madeup.com');

    expect(intern.getEmail()).toBe('J138@madeup.com');
});

test('gets the school of the intern', () => {
    const intern = new Intern('Jesse', '148', 'J148@madeup.com', 'Northwestern');

    expect(intern.getSchool()).toBe('Northwestern');
});

test('gets the role of the intern', () => {
    const intern = new Intern('Jacobson', '158', 'J158@madeup.com', 'Intern');

    expect(intern.getRole()).toBe('Intern');
});