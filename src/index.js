let form = document.querySelector("#city-search");
form.addEventListener("submit", citySearch);

function citySearch(event){
    event.preventDefault();
    let city = document.querySelector("#city-search-input");

    let heading = document.querySelector("h1");
    heading.innerHTML = `${city.value}`;

    let apiKey = "aa9be3525b97615e3cdf28a265e816b5";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}`;
    axios.get(`${apiUrl}&appid=${apiKey}&units=metric`).then(showTemperature);
}

function showTemperature(response) {
  console.log(response.data);
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("h2")
  temperatureElement.innerHTML = `${temperature}°C`;
}

let now = new Date();

let h3 = document.querySelector("h3");

let hours = now.getHours();
let minutes = now.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];

h3.innerHTML = `${day} ${hours}:${minutes}`;
