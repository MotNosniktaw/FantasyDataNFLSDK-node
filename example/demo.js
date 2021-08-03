const client = require("../src/index")("REPLACE WITH API KEY");
const main = async () => {
  const getPlayersResult = await client.getPlayerDetails();
  console.log({ getPlayersResult });

  const getPlayersByTeamResult = await client.getPlayerDetailsByTeamId(
    client.constants.TEAM_IDENTIFIERS.BUF
  );
  console.log({ getPlayersByTeamResult });
};

main();
