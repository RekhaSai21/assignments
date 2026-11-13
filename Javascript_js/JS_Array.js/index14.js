const employees = require("./employees");

const employeesWithMultipleSkills = employees.filter(
  (employee) => employee.skills.length > 1
);
console.log(employeesWithMultipleSkills);
