const request = require('request-promise-native');

const fetchMyIP = (() => {
  return request('https://api.ipify.org?format=json');
});

const fetchCoordsByIP = (body) => {
  const ip = JSON.parse(body).ip;
  console.log("IP is ", ip);
  return request(`https://ipvigilante.com/json/${ip}`);
};

const fetchISSFlyOverTimes = function(body) {
  const { latitude, longitude } = JSON.parse(body).data;
  const url = `http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`;
  return request(url);
};

// const fetchISSFlyOverTimes = function() => {
//   const latitude = JSON.parse(body).data.latitude;
//   const longitude = JSON.parse(body).data.longitude;
//   console.log(latitude, longitude);
//   return request(`http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`);
// };

const nextISSTimesForMyLocation = () => {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((data) => {
      const { response } = JSON.parse(data);
      return response;
    });
};

module.exports = {
  fetchMyIP,
  fetchCoordsByIP,
  fetchISSFlyOverTimes,
  nextISSTimesForMyLocation
};