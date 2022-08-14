"use strict";

const bloccoli_btn = document.getElementById("bloccoli_btn");

bloccoli_btn.addEventListener("click", () => {
  document.getElementById("bloccoli").innerText = "...計算中"
  navigator.geolocation.getCurrentPosition((position) => {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    fetch(
      `https://cyberjapandata2.gsi.go.jp/general/dem/scripts/getelevation.php\?lon\=${lon}\&lat\=${lat}`
    )
      .then((response) => response.json())
      .then((data) => document.getElementById("bloccoli").innerText = Math.floor(data.elevation / 0.08))
  });
})