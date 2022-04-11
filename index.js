const allEmployees = require('./src/PopulateEmployees');
console.log('All Employees', allEmployees());

const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")


const inquirer = require('inquirer')
const fs = require('fs');

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, { flag: 'w' }, function (err) {
        if (err) {
            throw err
        }
    })
}

const employees = [];

const questions = [
    {
        name: 'Role',
        type: 'list',
        message: 'What is your role?',
        choices: ['Intern', 'Engineer', 'Manager']
    },
    {
        name: 'Id',
        message: 'What is your Id?',
    },
    {
        name: 'Name',
        message: 'What is your name?',
    },
    {
        name: 'Email',
        message: 'What is your email?'
    },
    {
        name: 'School',
        message: 'What school are you attending?',
        when(answers) {
            return answers.Role === 'Intern'
        }
    },
    {
        name: 'OfficeNumber',
        message: 'What is your office number?',
        when(answers) {
            return answers.Role === 'Manager'
        }
    },
    {
        name: 'Github',
        message: 'What is your Github username?',
        when(answers) {
            return answers.Role === 'Engineer'
        }
    },
];

inquirer.prompt(questions).then(answers => {
    var employee = null
    if (answers.Role == 'Intern') {
        employee = new Intern(answers.Name, answers.Id, answers.Role, answers.School)
        // console.log("Intern")
        employees.push(employee)
    }
    else if (answers.Role == 'Engineer') {
        employee = new Engineer(answers.Name, answers.Id, answers.Role, answers.Github)
        // console.log("Engineer")
        employees.push(employee)
    }
    else {
        employee = new Manager(answers.Name, answers.Id, answers.Role, answers.OfficeNumber)
        // console.log("Manager")
        employees.push(employee)
    }
console.log(employees)
    fs.readFile('src/Employees.json', 'utf-8', (err, data) => {
        if (err) {
            throw err
        }

        var employeeData = JSON.parse(data);

        console.info(employeeData);

        employeeData.employees.push(employee);
        writeToFile('src/Employees.json', JSON.stringify(employeeData))
    })
    
    
})
