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
    let special = document.getElementById('special').value
    
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

        /*
        log.textContent = `Order Informaiton\n Name: ${name}\r\n Email: ${mail} <br>
        Phone Number: ${phone}<br>Special Insturctions: ${special}<br> First Fruit: ${fruit1}<br> Second Fruit: ${fruit2}<br>
        Third Fruit: ${fruit3}<br>Carbohydrates: ${carbohydrates} \nProteins: ${protein}
        \nFat: ${fat} \nSugers: ${sugar} \nCalories: ${calories}`;
        */
       order.textContent = "Order Information"
       orderName.textContent = "Name: " + name
       orderMail.textContent = "Email: " + mail
       orderPhone.textContent = "Phone: " + phone
       orderSpecial.textContent = "Special Insturctions: " + special
       orderFruit1.textContent = "1st Fruit: " + fruit1
       orderFruit2.textContent = "2nd Fruit2: " + fruit2
       orderFruit3.textContent = "3rd Fruit3: " + fruit3
       carbs.textContent = "Carbohydrates: " + carbohydrates.toFixed(2)
       orderProtein.textContent = "Proteins: " + protein.toFixed(2)
       orderFat.textContent = "Fat: " + fat.toFixed(2)
       orderSuger.textContent = "Suger: " + sugar.toFixed(2)
       orderCalories.textContent = "Carlories: " + calories.toFixed(2)
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
const log = document.getElementById("log");
const form = document.getElementById("form");

const order = document.getElementById("order");
const orderName = document.getElementById("orderName");
const orderMail = document.getElementById("orderMail");
const orderPhone = document.getElementById("orderPhone");
const orderSpecial = document.getElementById("orderSpecial");
const orderFruit1 = document.getElementById("orderFruit1");
const orderFruit2 = document.getElementById("orderFruit2");
const orderFruit3 = document.getElementById("orderFruit3");
const carbs = document.getElementById("carbs");
const orderProtein = document.getElementById("protein");
const orderFat = document.getElementById("fat");
const orderCalories = document.getElementById("calories");
const orderSuger = document.getElementById("sugar");

form.addEventListener("submit", logSubmit);