function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment.tz("America/Los_Angeles");
    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do, YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let osloElement = document.querySelector("#oslo");
  if (osloElement) {
    let osloDateElement = osloElement.querySelector(".date");
    let osloTimeElement = osloElement.querySelector(".time");
    let osloTime = moment.tz("Europe/Oslo");
    osloDateElement.innerHTML = osloTime.format("MMMM Do, YYYY");
    osloTimeElement.innerHTML = osloTime.format("h:mm:ss [<small>]A[</small>]");
  }

  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment.tz("Europe/London");
    londonDateElement.innerHTML = londonTime.format("MMMM Do, YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }
  let cityName = cityTimezone.replace("_", "").split("/")[1];
  let citiesElement = document.querySelector("#cities");

  let cityTime = moment.tz(cityTimezone);

  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
    </div>
    <div class="time">
    ${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small>
    </div>
  </div>
  <a href="/" class="return-button">Back to cities</a>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectorElement = document.querySelector("#city-selector");
citiesSelectorElement.addEventListener("change", updateCity);
