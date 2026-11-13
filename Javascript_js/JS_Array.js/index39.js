const employees = require("./employees");

const employeeCountByCity = employees.reduce((counts, employee) => {
  const city = employee.address.city;
  counts[city] = (counts[city] || 0) + 1;
  return counts;
}, {});
const maximumCityCount = Object.values(employeeCountByCity).reduce(
  (maximum, count) => Math.max(maximum, count),
  0
);
const citiesWithMostEmployees = Object.keys(employeeCountByCity).filter(
  (city) => employeeCountByCity[city] === maximumCityCount
);

console.log(citiesWithMostEmployees);
