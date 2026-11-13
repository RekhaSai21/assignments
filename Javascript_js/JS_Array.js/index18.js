const employees = require("./employees");

const hrEmployee = employees.find(
  (employee) => employee.department === "HR"
);
console.log(hrEmployee);
