const employees = require("./employees");

const uppercaseNames = employees.map((employee) =>
  employee.name.toUpperCase()
);
console.log(uppercaseNames);
