"use strict";

navigator.geolocation.getCurrentPosition((position) => {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  fetch(
    `https://cyberjapandata2.gsi.go.jp/general/dem/scripts/getelevation.php\?lon\=${lon}\&lat\=${lat}`
  )
    .then((response) => response.json())
    .then((data) => console.log(data.elevation));
});
