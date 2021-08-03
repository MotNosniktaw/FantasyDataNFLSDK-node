const axios = require("axios");

class HttpClient {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }
  /**
   *
   * @param {String} url
   * @param {Object} data
   * @param {String} method
   * @returns
   */
  async request(url, method = "GET", data) {
    return await axios({
      method,
      url: `https://api.sportsdata.io/v3/nfl/${url}`,
      data,
      headers: {
        "Ocp-Apim-Subscription-Key": this.apiKey,
      },
    })
      .then((res) => {
        //   console.log({ res });
        return res.data;
      })
      .catch((err) => {
        console.log({ err });
        return err;
      });
  }
}

module.exports = {
  HttpClient,
};
