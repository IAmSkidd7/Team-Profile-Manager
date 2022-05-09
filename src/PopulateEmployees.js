const Employee = require("../lib/Employee");

const createManager = manager => {
  let managerCard = `
<div>
<div>
<h3>Manager<h3/>
${manager.name}</div>
<ul>
<li>Id:${manager.id}</li>
<li>Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
<li >Office Number: ${manager.officeNumber}</li>
</ul>
</div>
`;
  return managerCard;
};
const createEngineer = engineer => {
  let engineerCard = `
  <div>
<div>
<h3>Engineer<h3/>
${engineer.name}</div>
<ul>
<li>Id: ${engineer.id}</li>
<li>Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
<a href="https://github.com/${engineer.github}" target="_blank"><li>GitHub:${engineer.github}</li></a>
</ul>
</div>
`;
  return engineerCard;
};
const createIntern = intern => {
  let internCard = `
  <div>
<div>
<h3>Intern<h3/>
${intern.name}</div>
<ul>
<li>Id: ${intern.id}</li>
<li>Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
<li>School: ${intern.school}</li>
</ul>
</div>
  `;
  return internCard;
};
module.exports = {
  CreateManager: createManager,
  CreateEngineer: createEngineer,
  CreateIntern: createIntern
}
