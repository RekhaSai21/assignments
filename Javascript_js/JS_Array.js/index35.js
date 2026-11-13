const employees = require("./employees");

const namesByDepartment = employees.reduce((groups, employee) => {
  const department = employee.department;
  if (!groups[department]) {
    groups[department] = [];
  }
  groups[department].push(employee.name);
  return groups;
}, {});

console.log(namesByDepartment);
