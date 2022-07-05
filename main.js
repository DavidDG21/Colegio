const buttonMenu=document.getElementById('button-bars')
const menu=document.getElementById('menu')

//Abrir y cerrar el menu
buttonMenu.addEventListener('click', ()=>{
    changeClass(menu, "menu_active")
})

const changeClass=(element, nameClass)=>{
    element.classList.toggle(nameClass)
}
