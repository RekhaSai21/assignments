const employees = require("./DataSet");

const employeesWithOver100ProjectHours = employees.filter(
  (employee) =>
    employee.projects.reduce((total, project) => total + project.hours, 0) > 100
);
console.log(employeesWithOver100ProjectHours);
