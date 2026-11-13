const employees = require("./employees");

const inactiveLowSalaryEmployees = employees.filter(
  (employee) => !employee.isActive && employee.salary < 60000
);
console.log(inactiveLowSalaryEmployees);
