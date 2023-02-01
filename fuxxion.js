const activador = document.querySelector('.navbar-email');
const Menucito =  document.querySelector('.desktop-menu ');

activador.addEventListener('click', ()=>{
    Menucito.classList.toggle('inactive');
});