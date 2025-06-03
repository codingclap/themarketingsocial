/*************** Custom GSAP Animation for Header Image and Logo ****************/
// Optimized infinite rotation for header image
gsap.set(".header-image", {
    transformOrigin: "50% 50%",
    willChange: "transform"
});

gsap.to(".header-image", {
    rotation: 360,
    duration: 8,
    repeat: -1,
    ease: "none",
    force3D: true // Forces GPU usage
});

/*************** Custom GSAP Animation for Header Image and Logo ****************/

/*******************  Gsap Marquee Animation(Home)- 1 ****************/
function setupHomeMarquee(marqueeInner, originalText) {
    // Remove all previous clones
    while (marqueeInner.children.length > 1) {
        marqueeInner.removeChild(marqueeInner.lastChild);
    }

    // Reset transform and force layout
    marqueeInner.style.transform = 'translateX(0)';
    originalText.style.whiteSpace = 'nowrap';

    const containerWidth = marqueeInner.parentElement.offsetWidth;
    let totalWidth = originalText.offsetWidth;

    // Clone original text until it overflows the container at least 2x
    while (totalWidth < containerWidth * 2) {
        const clone = originalText.cloneNode(true);
        marqueeInner.appendChild(clone);
        totalWidth += clone.offsetWidth;
    }

    marqueeInner.style.willChange = 'transform';

    gsap.killTweensOf(marqueeInner);
    gsap.to(marqueeInner, {
        x: `-=${originalText.offsetWidth}`,
        duration: 8,
        ease: "none", // Use none for smooth continuous scroll
        repeat: -1,
        force3D: true,
        overwrite: true,
        modifiers: {
            x: gsap.utils.unitize(x => parseFloat(x) % originalText.offsetWidth)
        }
    });
}

window.addEventListener("load", () => {
    const marqueeInner = document.getElementById("home-marqueeInner-1");
    const originalText = marqueeInner.querySelector(".marquee-text");

    setupHomeMarquee(marqueeInner, originalText);

    // Debounced resize with requestAnimationFrame
    let resizeFrame;
    window.addEventListener("resize", () => {
        if (resizeFrame) cancelAnimationFrame(resizeFrame);
        resizeFrame = requestAnimationFrame(() => {
            setupHomeMarquee(marqueeInner, originalText);
        });
    });
});

/*******************  Gsap Marquee Animation(Home)- 1****************/


/*******************  Gsap Marquee Animation(Home)- 2 ****************/
function setupHomeMarquee2(marqueeInner, originalText) {
    // Remove all previously cloned elements (keep original only)
    while (marqueeInner.children.length > 1) {
        marqueeInner.removeChild(marqueeInner.lastChild);
    }

    // Reset transform and ensure accurate size calculation
    marqueeInner.style.transform = 'translateX(0)';
    originalText.style.whiteSpace = 'nowrap';

    const containerWidth = marqueeInner.parentElement.offsetWidth;
    let totalWidth = originalText.offsetWidth;

    // Clone original text until the total width covers the container at least twice
    while (totalWidth < containerWidth * 2) {
        const clone = originalText.cloneNode(true);
        marqueeInner.appendChild(clone);
        totalWidth += clone.offsetWidth;
    }

    // Hint browser for GPU acceleration
    marqueeInner.style.willChange = 'transform';

    // Clear previous animations and apply smooth scrolling
    gsap.killTweensOf(marqueeInner);
    gsap.to(marqueeInner, {
        x: `-=${originalText.offsetWidth}`,
        duration: 8,
        ease: "none", // smoother than "linear" for continuous movement
        repeat: -1,
        force3D: true,
        overwrite: true,
        modifiers: {
            x: gsap.utils.unitize(x => parseFloat(x) % originalText.offsetWidth)
        }
    });
}

window.addEventListener("load", () => {
    const marqueeInner = document.getElementById("home-marqueeInner-2");
    const originalText = marqueeInner.querySelector(".marquee-text-2");

    setupHomeMarquee2(marqueeInner, originalText);

    // Debounced resize using requestAnimationFrame
    let resizeFrame;
    window.addEventListener("resize", () => {
        if (resizeFrame) cancelAnimationFrame(resizeFrame);
        resizeFrame = requestAnimationFrame(() => {
            setupHomeMarquee2(marqueeInner, originalText);
        });
    });
});

/*******************  Gsap Marquee Animation (Home)- 2****************/




/*************  Gsap Marquee Brand-Reimaging (Home) ****************/
function setupMarquee3(marqueeInner, originalText) {
    // Remove previously cloned elements (leave the original only)
    while (marqueeInner.children.length > 1) {
        marqueeInner.removeChild(marqueeInner.lastChild);
    }

    // Reset transform and ensure accurate width calculation
    marqueeInner.style.transform = 'translateX(0)';
    originalText.style.whiteSpace = 'nowrap';

    const containerWidth = marqueeInner.parentElement.offsetWidth;
    let totalWidth = originalText.offsetWidth;

    // Clone original text until it overflows container 2x
    while (totalWidth < containerWidth * 2) {
        const clone = originalText.cloneNode(true);
        marqueeInner.appendChild(clone);
        totalWidth += clone.offsetWidth;
    }

    // Hint browser to prepare for transform animation
    marqueeInner.style.willChange = 'transform';

    // Clear previous GSAP animations and apply new smooth loop
    gsap.killTweensOf(marqueeInner);
    gsap.to(marqueeInner, {
        x: `-=${originalText.offsetWidth}`,
        duration: 8,
        ease: "none", // use 'none' for perfectly smooth infinite scroll
        repeat: -1,
        force3D: true,
        overwrite: true,
        modifiers: {
            x: gsap.utils.unitize(x => parseFloat(x) % originalText.offsetWidth)
        }
    });
}

window.addEventListener("load", () => {
    const marqueeInner = document.getElementById("about-marqueeInner-3");
    const originalText = marqueeInner.querySelector(".brand-bgheading");

    setupMarquee3(marqueeInner, originalText);

    // Responsive: debounce resize with requestAnimationFrame
    let resizeFrame;
    window.addEventListener("resize", () => {
        if (resizeFrame) cancelAnimationFrame(resizeFrame);
        resizeFrame = requestAnimationFrame(() => {
            setupMarquee3(marqueeInner, originalText);
        });
    });
});

/*************  Gsap Marquee Brand-Reimaging(Home) ****************/





//******************* Counter Animation **********************/
gsap.registerPlugin(ScrollTrigger);

const counter1 = { value: 0 };
const counter2 = { value: 0 };
const counter3 = { value: 0 };

gsap.to(counter1, {
    value: 50,
    duration: 3,
    ease: "power1.out",
    scrollTrigger: {
        trigger: "#CounterTrigger",
        start: "top 90%", // start when top of #counter hits 90% of viewport
        once: true        // run only once
    },
    onUpdate: () => {
        document.getElementById("counter1").textContent = Math.floor(counter1.value);
    }
});

gsap.to(counter2, {
    value: 5,
    duration: 3,
    ease: "power1.out",
    scrollTrigger: {
        trigger: "#CounterTrigger",
        start: "top 90%", // start when top of #counter hits 90% of viewport
        once: true        // run only once
    },
    onUpdate: () => {
        document.getElementById("counter2").textContent = Math.floor(counter2.value);
    }
});

gsap.to(counter3, {
    value: 100,
    duration: 3,
    ease: "power1.out",
    scrollTrigger: {
        trigger: "#CounterTrigger",
        start: "top 90%", // start when top of #counter hits 90% of viewport
        once: true        // run only once
    },
    onUpdate: () => {
        document.getElementById("counter3").textContent = Math.floor(counter3.value);
    }
});

//******************* Counter Animation **********************/





//******************* Spiral -- Animation **********************/ 
// Move effect: slide in from edges to center, then back out 
// Set initial positions: left shadow off to the left, right shadow off to the right
gsap.set(".home-gif-left-shadow", { left: "0%", width: "25%" });
gsap.set(".home-gif-left", { scale: 0.9 });

gsap.set(".home-gif-right-shadow", { right: "0%", width: "35%" });
gsap.set(".home-gif-right", { scale: 0.9 });

function animateGifs() {
    // Animate left shadow in to 0 (edge to center), then back out
    gsap.to(".home-gif-left-shadow", {
        left: "20%",
        duration: 1.5,
        ease: "power3.inOut",
        delay: 0.5,
        onStart: () => {
            // Scale up the spiral image as the shadow moves in
            gsap.to(".home-gif-left", {
                scale: 1,
                duration: 1.5,
                ease: "power3.inOut"
            });
        },
        onComplete: () => {
            gsap.to(".home-gif-left-shadow", {
                left: "0%",
                duration: 1.8,
                ease: "power3.inOut",
                delay: 0.5,
                onStart: () => {
                    // Scale back down the spiral image as the shadow moves out
                    gsap.to(".home-gif-left", {
                        scale: 0.9,
                        duration: 1.5,
                        ease: "power3.inOut"
                    });
                },

                onComplete: animateGifs
            });
        },
        scrollTrigger: {
            trigger: ".success-measure-section",
            start: "top 95%",
            once: true // run only once when section enters viewport
        }
    });

    // Animate right shadow in to 0 (edge to center), then back out
    gsap.to(".home-gif-right-shadow", {
        right: "35%",
        duration: 1.5,
        ease: "power3.inOut",
        delay: 0.5,
        onStart: () => {
            // Scale up the spiral image as the shadow moves in
            gsap.to(".home-gif-right", {
                scale: 1,
                duration: 1.5,
                ease: "power3.inOut"
            });
        },
        onComplete: () => {
            gsap.to(".home-gif-right-shadow", {
                right: "0%",
                duration: 1.8,
                ease: "power3.inOut",
                delay: 0.5,
                onStart: () => {
                    // Scale back down the spiral image as the shadow moves out
                    gsap.to(".home-gif-right", {
                        scale: 0.9,
                        duration: 1.5,
                        ease: "power3.inOut"
                    });
                },
            });
        },
        scrollTrigger: {
            trigger: ".success-measure-section",
            start: "top 95%",
            once: true
        }
    });
}

animateGifs();

//******************* Spiral -- Animation **********************/

