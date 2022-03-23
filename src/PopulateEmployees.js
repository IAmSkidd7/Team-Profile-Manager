const fs = require('fs');

fs.readFile('Employees.json', 'utf-8', (err, data) => {
    if (err) {
        throw err
    }

    var employeeData = JSON.parse(data);

    console.info(employeeData);

    
})