const employees = require("./employees");

const puneEmployee = employees.find(
  (employee) => employee.address.city === "Pune"
);
console.log(puneEmployee);
