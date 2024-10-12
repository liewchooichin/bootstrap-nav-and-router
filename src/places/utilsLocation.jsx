
/**Utils for location using Geolocation API 
 * Source: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
*/

// Global variables
let crd;

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  crd = pos.coords;
  console.log("Your current position is:");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

export function myNavigator(){
  navigator.geolocation.getCurrentPosition(
    success, error, options);
  return crd;
  }
