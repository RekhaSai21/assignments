const employees = require("./employees");

const salaryByDepartment = employees.reduce((totals, employee) => {
  const department = employee.department;
  totals[department] = (totals[department] || 0) + employee.salary;
  return totals;
}, {});
console.log(salaryByDepartment);
