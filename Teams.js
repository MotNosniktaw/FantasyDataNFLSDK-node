const { request } = require("./utils");

async function getTeams() {
  return await request("scores/json/teams");
}

module.exports = {
  getTeams,
};
