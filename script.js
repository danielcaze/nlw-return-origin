const navigation = document.querySelector("#navigation")
const body = document.querySelector("body")
const buttonOpn = document.querySelector(".open_menu")
const buttonCls = document.querySelector(".close_menu")

document.addEventListener("scroll", () => {
    if(scrollY > 0)
        navigation.classList.add('scroll')
    else
        navigation.classList.remove('scroll')
})

buttonOpn.addEventListener("click", () => {
    body.classList.add("menu_expanded")
})

buttonCls.addEventListener("click", () => {
    body.classList.remove("menu_expanded")
})