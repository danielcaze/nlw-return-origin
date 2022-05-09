const navigation = document.querySelector("#navigation")
const body = document.querySelector("body")
const buttonOpn = document.querySelector(".open_menu")

document.addEventListener("scroll", () => {
    if(scrollY > 0)
        navigation.classList.add('scroll')
    else
        navigation.classList.remove('scroll')
})

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