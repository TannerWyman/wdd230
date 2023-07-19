let drinkNum = Number(window.localStorage.getItem("drink-total")) || 0;

if (drinkNum !== 0) {
    const meetDay = document.querySelector("#drinkNum");
	meetDay.textContent = `You have ordered ${drinkNum}# drinks in total!`;

//You have ordered <span ></span># drinks in total!
} else {
    const meetDay = document.querySelector("#drinkNum");
	meetDay.textContent = `You have not ordered any drinks!`;
}