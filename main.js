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
let textStartIndex = 0;
let textTitleIndex = 0;
let textSubTitleIndex = 0;
let activeText= 0;
let activeLetter = 0;


burger.addEventListener("click", function () {
    iconBars.classList.toggle("show");
    iconX.classList.toggle("show");
    nav.classList.toggle("active");
});

function addStartText(){

    const welcomeStart = document.querySelector('.welcome-start');
    const welcomeStartText = 'Witaj';
    welcomeStart.textContent += welcomeStartText[textStartIndex];
    textStartIndex++;
    if(textStartIndex === welcomeStartText.length) clearInterval(textStartAnimation); 
};

function addTitleText(){

    const welcomeTitle = document.querySelector('.welcome-title');
    const welcomeTitleText = 'nazywam się Adam Świderski';
    welcomeTitle.textContent += welcomeTitleText[textTitleIndex];
    textTitleIndex++;
    if(textTitleIndex === welcomeTitleText.length) clearInterval(textTitleAnimation);
};

function addSubTitleText(){

    const welcomeSubTitle = document.querySelector('.welcome-sub-title');
    const welcomeSubTitleText = 'Chciałbym zostać profesjonalnym Front-Endowcem';
    welcomeSubTitle.textContent += welcomeSubTitleText[textSubTitleIndex];
    textSubTitleIndex++;
    if(textSubTitleIndex === welcomeSubTitleText.length) clearInterval(textSubTitleAnimation);
};

const textStartAnimation = setInterval(addStartText, 150);
const textTitleAnimation = setInterval(addTitleText, 100);
const textSubTitleAnimation = setInterval(addSubTitleText, 80);

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

