const { request } = require("./utils");

async function getPlayerDetails() {
  return await request("scores/json/players");
}

async function getPlayerDetailsById(playerId) {
  return await request(`scores/json/players/${playerId}`);
}

async function getPlayerDetailsByTeamId(teamId) {
  return await request(`scores/json/players/${teamId}`);
}

async function getPlayerGameStats(season, week) {
  return await request(
    `stats/json/playergamestatsbyplayerid/${season}/${week}`
  );
}

async function getPlayerGameStatsByPlayerId(season, week, playerId) {
  return await request(
    `stats/json/playergamestatsbyplayerid/${season}/${week}/${playerId}`
  );
}

async function getPlayerSeasonStats(season) {
  return await request(`stats/json/playerseasonstats/${season}`);
}

async function getPlayerSeasonStatsByPlayerId(season, playerId) {
  return await request(
    `stats/json/playerseasonstatsbyplayerid/${season}/${playerId}`
  );
}

async function getLeagueLeadersBySeasonAndPosition(season, position, category) {
  return await request(
    `stats/json/seasonleagueleaders/${season}/${position}/${category}`
  );
}

async function getLeagueLeadersBySeasonAndWeekAndPosition(
  season,
  week,
  position,
  category
) {
  return await request(
    `stats/json/gameleagueleaders/${season}/${week}/${position}/${category}`
  );
}

module.exports = {
  getPlayerDetails,
  getPlayerDetailsById,
  getPlayerSeasonStats,
  getPlayerSeasonStatsByPlayerId,
  getPlayerDetailsByTeamId,
  getPlayerGameStats,
  getPlayerGameStatsByPlayerId,
  getLeagueLeadersBySeasonAndPosition,
  getLeagueLeadersBySeasonAndWeekAndPosition,
};
