const url = 'data.json';

async function getCompanyData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.companies); 
    displayCompanies(data.companies);
  }
  
const displayCompanies = (companies) => {
    const cards = document.querySelector('article');

    companies.forEach((company) => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let logo = document.createElement('img');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');

        h2.textContent = `${company.name}`

        logo.setAttribute('src', company.imageurl);
        logo.setAttribute('alt', `Logo of ${company.name}`);
        logo.setAttribute('loading', 'lazy');
        //logo.setAttribute('width', '440');
        //logo.setAttribute('height', '340');

        address.textContent = `${company.address}`

        phone.textContent = `${company.phone}`

        website.setAttribute('class', 'companyLink')
        website.textContent = `${company.website}`



        card.appendChild(h2);
        card.appendChild(logo);
        card.append(website);
        card.append(address);
        card.append(phone);
    
        cards.appendChild(card);
    });
}

getCompanyData();
// -------------------------------------------//
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");


gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
