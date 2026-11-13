const employees = require("./employees");

const employee = employees.find((employee) => employee.id === 3);
console.log(employee);
