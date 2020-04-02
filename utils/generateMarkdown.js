const api = require("./api");

function generateMarkdown(answers) {
  return `
  ### ${answers.name}
  ## ${answers.projectName}
  # ${answers.projectDescription}
  # ${answers.usage}
  ${answers.contributorUsernames}
    `;
}

module.exports = generateMarkdown;
