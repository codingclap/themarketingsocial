/**************  Desktop Screen - Slides *************/
const slides = Array.from(document.querySelectorAll(".slide"));
const navItems = document.querySelectorAll(".nav-item");
const topLines = document.querySelectorAll(".top-line");
const progressNav = document.querySelector('.custom-progress-nav');

let current = 1;
let progress = 0;
let isScrolling = false;
const step = 0.1 // Step size for progress


function updateSlides() {
    slides.forEach((slide, i) => {
        slide.style.zIndex = slides.length - i;
        if (i < current) {
            gsap.to(slide, { width: "0%", duration: 1.5, ease: "power3.out" });
        } else if (i === current) {
            gsap.to(slide, { width: `${100 - progress * 100}%`, duration: 1.5, ease: "power3.out" });
        } else {
            gsap.to(slide, { width: "100%", duration: 1.5, ease: "power3.out" });
        }
    });

    navItems.forEach((item, index) => {
        if (index < current) {
            topLines[index].style.width = "100%";
        } else if (index === current) {
            topLines[index].style.width = `${progress * 100}%`;
        } else {
            topLines[index].style.width = "0%";
        }
        item.classList.toggle('active', index === current);
    });
}

function handleScroll(deltaY) {
    if (deltaY > 0) {
        // Scroll down
        if (current === slides.length - 1) return; // Stop at last slide

        // Slow start: add a delay when progress is exactly 0
        if (progress === 0) {
            setTimeout(() => {
                progress = Math.min(1, progress + step * 0.5); // smaller step for slow start
                updateSlides();
            }, 200); // adjust delay as needed
            return;
        }

        // Slow finish: reduce step size as progress approaches 1
        let dynamicStep = step;
        if (progress > 0.7) dynamicStep = step * 0.4;
        else if (progress > 0.4) dynamicStep = step * 0.7;

        if (progress < 1) {
            progress = Math.min(1, progress + dynamicStep);
        } else if (current < slides.length - 1) {
            current++;
            progress = 0;
        }
    } else {
        // Scroll up
        if (current === 0) return; // Stop at first slide

        // Slow start reverse
        if (progress === 1) {
            setTimeout(() => {
                progress = Math.max(0, progress - step * 0.5);
                updateSlides();
            }, 120);
            return;
        }

        // Slow finish reverse
        let dynamicStep = step;
        if (progress < 0.3) dynamicStep = step * 0.4;
        else if (progress < 0.6) dynamicStep = step * 0.7;

        if (progress > 0) {
            progress = Math.max(0, progress - dynamicStep);
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



