const url = 'data.json';

async function getFruitData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data); 
    displayFruits(data);
}
  
const displayFruits = (data) => {
    data.forEach((data) => {
        const selectA = document.querySelector('#optionsA')
        const selectB = document.querySelector('#optionsB')
        const selectC = document.querySelector('#optionsC')
        const value = data.name
        const label = data.name

        selectA.insertAdjacentHTML('beforeend', `
          <option value="${value}">${label}</option>
        `)
        selectB.insertAdjacentHTML('beforeend', `
        <option value="${value}">${label}</option>
        `)
        selectC.insertAdjacentHTML('beforeend', `
        <option value="${value}">${label}</option>
        `)
    });
}

getFruitData();

//----------------------------------------------------//

function logSubmit(event) {
    log.textContent = `Order Informaiton ${document.getElementById('#name').textContent} \n ${document.getElementById('#mail').textContent} \n
    ${document.getElementById('#phone').textContent}\n ${document.getElementById('#optionsA').textContent}\n`;
    event.preventDefault();
}

let carbohydrates = 0;
let protein = 0;
let fat = 0;
let calories = 0;
let sugar =0;

const form = document.getElementById("form");
const log = document.getElementById("log");
form.addEventListener("submit", logSubmit);