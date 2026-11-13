const employees = require("./employees");

const projectHours = employees.map((employee) => ({
  name: employee.name,
  totalProjectHours: employee.projects.reduce(
    (total, project) => total + project.hours,
    0
  ),
}));
console.log(projectHours);
