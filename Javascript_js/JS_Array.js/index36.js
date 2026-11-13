const employees = require("./employees");

const hoursByEmployee = employees.map((employee) => ({
  employee,
  totalHours: employee.projects.reduce(
    (total, project) => total + project.hours,
    0
  ),
}));
const maximumHours = hoursByEmployee.reduce(
  (maximum, entry) => Math.max(maximum, entry.totalHours),
  0
);
const employeesWithMaximumHours = hoursByEmployee
  .filter((entry) => entry.totalHours === maximumHours)
  .map((entry) => entry.employee);

console.log(employeesWithMaximumHours);
