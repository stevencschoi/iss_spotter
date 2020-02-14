const request = require('request');
const url = 'https://api.ipify.org?format=json';

const fetchMyIP = function(callback) {
  // use request to fetch IP address from JSON API
  request(url, (error, response, body) => {
  // error can be set if invalid domain, user is offline, etc.
    if (error) {
      callback(error, null);
      return;
    }
    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    if (body) {
      const data = JSON.parse(body);
      callback(error, data.ip);
    }
  });
};

const fetchCoordsByIP = (ip, callback) => {

};

module.exports = {
  fetchMyIP,
  fetchCoordsByIP
};