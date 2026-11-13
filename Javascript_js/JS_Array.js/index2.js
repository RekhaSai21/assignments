const employees = require("./employees");

const annualSalaries = employees.map((employee) => ({
  name: employee.name,
  annualSalary: employee.salary * 12,
}));
console.log(annualSalaries);
