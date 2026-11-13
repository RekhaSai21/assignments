const employees = require("./employees");

const highlyRatedEmployees = employees.filter(
  (employee) => employee.rating >= 4.5
);
console.log(highlyRatedEmployees);
