const burger = document.querySelector(".burger");
const iconBars = document.querySelector(".fa-bars");
const iconX = document.querySelector(".fa-times");
const nav = document.querySelector(".navi");
const timeChange = 4000;
const imgHtml = document.querySelector('.hobby-img');
const titleHtml = document.querySelector('.hobby-title');
const images = ['img/programowac.jpg', 'img/zwiedzac.jpg', 'img/sluchac.jpg'];
const imagesTitle = ['Programować', 'Poznawać Świat', 'Słuchać dobrej muzyki'];
let activeElement = 0;

burger.addEventListener("click", function () {
    iconBars.classList.toggle("show");
    iconX.classList.toggle("show");
    nav.classList.toggle("active");
});

function changeElement() {
    activeElement++;

    if (activeElement == images.length) {
        activeElement = 0;
    }

    imgHtml.src = images[activeElement];
    titleHtml.textContent = imagesTitle[activeElement];
}

setInterval(changeElement, timeChange)

function scroll(e) {
    var href = $(this).attr('href');

    e.preventDefault();
    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, 1000);

    location.hash = href;
}

$('a[href^="#"]').click(scroll);