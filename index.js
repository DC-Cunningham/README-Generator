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
      message: "What is the usage of the project?:",
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

const init = async () => {
  try {
    const answers = await askUser();
    const data = await api(answers.name);
    answers.userURL = data.html_url;
    answers.userAvatar = data.avatar_url;
    const readme = generateMarkdown(answers);
    await writeFileAsync("README.md", readme);
  } catch (e) {
    console.log("Error: ", e);
  }
};

init();
