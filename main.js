const cardId = document.getElementById("card__id");
const cardText = document.getElementById("card__text");
const button = document.getElementById("card__btn");
const url = "https://api.adviceslip.com/advice";

async function getAdvice() {
    const res = await fetch(url);
    const {slip:{id,advice}} = await res.json();
    cardId.innerText = id;
    cardText.innerText = advice;
}

getAdvice();

button.addEventListener("click", getAdvice);