const employees = require("./employees");

const activePercentage =
  (employees.filter((employee) => employee.isActive).length /
    employees.length) *
  100;
console.log(activePercentage);
