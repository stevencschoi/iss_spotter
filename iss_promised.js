const request = require('request-promise-native');

const fetchMyIP = (() => {
  return request('https://api.ipify.org?format=json');
});

const fetchCoordsByIP = (body) => {
  const ip = JSON.parse(body).ip;
  console.log("IP is ", ip);
  return request(`https://ipvigilante.com/json/${ip}`);
};

module.exports = {
  fetchMyIP,
  fetchCoordsByIP
};