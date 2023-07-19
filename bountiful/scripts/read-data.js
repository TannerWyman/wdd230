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
    
    let name = document.getElementById('name').value;
    let mail = document.getElementById('mail').value;
    let phone = document.getElementById('phone').value
    
    let fruit1 = document.getElementById('optionsA').value;
    let fruit2 = document.getElementById('optionsB').value;
    let fruit3 = document.getElementById('optionsC').value;

    let fruits = []
    fruits.push(fruit1);
    fruits.push(fruit2);
    fruits.push(fruit3)

    async function getFruitData() {
        const response = await fetch(url);
        const data = await response.json();
        //console.log(data); 

        function getFruitByName(name) {
            return data.filter(
                function(data){ return data.name == name }
            );
        }

        fruits.forEach(fruit => {
            var fruitInfo = getFruitByName(fruit);
            //console.log(fruitInfo);

            carbohydrates += fruitInfo[0].nutritions.carbohydrates;
            protein += fruitInfo[0].nutritions.protein;
            fat += fruitInfo[0].nutritions.fat;
            calories += fruitInfo[0].nutritions.calories;
            sugar += fruitInfo[0].nutritions.sugar;

        });

        log.textContent = `Order Informaiton\n Name: ${name}\r\n Email: ${mail} <br>
        Phone Number: ${phone}<br> First Fruit: ${fruit1}<br> Second Fruit: ${fruit2}<br>
        Third Fruit: ${fruit3}<br>Carbohydrates: ${carbohydrates} \nProteins: ${protein}
        \nFat: ${fat} \nSugers: ${sugar} \nCalories: ${calories}`;
    }
    
    getFruitData()

    event.preventDefault();

    document.getElementById("log").style.backgroundColor = "#00c49a";

    document.getElementById('submit').onclick = function() {
        this.disabled = true;
    }

    let drinkNum = Number(window.localStorage.getItem("drink-total")) || 0;
    drinkNum += 1;
    localStorage.setItem("drink-total", drinkNum);
}

let carbohydrates = 0;
let protein = 0;
let fat = 0;
let calories = 0;
let sugar =0;

const form = document.getElementById("form");
const log = document.getElementById("log");
form.addEventListener("submit", logSubmit);

