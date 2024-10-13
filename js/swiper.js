const swiper = new Swiper(".swiper", {
    // Optional parameters
    loop: true,
    slidesPerView: 1,

    autoplay: {
        delay: 3000,
    },

    speed: 1000,

    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
