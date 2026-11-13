const employees = require("./employees");

const lowRatedEmployee = employees.find((employee) => employee.rating < 4);
console.log(lowRatedEmployee);
