/**************  Desktop Screen - Slides *************/
const slides = Array.from(document.querySelectorAll(".slide"));
const navItems = document.querySelectorAll(".nav-item");
const topLines = document.querySelectorAll(".top-line");
const progressNav = document.querySelector('.custom-progress-nav');

let current = 1;
let progress = 0;
let isScrolling = false;
const step = 0.4;


function updateSlides() {
    slides.forEach((slide, i) => {
        console.log(i, 'current', current);
        slide.style.zIndex = slides.length - i;
        if (i < current) {
            slide.style.width = "0%";
        } else if (i === current) {
            slide.style.width = `${100 - progress * 100}%`;
        } else {
            slide.style.width = "100%";
        }
    });

    navItems.forEach((item, index) => {
        // console.log(index,'current',current);
        if (index < current) {
            topLines[index].style.width = "100%";
        } else if (index === current) {
            topLines[index].style.width = `${progress * 100}%`;
        } else {
            topLines[index].style.width = "0%";
        }
        // Toggle active class
        item.classList.toggle('active', index === current);
    });

    // if (current === 0 || current === slides.length - 1) {
    //     progressNav.style.display = "none";
    // } else {
    //     progressNav.style.display = "flex";
    // }
}

function handleScroll(deltaY) {
    if (deltaY > 0) {
        // Scroll down
        if (current === slides.length - 1) return; // Stop at last slide
        if (progress < 1) {
            progress = Math.min(1, progress + step);
        } else if (current < slides.length - 1) {
            current++;
            progress = 0;
        }
    } else {
        // Scroll up
        if (current === 0) return; // Stop at first slide
        if (progress > 0) {
            progress = Math.max(0, progress - step);
        } else if (current > 0) {
            current--;
            progress = 1;
        }
    }
    updateSlides();
}

updateSlides();

window.addEventListener("wheel", (e) => {
    // Disable scroll trigger after 1024px
    if (window.innerWidth < 1023) return;

    if (isScrolling) return;
    isScrolling = true;
    handleScroll(e.deltaY);
    setTimeout(() => isScrolling = false, 100);
    e.preventDefault();
}, { passive: false });

navItems.forEach((item, i) => {
    item.addEventListener("click", () => {
        current = i;
        progress = 1;
        updateSlides();
    });
});


function handleSlideTextDisplay() {
    const slideTexts = document.querySelectorAll(
        '.slide-text1, .slide-text2, .slide-text3, .slide-text4, .slide-text5, .slide-text6'
    );
    const slidesAll = document.querySelectorAll('.slide');
    if (window.innerWidth <= 1023) {
        gsap.set(slideTexts, { display: "none" });

    } else {
        gsap.set(slideTexts, { clearProps: "display" });

    }
}

// Initial check
handleSlideTextDisplay();

// On resize
window.addEventListener('resize', handleSlideTextDisplay);
/**************  Desktop Screen - Slides *************/



