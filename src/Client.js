const { HttpClient } = require("./utils");
const Constants = require("./constants");

class DataClient {
  constructor(apiKey) {
    this.http = new HttpClient(apiKey);
    this.constants = Constants;
  }

  async getPlayerDetails() {
    return await this.http.request("scores/json/players");
  }

  async getPlayerDetailsById(playerId) {
    return await this.http.request(`scores/json/players/${playerId}`);
  }

  async getPlayerDetailsByTeamId(teamId) {
    return await this.http.request(`scores/json/players/${teamId}`);
  }

  async getPlayerGameStats(season, week) {
    return await this.http.request(
      `stats/json/playergamestatsbyplayerid/${season}/${week}`
    );
  }

  async getPlayerGameStatsByPlayerId(season, week, playerId) {
    return await this.http.request(
      `stats/json/playergamestatsbyplayerid/${season}/${week}/${playerId}`
    );
  }

  async getPlayerSeasonStats(season) {
    return await this.http.request(`stats/json/playerseasonstats/${season}`);
  }

  async getPlayerSeasonStatsByPlayerId(season, playerId) {
    return await this.http.request(
      `stats/json/playerseasonstatsbyplayerid/${season}/${playerId}`
    );
  }

  async getLeagueLeadersBySeasonAndPosition(season, position, category) {
    return await this.http.request(
      `stats/json/seasonleagueleaders/${season}/${position}/${category}`
    );
  }

  async getLeagueLeadersBySeasonAndWeekAndPosition(
    season,
    week,
    position,
    category
  ) {
    return await this.http.request(
      `stats/json/gameleagueleaders/${season}/${week}/${position}/${category}`
    );
  }

  async getTeams() {
    return await this.http.request("scores/json/teams");
  }
}
module.exports = DataClient;
