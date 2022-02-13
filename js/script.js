let pageSlider = new Swiper('.page',{
    wrapperClass: "page__wrapper",
    slideClass: "page__screen",
    //Вертикальный слайдер
    direction: 'vertical',

    //Количество слайдов для показа
    slidesPerView: 'auto',

    //Включение паралакса
    parallax: true,

    //Управление клавиатурой
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    //Управление колесом мыши
    mousewheel: {
        sensitivity: 1,
    },

    watchOverflow: true,

    speed: 800,

    //Обновление свайпера
    observer: true,
    observeParents: true,
    observeSliderChildren: true,

    //Навигация
    pagination: {
        el: '.page__pagination',
        type: 'bullets',
        clickable: true,
        bulletClass: "page__bullet",
        bulletActiveClass: "page__bullet_active",
    },

    init: false,

    on: {
        init: function () {
            menuSlider();
        },
        sliderChange: function () {
            menuSliderRemove();
            menuLinks[pageSlider.realIndex].classList.add('_active');
        },
    },
});



let menuLinks = document.querySelectorAll('.menu__link');

function menuSlider() {
    if (menuLinks.length > 0) {
        menuLinks[pageSlider.realIndex].classList.add('_active');
        for (let index = 0; index < menuLinks.length; index++) {
            const menuLink = menuLinks[index];
            menuLink.addEventListener("click", function (e) {
                
                e.preventDefault();
                menuSliderRemove();
                
                pageSlider.slideTo(index, 800);
                
                menuLinks.classList.add('_active');
                

            });
        }
    }
}

function menuSliderRemove(params) {
    let menuLinkActive = document.querySelector('.menu__link._active');

    if (menuLinkActive){
        menuLinkActive.classList.remove('_active');
    }
}

pageSlider.init();

let typed = new Typed('#typed', { // Тут id того блока, в которм будет анимация
    stringsElement: '#typed__strings', // Тут id блока из которого берем строки для анимации
    typeSpeed: 130, // Скорость печати
    startDelay: 500, // Задержка перед стартом анимации
    backSpeed: 50, // Скорость удаления
    loop: true // Указываем, повторять ли анимацию
});
