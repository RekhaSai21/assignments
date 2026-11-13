const employees = require("./employees");

const skillFrequency = employees.reduce((counts, employee) => {
  employee.skills.forEach((skill) => {
    const normalizedSkill = skill.trim();
    counts[normalizedSkill] = (counts[normalizedSkill] || 0) + 1;
  });
  return counts;
}, {});
console.log(skillFrequency);
