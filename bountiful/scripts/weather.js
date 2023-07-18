const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#icon');
const captionDesc = document.querySelector('#condition');
const humidity = document.querySelector('#humidity');
const threeDays = document.querySelector('.three-day');


/*const url = 'https://api.openweathermap.org/data/2.5/weather?lat=33&lon=-117&units=imperial&appid=f0bbfb845979b7707b3e531a8b03bbc0';
const dailyUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=33&lon=-117&units=imperial&exclude=current,minutely,hourly&appid=f0bbfb845979b7707b3e531a8b03bbc0'

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

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    const humid = weatherData.main.humidity.toFixed(0);

    const descArr = desc.split(" ");

    for (var i = 0; i < descArr.length; i++) {
        descArr[i] = descArr[i].charAt(0).toUpperCase() + descArr[i].slice(1);
    }
    
    const desc2 = descArr.join(" ");

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc2;
    humidity.textContent = humid;
}
*/

const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=33&lon=-117&units=imperial&appid=f0bbfb845979b7707b3e531a8b03bbc0';

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
    //for current weather
    currentTemp.innerHTML = `<strong>${weatherData.list[0].main.temp.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`;
    const desc = weatherData.list[0].weather[0].description;

    const humid = weatherData.list[0].main.humidity.toFixed(0);
    
    const descArr = desc.split(" ");

    for (var i = 0; i < descArr.length; i++) {
        descArr[i] = descArr[i].charAt(0).toUpperCase() + descArr[i].slice(1);
    }
    
    const desc2 = descArr.join(" ");
    
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc2;
    //captionDesc.textContent = desc;
    humidity.textContent = humid;

    //for 3 day weather
    const day1Temp = document.querySelector('#day1Temp');
    const day1Icon = document.querySelector('#day1Icon');
    day1Temp.innerHTML = `<strong>${weatherData.list[8].main.temp.toFixed(0)}</strong>`;
    const iconsrc1 = `https://openweathermap.org/img/w/${weatherData.list[8].weather[0].icon}.png`;
    const desc1 = weatherData.list[8].weather[0].description;
    day1Icon.setAttribute('src', iconsrc1)
    day1Icon.setAttribute('alt', desc1);

    const day2Temp = document.querySelector('#day2Temp');
    const day2Icon = document.querySelector('#day2Icon');
    day2Temp.innerHTML = `<strong>${weatherData.list[16].main.temp.toFixed(0)}</strong>`;
    const iconsrc2 = `https://openweathermap.org/img/w/${weatherData.list[16].weather[0].icon}.png`;
    const desc02 = weatherData.list[16].weather[0].description;
    day2Icon.setAttribute('src', iconsrc2)
    day2Icon.setAttribute('alt', desc02);

    const day3Temp = document.querySelector('#day3Temp');
    const day3Icon = document.querySelector('#day3Icon');
    day3Temp.innerHTML = `<strong>${weatherData.list[24].main.temp.toFixed(0)}</strong>`;
    const iconsrc3 = `https://openweathermap.org/img/w/${weatherData.list[24].weather[0].icon}.png`;
    const desc3 = weatherData.list[24].weather[0].description;
    day3Icon.setAttribute('src', iconsrc3)
    day3Icon.setAttribute('alt', desc3);
}

apiFetch();