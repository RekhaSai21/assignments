const employees = require("./employees");

const totalProjectHours = employees.reduce(
  (employeeHours, employee) =>
    employeeHours +
    employee.projects.reduce((total, project) => total + project.hours, 0),
  0
);
console.log(totalProjectHours);
