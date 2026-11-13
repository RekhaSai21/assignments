const employees = require("./employees");

const inactiveEmployee = employees.find((employee) => !employee.isActive);
console.log(inactiveEmployee);
