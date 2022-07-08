const buttonMenu=document.getElementById('button-bars')
const menu=document.getElementById('menu')
const buttonClose=document.getElementById('button_close')

//Abrir y cerrar el menu
buttonMenu.addEventListener('click', ()=>{
    changeClass(menu, "menu_active")
    changeClass(document.body, "overflow_block")
    if(buttonClose.classList.contains('fa-bars')){
        buttonClose.classList.replace('fa-bars', 'fa-xmark')
    }else{
        buttonClose.classList.replace('fa-xmark', 'fa-bars')
    }
})

const changeClass=(element, nameClass)=>{
    element.classList.toggle(nameClass)
}
