const url = 'data.json';

async function getCompanyData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data); 
    displayCompanies(data);
  }
  
const displayCompanies = (data) => {
    const location = document.querySelector('options');
    companies.forEach((data) => {
        let fruit = document.createElement('option');
        fruit.textContent = `${data.name}`

        fruit.setAttribute('value', data.name);

        location.appendChild(fruit);
    });
}

getCompanyData();