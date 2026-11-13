const employees = require("./employees");

const itReactEmployees = employees.filter(
  (employee) =>
    employee.department === "IT" && employee.skills.includes("React")
);
console.log(itReactEmployees);
