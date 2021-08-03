const DataClient = require("./Client");

function Client(apiKey) {
  return new DataClient(apiKey);
}

module.exports = Client;
