const temp = document.getElementById("temp").innerHTML;
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