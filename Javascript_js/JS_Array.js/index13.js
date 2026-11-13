const employees = require("./employees");

const hyderabadEmployees = employees.filter(
  (employee) => employee.address.city === "Hyderabad"
);
console.log(hyderabadEmployees);
