const employees = require("./employees");

const activeHyderabadSalary = employees
  .filter(
    (employee) =>
      employee.isActive && employee.address.city === "Hyderabad"
  )
  .reduce((total, employee) => total + employee.salary, 0);

console.log(activeHyderabadSalary);
