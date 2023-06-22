const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-type');
const windSpeed = document.querySelector('#windSpeed');


const url = 'https://api.openweathermap.org/data/2.5/weather?lat=41&lon=-112&units=imperial&appid=8fc8dbed93e6aa378684a8986335a9f0';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data);
         displayResults(data);
         windchill();
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}
function displayResults(weatherData){
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    windSpeed.innerHTML = weatherData.wind.speed.toFixed(0);

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    const descArr = desc.split(" ");

    for (var i = 0; i < descArr.length; i++) {
        descArr[i] = descArr[i].charAt(0).toUpperCase() + descArr[i].slice(1);
    }
    
    const desc2 = descArr.join(" ");

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc2;


}  

apiFetch();



function windchill(){
    const temp = document.getElementById("temp").innerText;
    const wind = document.getElementById("windSpeed").innerHTML;
    const windchill = document.getElementById("windSection");
    
    const powerOfWind = Math.pow(wind, 0.16);
    
    if(temp <= 50 && wind > 3){
        var result = 35.74 + 0.6215 * temp - 35.75 * powerOfWind + 0.4275 * temp * powerOfWind;
        result = parseFloat(result).toFixed(2);
    }else{
        var result = "N/A";
    }
    
    
    windchill.innerHTML += `<p>Wind Chill:&nbsp;&nbsp;&nbsp;&nbsp;${result}&deg;F</p>`;    
}
