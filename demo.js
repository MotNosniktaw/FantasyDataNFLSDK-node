const { Players, Teams, Constants } = require("./index")();
const main = async () => {
  const getSeasonLeadersResult = await Players.getPlayerDetails();
  console.log({ getSeasonLeadersResult });
};

main();
