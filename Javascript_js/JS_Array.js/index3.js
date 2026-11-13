const employees = require("./employees");

const employeesWithBonus = employees.map((employee) => ({
  ...employee,
  bonus: employee.salary * 0.1,
}));
console.log(employeesWithBonus);
