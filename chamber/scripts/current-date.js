const datefield = document.querySelector("time");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
datefield.textContent = fulldate;

const options = {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'}
document.getElementById('currentDate').textContent = new Date().toLocaleTimeString('en-US', options);

const yearOptions = {year: 'numeric'}
document.getElementById('currentYear').textContent = new Date().getFullYear('en-US', options);