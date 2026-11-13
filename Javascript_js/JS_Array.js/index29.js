const employees = require("./employees");

const employeeCountByCity = employees.reduce((counts, employee) => {
  const city = employee.address.city;
  counts[city] = (counts[city] || 0) + 1;
  return counts;
}, {});
console.log(employeeCountByCity);
