const client = require("../src/index")("fe3b29c24c9a4fb69eca5941eebb3300");
const main = async () => {
  const getPlayersResult = await client.getPlayerDetails();
  console.log({ getPlayersResult });

  const getPlayersByTeamResult = await client.getPlayerDetailsByTeamId(
    client.constants.TEAM_IDENTIFIERS.BUF
  );
  console.log({ getPlayersByTeamResult });
};

main();
