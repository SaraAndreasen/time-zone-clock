// Alert the current date and time of the selected city with the timezone
function selectedCountry(event) {
  console.log(event.target.value);
  if (event.target.value === "paris") {
    let currentTime = moment
      .tz("Europe/Paris")
      .format("[It is] dddd, D MMMM, YYYY, hh:mm A [in Europe/Paris]");
    alert(currentTime);
  }
  if (event.target.value === "tokyo") {
    let currentTime = moment
      .tz("Asia/Tokyo")
      .format("[It is] dddd, D MMMM, YYYY, hh:mm A [in Asia/Tokyo]");
    alert(currentTime);
  }
  if (event.target.value === "sydney") {
    let currentTime = moment
      .tz("Australia/Sydney")
      .format("[It is] dddd, D MMMM, YYYY, hh:mm A [in Australia/Sydney]");
    alert(currentTime);
  }
}

let countrySelect = document.querySelector("#cities");
countrySelect.addEventListener("change", selectedCountry);
