const hodinaEl= document.getElementById("Hodiny");
const minutaEl= document.getElementById("minuty");
const sekundaEl = document.getElementById("sekundy");
const ampmEl= document.getElementById("ampm");
function aktualizujHodiny() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM"

    if (h >12 ) {
        h = h-12;
        ampm = "PM";
    } 

    h = h<10 ? "0"+h :h;
    m = m<10 ? "0"+m :m;
    s = s<10 ? "0"+s :s;
    

    hodinaEl.innerText = h;
    minutaEl.innerText = m;
    sekundaEl.innerText = s;
    ampm.innerText = ampm;
    
    setTimeout(() => {
        aktualizujHodiny();
    }, 1000);



}
aktualizujHodiny();