const datefield = document.querySelector("time");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
datefield.textContent = fulldate;
datefield.setAttribute("datetime", fulldate)

const options = {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'}
document.getElementById('currentDate').textContent = new Date().toLocaleTimeString('en-US', options);
document.getElementById("dateandtime").value = new Date().toLocaleTimeString('en-US', options);
const yearOptions = {year: 'numeric'}
document.getElementById('currentYear').textContent = new Date().getFullYear('en-US', options);


const meetDay = document.querySelector("#meetgreat");
const weekday = now.getDay();

if(weekday == 1 || weekday == 2){
    const meetMessage = document.createElement('p');
    meetDay.append(meetMessage);
    meetMessage.textContent = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
}
