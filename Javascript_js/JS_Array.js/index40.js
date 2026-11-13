const employees = require("./employees");

const employeeWithBestHoursToSalaryRatio = employees
  .map((employee) => {
    const totalHours = employee.projects.reduce(
      (total, project) => total + project.hours,
      0
    );
    return {
      name: employee.name,
      hoursToSalaryRatio: totalHours / employee.salary,
    };
  })
  .reduce((best, current) =>
    current.hoursToSalaryRatio > best.hoursToSalaryRatio ? current : best
  );

console.log(employeeWithBestHoursToSalaryRatio);
