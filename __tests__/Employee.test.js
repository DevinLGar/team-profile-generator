const Employee = require('../lib/Employee');

test('creates employee object', () => {
    const employee = new Employee();

    expect(typeof(employee)).toBe("object");
});

test("Creates employee name", () => {
    const name = "Donald";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test("Creates ID number", () => {
    const idTest = 100;
    const employee = new Employee("Al", idTest);
    expect(employee.id).toBe(idTest);
});

test("Creates email address", () => {
    const emailTest = "van@gmail.com";
    const employee = new Employee("Van", 4, emailTest);
    expect(employee.email).toBe(emailTest);
});

test("Retrieves name", () => {
    const name = "Donald";
    const employee = new Employee(name);
    expect(employee.getName()).toBe(name);
});

test("Retrieves ID", () => {
    const idTest = 100;
    const employee = new Employee("Al", idTest);
    expect(employee.getId()).toBe(idTest);
});

test("Retrieves email", () => {
    const emailTest = "van@gmail.com";
    const employee = new Employee("Van", 4, emailTest);
    expect(employee.getEmail()).toBe(emailTest);
});

test("Get Role (Employee)", () => {
    const role = "Employee";
    const employee = new Employee("Van", 4, "van@gmail.com");
    expect(employee.getRole()).toBe(role);
});