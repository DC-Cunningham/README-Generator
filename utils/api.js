const axios = require("axios");

const api = async username => {
  try {
    const { data } = await axios.get(
      `https://api.github.com/users/${username}`
    );
    return data;
  } catch (e) {
    console.log("error", e);
  }
};

module.exports = api;
