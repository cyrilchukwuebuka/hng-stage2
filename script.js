let navMenubtn = document.querySelector("menu-btn")
let navMenu = document.querySelector(".navbar .menu")

 navMenubtn.addEventListener('click', (e) => {
     navMenu.classList.toggle('.active')
 })