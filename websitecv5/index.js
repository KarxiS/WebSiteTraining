const navbarElem = document.querySelector(".navbar");
const bottomContrainerElem= document.querySelector(".bottom-container");
console.log(bottomContrainerElem.offsetTop);

window.addEventListener(("scroll"), ()=>{
    console.log(window.scrollY);  
    if (window.scrollY> bottomContrainerElem.offsetTop-navbarElem.offsetHeight - 50) {
        navbarElem.classList.add("active")

    } else {
        navbarElem.classList.remove("active")
    }
})

console.log(navbarElem);