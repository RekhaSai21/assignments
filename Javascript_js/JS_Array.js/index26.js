const employees = require("./employees");

const highestSalaryEmployee = employees.reduce((highest, employee) =>
  employee.salary > highest.salary ? employee : highest
);
console.log(highestSalaryEmployee);
