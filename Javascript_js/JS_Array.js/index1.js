const employees = require("./employees");

const employeeNames = employees.map((employee) => employee.name);
console.log(employeeNames);
