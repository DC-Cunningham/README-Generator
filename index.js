const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function askUser() {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is GitHub Username?:",
      name: "name"
    },
    {
      type: "input",
      message: "What is the name of your Project?:",
      name: "projectName"
    },
    {
      type: "input",
      message: "Describe your Project?:",
      name: "projectDescription"
    },
    {
      type: "input",
      message: "What is the uage of the project?:",
      name: "usage"
    },
    {
      type: "input",
      message: "Where there any other contributors? (y/n):",
      name: "contributors"
    },
    {
      type: "input",
      message: "Who was a contributor? (separate multiple usernames with ,):",
      name: "contributorUsernames"
    }
  ]);
}
function buildREADME(answers) {
  return `
  ${answers.name}
  ${answers.projectName}
  ${answers.projectDescription}
  ${answers.usage}
  ${answers.contributorUsernames}
    `;
}

askUser()
  .then(function(answers) {
    const readme = buildREADME(answers);

    return writeFileAsync("README.md", readme);
  })
  .then(function() {
    console.log("Successfully created README.md");
  })
  .catch(function(err) {
    console.log(err);
  });
