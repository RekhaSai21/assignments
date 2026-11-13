const employees = require("./employees");

const totalSalary = employees.reduce(
  (total, employee) => total + employee.salary,
  0
);
console.log(totalSalary);
