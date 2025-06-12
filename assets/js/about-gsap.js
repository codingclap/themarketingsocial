/*************  Gsap Marquee Brand-Reimaging(About)- 1 ****************/
function initMarquee(container, textEl) {
    // Remove all clones except the first
    while (container.children.length > 1) {
        container.removeChild(container.lastChild);
    }
    textEl.style.whiteSpace = 'nowrap';

    // Calculate how many clones are needed
    const textWidth = textEl.offsetWidth;
    const containerWidth = container.parentElement.offsetWidth;
    let total = textWidth;
    // Add enough clones to cover container + 2×textWidth
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
    gsap.set(container, { x: 0 });

    // Animate
    container._marqueeTween = gsap.to(container, {
        x: `-=${textWidth}`,
        duration: 16,
        ease: "none",
        repeat: -1,
        force3D: true,
        overwrite: true,
        modifiers: {
            x: gsap.utils.unitize(val => parseFloat(val) % textWidth)
        }
    });
}


let lastWidth = 0;
window.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("about-marqueeInner-1");
    const text = container.querySelector(".about-bgheading");
    initMarquee(container, text);

    window.addEventListener("resize", () => {
        const width = container.parentElement.offsetWidth;
        if (Math.abs(width - lastWidth) > 10) {
            lastWidth = width;
            initMarquee(container, text);
        }
    });
});


/*************  Gsap Marquee Brand-Reimaging(About)- 1 ****************/

/*************  Gsap Marquee Animation(About)- 2 ****************/
function initMarquee2(container, textEl) {
    // Remove all clones except the first
    while (container.children.length > 1) {
        container.removeChild(container.lastChild);
    }
    textEl.style.whiteSpace = 'nowrap';

    // Calculate how many clones are needed
    const textWidth = textEl.offsetWidth;
    const containerWidth = container.parentElement.offsetWidth;
    let total = textWidth;
    // Add enough clones to cover container + 2×textWidth
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
    gsap.set(container, { x: 0 });

    // Animate
    container._marqueeTween = gsap.to(container, {
        x: `-=${textWidth}`,
        duration: 16,
        ease: "none",
        repeat: -1,
        force3D: true,
        overwrite: true,
        modifiers: {
            x: gsap.utils.unitize(val => parseFloat(val) % textWidth)
        }
    });
}

// Usage example for about-marqueeInner-2
let lastWidth2 = 0;
window.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("about-marqueeInner-2");
    const text = container.querySelector(".about-marquee-text-2");
    initMarquee2(container, text);

    window.addEventListener("resize", () => {
        const width = container.parentElement.offsetWidth;
        if (Math.abs(width - lastWidth2) > 10) {
            lastWidth2 = width;
            initMarquee2(container, text);
        }
    });
});
/*************  Gsap Marquee Animation (About)- 2 ****************/

/*************  Gsap Marquee Brand-Reimaging (About) - 3 ****************/
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
    // Add enough clones to cover container + 2×textWidth
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
    gsap.set(container, { x: 0 });

    // Animate
    container._marqueeTween = gsap.to(container, {
        x: `-=${textWidth}`,
        duration: 16,
        ease: "none",
        repeat: -1,
        force3D: true,
        overwrite: true,
        modifiers: {
            x: gsap.utils.unitize(val => parseFloat(val) % textWidth)
        }
    });
}

// Usage example for about-marqueeInner-3
let lastWidth3 = 0;
window.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("about-marqueeInner-3");
    const text = container.querySelector(".brand-bgheading");
    initMarquee3(container, text);

    window.addEventListener("resize", () => {
        const width = container.parentElement.offsetWidth;
        if (Math.abs(width - lastWidth3) > 10) {
            lastWidth3 = width;
            initMarquee3(container, text);
        }
    });
});

/*************  Gsap Marquee Brand-Reimaging(About) - 3 ****************/



//******************* Spiral -- Animation **********************/ 
// Move effect: slide in from edges to center, then back out 
// Set initial positions: left shadow off to the left, right shadow off to the right
gsap.set(".about-gif-left-shadow", { left: "0%", width: "25%" });
gsap.set(".about-gif-left", { scale: 0.9 });

gsap.set(".about-gif-right-shadow", { right: "0%", width: "35%" });
gsap.set(".about-gif-right", { scale: 0.9 });

function animateGifs() {
    // Animate left shadow in to 0 (edge to center), then back out
    gsap.to(".about-gif-left-shadow", {
        left: "20%",
        duration: 1.5,
        ease: "power3.inOut",
        delay: 0.5,
        onStart: () => {
            // Scale up the spiral image as the shadow moves in
            gsap.to(".about-gif-left", {
                scale: 1,
                duration: 1.5,
                ease: "power3.inOut"
            });
        },
        onComplete: () => {
            gsap.to(".about-gif-left-shadow", {
                left: "0%",
                duration: 1.8,
                ease: "power3.inOut",
                delay: 0.5,
                onStart: () => {
                    // Scale back down the spiral image as the shadow moves out
                    gsap.to(".about-gif-left", {
                        scale: 0.9,
                        duration: 1.5,
                        ease: "power3.inOut"
                    });
                },

                onComplete: animateGifs
            });
        },
        scrollTrigger: {
            trigger: ".about-us-client-section",
            start: "top 95%",
            once: true // run only once when section enters viewport
        }
    });

    // Animate right shadow in to 0 (edge to center), then back out
    gsap.to(".about-gif-right-shadow", {
        right: "35%",
        duration: 1.5,
        ease: "power3.inOut",
        delay: 0.5,
        onStart: () => {
            // Scale up the spiral image as the shadow moves in
            gsap.to(".about-gif-right", {
                scale: 1,
                duration: 1.5,
                ease: "power3.inOut"
            });
        },
        onComplete: () => {
            gsap.to(".about-gif-right-shadow", {
                right: "0%",
                duration: 1.8,
                ease: "power3.inOut",
                delay: 0.5,
                onStart: () => {
                    // Scale back down the spiral image as the shadow moves out
                    gsap.to(".about-gif-right", {
                        scale: 0.9,
                        duration: 1.5,
                        ease: "power3.inOut"
                    });
                },
            });
        },
        scrollTrigger: {
            trigger: ".about-us-client-section",
            start: "top 95%",
            once: true
        }
    });
}

animateGifs();

//******************* Spiral -- Animation **********************/