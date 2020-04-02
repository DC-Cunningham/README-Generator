function generateMarkdown({
  name,
  projectName,
  projectDescription,
  usage,
  contributorUsernames,
  userURL,
  userAvatar
}) {
  return `
  ### ${name}
  ## ${projectName}
  # ${projectDescription}
  # ${usage}
  ${contributorUsernames}
  ${userURL}
  ${userAvatar}
    `;
}

module.exports = generateMarkdown;
