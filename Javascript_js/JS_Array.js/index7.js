const employees = require("./employees");

const employeeLocations = employees.map((employee) => ({
  city: employee.address.city,
  department: employee.department,
}));
console.log(employeeLocations);
