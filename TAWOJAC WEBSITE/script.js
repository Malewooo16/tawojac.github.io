const icon1 = document.querySelector ("#nav-icon1");
const nav=document.querySelector(".nav") 

icon1.addEventListener ("click", () => {
    icon1.classList.toggle("open") 
    nav.classList.toggle("active")
})