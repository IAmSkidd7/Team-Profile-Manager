const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")
const cardGenerator = require("./src/PopulateEmployees")


const inquirer = require('inquirer')
const fs = require('fs');

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, { flag: 'w' }, function (err) {
        if (err) {
            throw err
        }
    })
}

function generateHtml() {
    fs.readFile('src/Employees.json', 'utf-8', (err, data) => {
        if (err) {
            throw err
        }

        var cards = []
        var employeeData = JSON.parse(data);
        employeeData.employees.forEach(element => {
            switch (element.role) {
                case "Manager":
                    var card = cardGenerator.CreateManager(element)
                    cards.push(card)
                    break;
                case "Intern":
                    var card = cardGenerator.CreateIntern(element)
                    cards.push(card)
                    break;
                case "Engineer":
                    var card = cardGenerator.CreateEngineer(element)
                    cards.push(card)
                    break;

            }
        });
        const htmlTemplate = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="../style.css">
            <title>Team Profile Generator</title>
        </head>
        <body>
            <header>
            <h1>My Team</h1>
        </header>
        <main>${(cards.join(''))}</main>
            
        </body>
        </html>
        `;
        fs.writeFile('./dist/page.html', htmlTemplate, (err) => {
            err ? console.error(err) : console.log('success!')
        });
    })

};



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
inquirer.prompt([{
    name: 'choice',
    message: 'Do you want to add a new employee or load page?',
    type: 'list',
    choices: ['New Employee', 'Load Page']
}]).then(answers => {
    if (answers.choice == 'New Employee') {
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
    }
    else if (answers.choice == 'Load Page') {
        generateHtml()
    }
})



