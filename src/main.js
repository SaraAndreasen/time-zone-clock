// Alert the current date and time of the selected city with the timezone
function selectedCountry(event) {
  if (event.target.value.length > 0) {
    let currentTime = moment()
      .tz(event.target.value)
      .format("dddd, MMMM D, YYYY h:mm A");

    alert(`It is ${currentTime} in ${event.target.value}`);
  }
}

let countrySelect = document.querySelector("#cities");
countrySelect.addEventListener("change", selectedCountry);
