// 'use strict';
console.log('dlsfkaj');
var swiper = new Swiper(".wrap-10 .mySwiper", {});


let closer = document.querySelector('#closer');
closer.onclick = () =>{
    closer.style.display = 'none';
    navbar.classList.remove('active');
    cart.classList.remove('active');
}

let navbar = document.querySelector('.navbar');
document.querySelector('.wrap-2 #menu-btn').onclick = (e) =>{
    closer.style.display = 'block';
    navbar.classList.add('active');
    e.preventDefault();
}