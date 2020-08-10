const boton = document.querySelector('.menu-boton');
const desplegable = document.querySelector('.menu-desplegable');

console.log(desplegable);
console.log(boton);


boton.addEventListener('click', ()=>{
    desplegable.classList.toggle("spread")
})


window.addEventListener('click', e=>
{if(desplegable.classList.contains('spread') && e.target != desplegable && e.target != boton)
{desplegable.classList.toggle("spread")}})
