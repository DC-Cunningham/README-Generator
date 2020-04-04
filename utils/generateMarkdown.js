const { BadgeFactory } = require("gh-badges");

const bf = new BadgeFactory();

function generateMarkdown({
  name,
  projectName,
  projectDescription,
  usage,
  contributorUsernames,
  contributorCount,
  userURL,
  userAvatar,
  userEmail
}) {
  if (userEmail === null) {
    userEmail = "Email not available";
  } else {
    userEmail = `[Email](mailto:${userEmail}?subject=Regarding%20${projectName})`;
  }
  const contributorBadge = {
    text: ["Contributors", `${contributorCount}`],
    color: "green",
    template: "flat"
  };
  const badge = bf.create(contributorBadge);
  return `
# ${projectName}

${badge}

## Description
${projectDescription}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Authors and Acknowledgment](#authors-and-acknowledgment)
- [Tests](#tests)
- [Questions](#Questions)
- [License](#license)

## Installation
A step by step series of examples that tell you how to get a development environment running

Say what the step will be

Give an example

And repeat

until finished

End with an example of getting some data out of the system or using it for a little demo

## Usage
${usage}

## Authors and Acknowledgment

###Main Author
[${name}](${userURL})

![Author Avatar](${userAvatar}&s=100)

${userEmail}

###Contributors
${contributorUsernames}

## Tests
Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

Give an example

### And coding style tests

Explain what these tests test and why

Give an example

## Questions

## License

© 2020 Revolution Research Laboratories Pty.Ltd. All Rights Reserved.
    `;
}

module.exports = generateMarkdown;
