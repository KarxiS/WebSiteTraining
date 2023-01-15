const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);
let score = JSON.parse(localStorage.getItem("score"))

if(!score) {
    score = 0;
}


const questionEl = document.getElementById("question");
const formEl = document.getElementById("form");
const inputElem = document.getElementById("input")
const scoreElem = document.getElementById("skore")
scoreElem.innerText = `skore: ${score}`

questionEl.innerText = `kolko je ${num1} x ${num2}?`;

const spravnaOdpoved = num1*num2;

formEl.addEventListener("submit", ()=> {
    const userAnswer = +inputElem.value;
    if (userAnswer == spravnaOdpoved) {
        score++
        updateLocalStorage();
        score.innerText = score;
        console.log(score);
    } else {
        
        score--
        updateLocalStorage();
        console.log(score);
    }

})

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score));
}


