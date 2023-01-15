const containerElem =  document.querySelector(".container");


for (let index = 0; index < 30; index++) {
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container");
    containerElem.appendChild(colorContainerEl);
    
}


const colorContainerEls= document.querySelectorAll(".color-container");
console.log(colorContainerEls);

randomColor();
generateColors();






function randomColor() {
    const chars = "0123456789abcdef"
    const colorCodeLenght = 6;
    let colorCode = ""
    for (let index = 0; index < colorCodeLenght; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNum, randomNum+1)
        

        
    }
    return colorCode
}

function generateColors() {
    colorContainerEls.forEach((colorContainerEl)=> {
        const newColorCode = randomColor();
        colorContainerEl.style.backgroundColor = "#" + newColorCode;
        colorContainerEl.innerText = "#"+ newColorCode
    })

}

