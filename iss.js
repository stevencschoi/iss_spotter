const request = require('request');
const url = 'https://api.ipify.org?format=json';

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const fetchMyIP = function(callback) { 
  // use request to fetch IP address from JSON API
  request(url, (error, response, body) => {
    if (error) callback(error);
    if (body) {
      console.log(`Your IP address is ${body}`);
    }
  });
}

module.exports = { fetchMyIP };