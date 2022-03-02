const API_KEY ="8fdf5c40f935e76ebc7f1b1e7e49df66";


function onGeo0k(position){
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
  
  fetch(url).then(response => response.json())
  .then(data => {
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  });
}

function onGeoError(){
  alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeo0k, onGeoError)