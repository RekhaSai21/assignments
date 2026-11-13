const employees = require("./employees");

const averageSalary =
  employees.reduce((total, employee) => total + employee.salary, 0) /
  employees.length;
console.log(averageSalary);
