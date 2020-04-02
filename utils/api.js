const axios = require("axios");

const api = {
  getUser(username) {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then(response => {
        return response;
      })
      .catch(error => {
        console.log(error);
      });
  }
};

module.exports = api;
