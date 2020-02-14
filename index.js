const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned IP:' , ip);

//   fetchCoordsByIP(ip, (error, data) => {
//     if (error) {
//       console.log("It didn't work!" ,error);
//     }
  
//     console.log(`It worked! Returned co-ordinates: ${latitude}, ${longitude}`);
//   });

//   const myCoords = { latitude: '43.63830', longitude: '-79.43010' };

//   fetchISSFlyOverTimes(myCoords, (error, passTimes) => {
//     if (error) {
//       console.log("It didn't work!" , error);
//     }
  
//     console.log('It worked! Returned flyover times:' , passTimes);
//   });
// });

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  printPassTimes(passTimes);
});