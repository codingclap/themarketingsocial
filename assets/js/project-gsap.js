/*************** Custom GSAP Animation for Header Image and Logo ****************/
// Optimized infinite rotation for header image
gsap.set(".header-image", {
    transformOrigin: "50% 50%",
    willChange: "transform"
});

gsap.to(".header-image", {
    rotation: 360,
    duration: 10,
    repeat: -1,
    ease: "none",
    force3D: true // Forces GPU usage
});

/*************** Custom GSAP Animation for Header Image and Logo ****************/

/*******************  Gsap Marquee Animation(Home)- 1 ****************/
function initHomeMarquee(container, textEl) {
    // Remove all clones except the first
    while (container.children.length > 1) {
        container.removeChild(container.lastChild);
    }
    textEl.style.whiteSpace = 'nowrap';

    // Calculate how many clones are needed
    const textWidth = textEl.offsetWidth;
    const containerWidth = container.parentElement.offsetWidth;
    let total = textWidth;
    while (total < containerWidth + textWidth * 2) {
        const clone = textEl.cloneNode(true);
        container.appendChild(clone);
        total += clone.offsetWidth;
    }

    // Kill old tween if exists
    if (container._marqueeTween) {
        container._marqueeTween.kill();
        container._marqueeTween = null;
    }
    gsap.set(container, { x: 0, willChange: "transform", force3D: true });

    // Animate
    container._marqueeTween = gsap.to(container, {
        x: `-=${textWidth}`,
        duration: 18,
        ease: "none",
        repeat: -1,
        force3D: true,
        overwrite: true,
        modifiers: {
            x: gsap.utils.unitize(val => parseFloat(val) % textWidth)
        }
    });
}

let lastWidthHome = 0;
window.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("home-marqueeInner-1");
    const text = container.querySelector(".marquee-text");
    initHomeMarquee(container, text);

    let resizeTimeout;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const width = container.parentElement.offsetWidth;
            if (Math.abs(width - lastWidthHome) > 10) {
                lastWidthHome = width;
                initHomeMarquee(container, text);
            }
        }, 100);
    });
});
/*******************  Gsap Marquee Animation(Home)- 1****************/



/*******************  Gsap Marquee Animation(Home)- 2 ****************/
function initHomeMarquee2(container, textEl) {
    // Remove all clones except the first
    while (container.children.length > 1) {
        container.removeChild(container.lastChild);
    }
    textEl.style.whiteSpace = 'nowrap';

    // Calculate how many clones are needed
    const textWidth = textEl.offsetWidth;
    const containerWidth = container.parentElement.offsetWidth;
    let total = textWidth;
    while (total < containerWidth + textWidth * 2) {
        const clone = textEl.cloneNode(true);
        container.appendChild(clone);
        total += clone.offsetWidth;
    }

    // Kill old tween if exists
    if (container._marqueeTween) {
        container._marqueeTween.kill();
        container._marqueeTween = null;
    }
    gsap.set(container, { x: 0, willChange: "transform", force3D: true });

    // Animate
    container._marqueeTween = gsap.to(container, {
        x: `-=${textWidth}`,
        duration: 18,
        ease: "none",
        repeat: -1,
        force3D: true,
        overwrite: true,
        modifiers: {
            x: gsap.utils.unitize(val => parseFloat(val) % textWidth)
        }
    });
}

let lastWidthHome2 = 0;
window.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("home-marqueeInner-2");
    const text = container.querySelector(".marquee-text-2");
    initHomeMarquee2(container, text);

    let resizeTimeout;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const width = container.parentElement.offsetWidth;
            if (Math.abs(width - lastWidthHome2) > 10) {
                lastWidthHome2 = width;
                initHomeMarquee2(container, text);
            }
        }, 100);
    });
});

/*******************  Gsap Marquee Animation (Home)- 2****************/



/*************  Gsap Marquee Brand-Reimaging (Home) ****************/
function initMarquee3(container, textEl) {
    // Remove all clones except the first
    while (container.children.length > 1) {
        container.removeChild(container.lastChild);
    }
    textEl.style.whiteSpace = 'nowrap';

    // Calculate how many clones are needed
    const textWidth = textEl.offsetWidth;
    const containerWidth = container.parentElement.offsetWidth;
    let total = textWidth;
    while (total < containerWidth + textWidth * 2) {
        const clone = textEl.cloneNode(true);
        container.appendChild(clone);
        total += clone.offsetWidth;
    }

    // Kill old tween if exists
    if (container._marqueeTween) {
        container._marqueeTween.kill();
        container._marqueeTween = null;
    }
    gsap.set(container, { x: 0, willChange: "transform", force3D: true });

    // Animate
    container._marqueeTween = gsap.to(container, {
        x: `-=${textWidth}`,
        duration: 18,
        ease: "none",
        repeat: -1,
        force3D: true,
        overwrite: true,
        modifiers: {
            x: gsap.utils.unitize(val => parseFloat(val) % textWidth)
        }
    });
}

let lastWidthMarquee3 = 0;
window.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("about-marqueeInner-3");
    const text = container.querySelector(".brand-bgheading");
    initMarquee3(container, text);

    let resizeTimeout;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const width = container.parentElement.offsetWidth;
            if (Math.abs(width - lastWidthMarquee3) > 10) {
                lastWidthMarquee3 = width;
                initMarquee3(container, text);
            }
        }, 100);
    });
});

/*************  Gsap Marquee Brand-Reimaging(Home) ****************/

