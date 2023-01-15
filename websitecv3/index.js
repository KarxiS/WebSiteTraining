const btnElem = document.querySelector(".btn");
btnElem.addEventListener("mouseover", (event)=> {
const x = (event.pageX - btnElem.offsetLeft);
const y = (event.pageY - btnElem.offsetTop);

btnElem.style.setProperty("--xPos", x+"px");
btnElem.style.setProperty("--yPos", y+"px");
})
