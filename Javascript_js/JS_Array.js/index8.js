const employees = require("./employees");

const usernames = employees.map(
  (employee) => `${employee.name.toLowerCase()}${employee.id}`
);
console.log(usernames);
