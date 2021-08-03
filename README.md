# FantasyDataNFLSDK-node

This is a wrapper client around the SportsData.io NFL REST API. You will need to register for a data subscription (https://sportsdata.io/developers/api-documentation/nfl)

## Set up

`yarn add fantasydatanflsdk-node`

Pass your api key

`const client = require("fantasydatanflsdk-node")(API_KEY)`

## Access client methods

`const getPlayersData = client.getPlayerDetails()`