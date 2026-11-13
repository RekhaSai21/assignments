const employees = require("./employees");

const employeesWithSeniorStatus = employees.map((employee) => ({
  ...employee,
  senior: employee.age > 30,
}));
console.log(employeesWithSeniorStatus);
