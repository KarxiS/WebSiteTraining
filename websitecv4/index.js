const textareaElement = document.getElementById("textarea");
const pocitadloCharakt= document.getElementById("total-counter")
const pocitadloOstavajucich= document.getElementById("remain-counter")
const max = textareaElement.getAttribute("maxLength");

textareaElement.addEventListener("keyup", ()=> {
   
    updateCounter();
})

function updateCounter() {
    const pocet = textareaElement.value.length;
    
    pocitadloCharakt.innerText = pocet;
    pocitadloOstavajucich.innerText = max-pocet;
    if (max-pocet<20) {
        pocitadloOstavajucich.style.color = "red"
    } else {
        pocitadloOstavajucich.style.color = "blue" 
    }
}