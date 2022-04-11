const fs = require('fs');

module.exports = () => JSON.parse(fs.readFileSync('./src/Employees.json', 'utf-8'));



