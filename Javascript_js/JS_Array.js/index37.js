const employees = require("./employees");

const uniqueSkills = employees.reduce((skills, employee) => {
  employee.skills.forEach((skill) => {
    const normalizedSkill = skill.trim();
    if (!skills.includes(normalizedSkill)) {
      skills.push(normalizedSkill);
    }
  });
  return skills;
}, []);

console.log(uniqueSkills.length);
