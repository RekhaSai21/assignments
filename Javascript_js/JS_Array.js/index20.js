const employees = require("./employees");

const mongoDbEmployee = employees.find((employee) =>
  employee.skills.includes("MongoDB")
);
console.log(mongoDbEmployee);
