const Engineer = require("../lib/Engineer");

test("Set GitHub account", () => {
  const GitHubUser = "DonGlover";
  const employee = new Engineer("Donald", 1, "Don@gmail.com", GitHubUser);
  expect(employee.github).toBe(GitHubUser);
});

test("getRole() Engineer", () => {
  const role = "Engineer";
  const employee = new Engineer("Donald", 1, "Don@gmail.com", "DonGlover");
  expect(employee.getRole()).toBe(role);
});