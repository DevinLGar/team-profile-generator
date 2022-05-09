const Manager = require('../lib/Manager');

test('Office number created', () => {
    const officeNumber = 10;
    const employee = new Manager("Diego", 1, "diego@gmail.com", officeNumber);
    
    expect(employee.office).toBe(officeNumber);
})

test("getRole() Manager", () => {
    const role = "Manager";
    const employee = new Manager("Diego", 1, "diego@gmail.com", 10);

    expect(employee.getRole()).toBe(role);
});
  