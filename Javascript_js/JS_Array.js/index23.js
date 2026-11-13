const employees = require("./employees");

const erpEmployee = employees.find((employee) =>
  employee.projects.some((project) => project.name === "ERP")
);
console.log(erpEmployee);
