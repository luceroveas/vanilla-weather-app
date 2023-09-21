function displayTemperature(response) {
  console.log(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

function search(city) {
  let apiKey = "cf3b730931o06a0e6tc4f28493b09cd6";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query= ${city}&key=${apiKey}&units=metric`;
}

axios.get(apiUrl).then(displayTemperature);
