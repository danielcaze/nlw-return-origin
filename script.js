const body = document.querySelector("body")
const buttonOpn = document.querySelector(".open_menu")

log = e => console.log(e)

window.addEventListener("scroll", () => {
   showNavOnScroll(); 
   backToTopButton();
   activateMenuAtCurrentSection(home);
   activateMenuAtCurrentSection(services);
   activateMenuAtCurrentSection(about);
   activateMenuAtCurrentSection(contact);
})


activateMenuAtCurrentSection = section => {
    const targetLine = scrollY + innerHeight / 2

    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionEndsAt = sectionTop + sectionHeight

    const nextSectionTopReach = targetLine >= sectionTop
    const sectionEndTargetLine = sectionEndsAt <= targetLine
    
    const sectionBoundaries = !sectionEndTargetLine && nextSectionTopReach

    // DEPOIS VER SE CONSIGO FAZER COM QUERYSELECTOR
    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

    menuElement.classList.remove("active");
    if (sectionBoundaries) menuElement.classList.add("active")
    if (scrollY == 0) menuElement.classList.remove("active");
}

showNavOnScroll = () => {
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