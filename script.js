const navigation = document.querySelector("#navigation")
const body = document.querySelector("body")
const buttonOpn = document.querySelector(".open_menu")
const backToTop = document.querySelector("#backToTop");

document.addEventListener("scroll", () => {
   showNavOnScoll(); 
   backToTopButton();
})

showNavOnScoll = () => {
    if (scrollY > 0) navigation.classList.add("scroll");
    else navigation.classList.remove("scroll");
}

backToTopButton = () => {
    if (scrollY > 500) backToTop.classList.add("show");
    else backToTop.classList.remove("show");
}

buttonOpn.addEventListener("click", () => {
    body.classList.add("menu_expanded")
})

closeMenu = () => {
    body.classList.remove("menu_expanded")
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700, 
}).reveal(`#home,
#home img,
#home .stats,
#services,
#services header,
#services .card,
#about,
#about header,
#about .content`)