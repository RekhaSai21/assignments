const employees = require("./employees");

const highSalaryEmployees = employees.filter(
  (employee) => employee.salary > 60000
);
console.log(highSalaryEmployees);
