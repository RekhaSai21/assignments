const employees = require("./employees");

const departmentSalaries = employees.reduce((totals, employee) => {
  const department = employee.department;
  if (!totals[department]) {
    totals[department] = { totalSalary: 0, employeeCount: 0 };
  }
  totals[department].totalSalary += employee.salary;
  totals[department].employeeCount++;
  return totals;
}, {});

const averageByDepartment = Object.keys(departmentSalaries).map(
  (department) => ({
    department,
    averageSalary:
      departmentSalaries[department].totalSalary /
      departmentSalaries[department].employeeCount,
  })
);
const highestAverage = averageByDepartment.reduce((highest, current) =>
  current.averageSalary > highest.averageSalary ? current : highest
).averageSalary;
const highestAverageDepartments = averageByDepartment
  .filter((entry) => entry.averageSalary === highestAverage)
  .map((entry) => entry.department);

console.log(highestAverageDepartments);
