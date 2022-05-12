const inquirer = require("inquirer");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const employees = [];

function hireTM() {
    inquirer
        .prompt([{
            message: "Enter team member's name",
            name: "name"
        },
        {
            type: "list",
            name: "role",
            message: "Select team member's role",
            choices: [
                "Engineer",
                "Intern",
                "Manager"
            ]
        },
        {
            message: "Enter team member's id",
            name: "id"
        },
        {
            message: "Enter team member's email address",
            name: "email"
        }])
        .then(function({name, role, id, email}) {
            let roleInfo = "";
            if (role === "Engineer") {
                roleInfo = "GitHub username";
            } else if (role === "Intern") {
                roleInfo = "school name";
            } else {
                roleInfo = "office phone number";
            }
            inquirer.prompt([{
                message: `Enter team member's ${roleInfo}`,
                name: "roleInfo"
            },
            {
                type: "list",
                message: "Would you like to add more team members?",
                choices: [
                    "yes",
                    "no"
                ],
                name: "hireMore"
            }])
            .then(function({roleInfo, hireMore}) {
                let newTM;
                if (role === "Engineer") {
                    newTM = new Engineer(name, id, email, roleInfo);
                } else if (role === "Intern") {
                    newTM = new Intern(name, id, email, roleInfo);
                } else {
                    newTM = new Manager(name, id, email, roleInfo);
                }
                employees.push(newTM);
                console.log(employees);
                if (hireMore === "yes") {
                    hireTM();
                }
            });
        });
}

hireTM();