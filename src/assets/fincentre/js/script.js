
@@include('jquery-1.12.1.js');
@@include('swiper-bundle.js');
@@include('lightgallery.min.js');
@@include('modal.js');


document.addEventListener('DOMContentLoaded', function(){

    // ------------ мобильное меню начало ---------------
    let burgerBtn = document.querySelector('.burger-btn');
    let nav = document.querySelector('nav');
    let body = document.querySelector('body');

    burgerBtn.addEventListener('click', function(){
        this.classList.toggle('active');
        nav.classList.toggle('active');
        body.classList.toggle('fixed')
    }); 
    // ------------ мобильное меню конец ---------------

    let volunteersSl = document.querySelector('.volunteers-sl');
    if(volunteersSl){
        const swiper = new Swiper(volunteersSl, {
            // Optional parameters 
            loop: true,
            slidesPerView: 3,
            // spaceBetween: 20, 
            speed: 1000,
            loopAdditionalSlides: 1,
            slidesPerGroup: 3,
            watchOverflow: false,  
            // If we need pagination
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            }, 
            // Navigation arrows
            navigation: {
              nextEl: '.volunteers-sl-box .swiper-button-next',
              prevEl: '.volunteers-sl-box .swiper-button-prev',
            }, 
            breakpoints: {
              200: {
                  // spaceBetween: 20,
                  // slidesPerView: 2,
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  spaceBetween: 20, 
              },
              480:{
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 10, 
              },
              780: {
                slidesPerView: 3, 
                spaceBetween: 10,
              },
              999: {
                  spaceBetween: 20, 
              }
          }
          });
    }


    // подключаю lightGallery - плагин для просмотра изображений
      let LightGalleryList = document.querySelectorAll('.lg-gallery'); 
      if(LightGalleryList.length > 0){ 
          LightGalleryList.forEach(gallery => {
              lightGallery(gallery);
          });
      } 
 
});