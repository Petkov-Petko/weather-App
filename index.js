const apiKey = "2c446d6021375b8c6df0cdb66882f9c6";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
  const respone = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (respone.status === 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }else{
    var data = await respone.json();

  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
  let condition = data.weather[0].main  
  const imageElement = document.querySelector(".weather-icon");
  if (condition === "Drizzle"){
    imageElement.src = "images/drizzle.png"
  }else if (condition === "Rain"){
    imageElement.src = "images/rain.png"
  }else if (condition === "Snow"){
    imageElement.src = "images/snow.png"
  }else if (condition === "Mist"){
    imageElement.src = "images/mist.png"
  }else if (condition === "Clear"){
    imageElement.src = "images/sun.png"
  }else if (condition === "Clouds"){
    imageElement.src = "images/clouds.png"
  }
  document.querySelector(".weather").style.display = "block"
  document.querySelector(".error").style.display = "none";
  
  }
  
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

checkWeather();
