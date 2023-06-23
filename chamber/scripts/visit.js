//Shows the number of days sense the last time the user visited the page using localStorage
const visitSection = document.querySelector("#visit");

const msToDays = 84600000;
const msToSec = 1000;
const today = Date.now();

let lastVisit = Number(window.localStorage.getItem("lastVisit-ls")) || 0;

if (lastVisit !== 0) {
    let betwenDays = (Date.now() - lastVisit) / msToDays
    if (betwenDays < 1){
        visitSection.textContent = ` Not to long ago.`;
    } else{
        visitSection.textContent = betwenDays.toFixed(0) + ` days ago.`;
    }
} else {
    const meetDay = document.querySelector("#meetgreat");
    const firstVisit = document.createElement('p');
    meetDay.append(firstVisit);
    firstVisit.textContent = "Welcome to Tremonton!";

	visitSection.textContent = `This is your first visit.`;
}
lastVisit = today;
localStorage.setItem("lastVisit-ls", lastVisit);
