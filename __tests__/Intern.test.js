const Intern = require("../lib/Intern");

test("Sets school", () => {
  const schoolName = "GT";
  const employee = new Intern("Darius", 3, "Dar@gmail.com", schoolName);
  expect(employee.school).toBe(schoolName);
});

test("getRole() Intern", () => {
  const role = "Intern";
  const employee = new Intern("Darius", 3, "Dar@gmail.com", "GT");
  expect(employee.getRole()).toBe(role);
});
