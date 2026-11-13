const employees = require("./employees");

const employeesByProjectHours = employees
  .map((employee) => ({
    name: employee.name,
    totalProjectHours: employee.projects.reduce(
      (total, project) => total + project.hours,
      0
    ),
  }))
  .sort((a, b) => a.totalProjectHours - b.totalProjectHours);

console.log(employeesByProjectHours);
