const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#icon');
const captionDesc = document.querySelector('#condition');
const humidity = document.querySelector('#humidity');


const url = 'https://api.openweathermap.org/data/2.5/weather?lat=33&lon=-117&units=imperial&appid=f0bbfb845979b7707b3e531a8b03bbc0';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data);
         displayResults(data);
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
