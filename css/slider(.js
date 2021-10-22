const prevBtn = document.querySelector(".prev_button");
const nextBtn = document.querySelector(".next_button");
const slider = document.querySelector(".slider");
const slide = document.querySelector(".slide");
const containers = document.querySelectorAll(".slider_wrapper");
const slidesCount = slider.querySelectorAll(".slide").length;
const width = slide.offsetWidth;
let slideIndex = 0;
let clicksNumber = 0;

// slider.addEventListener('wheel', (e) => {
//     if (e.deltaY < 0) { //прокрутка вверх
//         changeSlide('up');
//     }
//     if (e.deltaY > 0) { //прокрутка вниз
//         changeSlide('down');
//     }
// });

let index = 0;
for (index = 0; index < containers.length; index++)

    nextBtn.addEventListener('click', () => {
        // clicksNumber++;
        changeSlide('next');
    });

prevBtn.addEventListener('click', () => {
    // clicksNumber++;
    changeSlide('prev');
});

function changeSlide(direction) {

    // if (clicksNumber === slidesCount - 1) {
    //     slideIndex = 0;
    // }

    if (direction === 'next') {
        slideIndex++;
        // if (slideIndex === slidesCount ) { //index максимальный 3 (считая с нуля), а количество 4, значит вышли за пределы допустимых значений и обнуляем
        //     slideIndex = 0;
        // }
    } else if (direction === 'prev') {
        slideIndex--;
        if (slideIndex < 0) {
            slideIndex = slidesCount - 1;
        }
    }
    if (slideIndex * width > width * slidesCount - width) slideIndex = 0; //вернуть в начало, если смещение превышает общую длину всех карточек
    slider.style.transform = `translateX(-${slideIndex * width}px)`;
}