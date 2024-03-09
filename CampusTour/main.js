let navbar=document.querySelector('.header .navbar');

document.querySelector('.bars').onclick = () => {
    navbar.classList.add('active');
}

document.querySelector('.close').onclick = () => {
    navbar.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
} 

var swiper = new Swiper(".home-slider", {
    // Optional parameters
    loop: true,
    grabCursor:true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
      },

  });
