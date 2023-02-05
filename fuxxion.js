const activador = document.querySelector('.navbar-email');
const Menucito =  document.querySelector('.desktop-menu ');
const menuBurguer =  document.querySelector('.menu');
const mobileMenu =  document.querySelector('.mobile-menu');
const carrito = document.querySelector('.navbar-shopping-cart');
const tagDetalles = document.querySelector('.product-detail');
const cardContainer = document.querySelector('.cards-container');

const tagProducto= document.querySelector('.product-Armonia');
const closeTagproducto = document.querySelector('.product-detail-close');


//Funciones Activadoras de despliegue de menus y tags

activador.addEventListener('click', ()=>{
    Menucito.classList.toggle('inactive');

// tagDetalles esta abierto (NO esta inactive) ? si; Cierra tagDetalles, no;;

     if(!tagDetalles.classList.contains('inactive')){
        tagDetalles.classList.toggle('inactive');
     }
     else if (!tagProducto.classList.contains('inactive')){
        tagProducto.classList.toggle('inactive');
    } 
});

menuBurguer.addEventListener('click', ()=>{
    mobileMenu.classList.toggle('inactive');

//el tagDetalles esta abierto? si;hay que cerrarlo , no;

   if(!tagDetalles.classList.contains('inactive')){
    tagDetalles.classList.toggle('inactive');
   }
});

carrito.addEventListener('click', ()=>{
    tagDetalles.classList.toggle('inactive');

// el menuMobile esta abierto? si; hay que cerrarlo, no;

    if(!mobileMenu.classList.contains('inactive')){
        mobileMenu.classList.toggle('inactive');
       }
       // Menucito esta abierto (NO esta inactive) ? si; Cierra Menucito, no;;
    else if (!Menucito.classList.contains('inactive')){
        Menucito.classList.toggle('inactive');
    }
    else if (!tagProducto.classList.contains('inactive')){
        tagProducto.classList.toggle('inactive');
    } 
});



//Lista de productos 
const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});

productList.push({
    name: 'Desktop',
    price: 300,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});

productList.push({
    name: 'IPhone',
    price: 1000,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});

/*
              <div class="product-card">
                <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
                <div class="product-info">
                  <div>
                    <p>$120,00</p>
                    <p>Bike</p>
                  </div>
                  <figure>
                    <img src="./icons/bt_add_to_cart.svg" alt="">
                  </figure>
                </div>
              </div>
        -->
*/

//Creacion del NODO Product-card, en Javascript, clase 21 / Curso pratico Js

 for(product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const ProductImg = document.createElement('img');
    ProductImg.setAttribute('src', product.image);

// Activacion tagProducto
    ProductImg.addEventListener('click', ()=>{
        tagProducto.classList.remove('inactive');

        if(!tagDetalles.classList.contains('inactive')){
            tagDetalles.classList.toggle('inactive');
        }
        else if(!Menucito.classList.contains('inactive')){
            Menucito.classList.toggle('inactive');
        }   
    });

    closeTagproducto.addEventListener('click', ()=>{
        tagProducto.classList.add('inactive');
    });

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    
    const divOnly = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    
    const productName = document.createElement('p');
    productName.innerText =  product.name;

    divOnly.appendChild(productPrice);
    divOnly.appendChild(productName);

    const divFigure = document.createElement('figure');
    const imgFigure = document.createElement('img');
    imgFigure.setAttribute('src', './icons/bt_add_to_cart.svg');

    divFigure.appendChild(imgFigure);
    

    productInfo.appendChild(divOnly);
    productInfo.appendChild(divFigure);

    productCard.appendChild(ProductImg);
    productCard.appendChild(productInfo);

    cardContainer.appendChild(productCard);
 }


  // funcion para ACTIVACION del  aside > productArmonia , al hacer Click en div > Product Card



  
   


       
    

 
