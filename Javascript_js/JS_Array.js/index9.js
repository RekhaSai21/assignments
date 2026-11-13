const employees = require("./employees");

const activeEmployees = employees.filter((employee) => employee.isActive);
console.log(activeEmployees);
