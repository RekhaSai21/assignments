const employees = require("./employees");

const highestRatedActiveITReactEmployee = employees
  .filter(
    (employee) =>
      employee.isActive &&
      employee.department === "IT" &&
      employee.skills.includes("React")
  )
  .reduce((highest, employee) =>
    employee.rating > highest.rating ? employee : highest
  );
console.log(highestRatedActiveITReactEmployee);
