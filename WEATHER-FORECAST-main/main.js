const KEY = "f302d1cceaa3b48035dff6cbbbea7c7a";
const URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.querySelector(".seach-box input");
const searchBtn = document.querySelector(".seach-box button");
const weather = document.querySelector(".weather");
const error = document.querySelector(".error");
const body=document.querySelector("body")
async function searchWeather(cityName) {
  const response = await fetch(URL + cityName + `&appid=${KEY}`);
  if (response.status == 404) {
    error.style.display = "block";
    weather.style.display = "none";
  }
  const data = await response.json();

  document.querySelector(".weather").innerHTML = `      
        <div class="weather-image">
          <i class="fa-solid fa-cloud"></i>
        </div>
        <h1 class="temperature">${Math.round(data.main.temp)}&#8451</h1>
        <h2 class="city">${data.name}</h2>
        <ul class="details">
          <li class="colon">
            <i class="fa-solid fa-water"></i>
            <div>
              <p class="humidity">${data.main.humidity}%</p>
              <p>Humidity</p>
            </div>
          </li>
          <li class="colon">
            <i class="fa-solid fa-wind"></i>
            <div>
              <p class="wind-speed">${data.wind.speed} km/h</p>
              <p>Wind speed</p>
            </div>
          </li>
        </ul>`;

  const weatherIcon = document.querySelector(".weather-image i");

  if (data.weather[0].main == "Clear") {
    weatherIcon.className = "fa-solid fa-sun";
    body.style.backgroundImage=url(weather2.jpeg);
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.className = "fa-solid fa-cloud-rain";
    body.style.backgroundImage=url(rainy.jpeg);

  } else if (data.weather[0].main == "Mist") {
    weatherIcon.className = "fa-solid fa-cloud-mist";
    body.style.backgroundImage=url(mist.jpeg);

  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.className = "fa-solid fa-cloud-drizzle";
    body.style.backgroundImage=url(drizzle.jpeg);

  }
  error.style.display = "none";
  weather.style.display = "block";
}

searchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  searchWeather(searchInput.value);
  searchInput.value = "";
});
searchInput.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    searchWeather(searchInput.value);
    searchInput.value = "";
  }
});
