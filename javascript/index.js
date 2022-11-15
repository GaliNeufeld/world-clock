function updateTime() {
  //San-francisco
  let sanFranciscoElement = document.querySelector("#san-francisco");
  if (sanFranciscoElement) {
    let sanFranciscoDateElement = sanFranciscoElement.querySelector(".date");
    let sanFranciscoTime = moment().tz("America/Los_Angeles");
    sanFranciscoDateElement.innerHTML = sanFranciscoTime.format("MMMM D, YYYY");

    let sanFranciscoTimeElement = sanFranciscoElement.querySelector(".time");
    sanFranciscoTimeElement.innerHTML = sanFranciscoTime.format(
      "h:mm:ss [<small>]A[</small]"
    );
  }
  //Paris
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTime = moment().tz("Europe/Paris");
    parisDateElement.innerHTML = parisTime.format("MMMM D, YYYY");

    let parisTimeElement = parisElement.querySelector(".time");
    parisTimeElement.innerHTML = parisTime.format(
      "h:mm:ss [<small>]A[</small]"
    );
  }
}
updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();  
  }
  let cityName = cityTimeZone
    .replace("_", " ")
    .replace("Tokyo", "Osaka")
    .split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = ` 
  <div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM D, YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(
    "A"
  )}</small>
        </div>
      </div>`;
}
