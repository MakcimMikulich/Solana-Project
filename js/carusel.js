const track = document.querySelector(".slider__track");
let scrollAmount = 0;
const speed = 2; // Скорость прокрутки, увеличьте для более быстрой прокрутки

function scrollSlider() {
    scrollAmount -= speed;
    track.style.transform = `translateX(${scrollAmount}px)`;

    // Если прокрутка дошла до конца, сбрасываем её на начало
    if (Math.abs(scrollAmount) >= track.scrollWidth / 3) {
        scrollAmount = 0;
    }

    requestAnimationFrame(scrollSlider);
}

scrollSlider();
