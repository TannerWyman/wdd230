const options = {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'}
document.getElementById('currentdate').textContent = new Date().toLocaleTimeString('en-US', options);

const yearOptions = {year: 'numeric'}
document.getElementById('currentyear').textContent = new Date().getFullYear('en-US', options);