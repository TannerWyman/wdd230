const url1 = 'data.json';

async function getCompanyData() {
    const response = await fetch(url1);
    const data = await response.json();
    //console.table(data.companies); 
    displayCompanies(data.companies);
  }
  
const displayCompanies = (companies) => {
    const cards = document.getElementById('highlights');
    //let companyNum = 0;
    let usedCompanies = [];
    var companyNum = usedCompanies.length;

    while(companyNum != 2){
        var randomElement = Math.random() * ((companies.length - 1) - 0);
        randomElement = Math.round(randomElement)

        var item = usedCompanies.includes(randomElement)

        if(item == true){
            //console.log("found a used number")
        } else {
            //console.log(randomElement);
            let company = companies[randomElement];

            if(company.membership == "gold" ||company.membership == "silver"){
                let card = document.createElement('div');
                let h2 = document.createElement('h2');
                let logo = document.createElement('img');
                let phone = document.createElement('p');
                
                card.setAttribute('class', 'company')
                
                h2.textContent = company.name
                
                
                logo.setAttribute('src', company.imageurl);
                logo.setAttribute('alt', `Logo of ${company.name}`);
                logo.setAttribute('loading', 'lazy');
                
                phone.textContent = `${company.phone}`
                
                card.appendChild(h2);
                card.appendChild(logo);
                card.append(phone);
                
                cards.appendChild(card);
                usedCompanies.push(randomElement);
                companyNum++
            }
        }
    }

    /*
    companies.forEach((company) => {
        let card = document.createElement('div');
        let h2 = document.createElement('h2');
        let logo = document.createElement('img');
        let phone = document.createElement('p');

        card.setAttribute('class', 'company')

        h2.textContent = `${company.name}`

        logo.setAttribute('src', company.imageurl);
        logo.setAttribute('alt', `Logo of ${company.name}`);
        logo.setAttribute('loading', 'lazy');

        phone.textContent = `${company.phone}`

        card.appendChild(h2);
        card.appendChild(logo);
        card.append(phone);
    
        cards.appendChild(card);
    });*/
}

getCompanyData();

/*if(company.membership == "gold" || "silver"){
    let card = document.createElement('div');
    let h2 = document.createElement('h2');
    let logo = document.createElement('img');
    let phone = document.createElement('p');
    
    card.setAttribute('class', 'company')
    
    h2.textContent = company.name
    
    
    logo.setAttribute('src', company.imageurl);
    logo.setAttribute('alt', `Logo of ${company.name}`);
    logo.setAttribute('loading', 'lazy');
    
    phone.textContent = `${company.phone}`
    
    card.appendChild(h2);
    card.appendChild(logo);
    card.append(phone);
    
    cards.appendChild(card);
    usedCompanies.push(randomElement);
}*/