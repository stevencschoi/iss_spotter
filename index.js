const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

fetchCoordsByIP('66.207.199.230', (error, data) => {
  if (error) {
    console.log("It didn't work!" ,error);
  }

  console.log(`It worked! Returned co-ordinates: ${data.latitude}, ${data.longitude}`);
});

const myCoords = { latitude: '43.63830', longitude: '-79.43010' };

fetchISSFlyOverTimes(myCoords, (error, passTimes) => {
  if (error) {
    console.log("It didn't work!" , error);
  }

  console.log('It worked! Returned flyover times:' , passTimes);
});
