const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

function askUser() {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is GitHub Username?:",
      name: "name",
    },
    {
      type: "input",
      message: "What is the name of your Project?:",
      name: "projectName",
    },
    {
      type: "input",
      message: "Describe your Project?:",
      name: "projectDescription",
    },
    {
      type: "input",
      message: "What is the usage of the project?:",
      name: "usage",
    },
    {
      type: "input",
      message:
        "Were there any other contributors? (separate multiple usernames with ,):",
      name: "contributorUsernames",
    },
  ]);
}

const init = async () => {
  try {
    const answers = await askUser();
    const data = await api(answers.name);
    answers.userURL = data.html_url;
    answers.userAvatar = data.avatar_url;
    answers.userEmail = data.email;
    answers.contributors = answers.contributorUsernames.split(",");
    answers.contributorCount = answers.contributors.length;
    const readme = generateMarkdown(answers);
    await writeFileAsync("READMEMock.md", readme);
    console.log("Congratulations a README.md file has been created for you!");
  } catch (e) {
    console.log("Error: ", e);
  }
};

init();
