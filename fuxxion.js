const activador = document.querySelector('.navbar-email');
const Menucito =  document.querySelector('.desktop-menu ');
const menuBurguer =  document.querySelector('.menu');
const mobileMenu =  document.querySelector('.mobile-menu');

activador.addEventListener('click', ()=>{
    Menucito.classList.toggle('inactive');
});

menuBurguer.addEventListener('click', ()=>{
    mobileMenu.classList.toggle('inactive');
});

