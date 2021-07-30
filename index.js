const Teams = require("./Teams");
const Players = require("./Players");
const Constants = require("./constants");

const client = {
  Teams,
  Players,
  Constants,
};

function Client() {
  return client;
}

module.exports = Client;
