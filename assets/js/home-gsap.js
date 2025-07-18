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



//******************* Helping Brand Section Animation **********************/

gsap.registerPlugin(ScrollTrigger);

// Set initial states
gsap.set(".helping-panel-heading", { opacity: 1, });
// gsap.set(".panel", { height: "10%",opacity: 1 });
gsap.set(".overlay h2", { color: "#6D2732" });

// Main Heading Animation

gsap.to(".helping-panel-heading", {
    opacity: 0, 
    
    ease: "none", // make opacity directly tied to scroll position
    scrollTrigger: {
        trigger: ".helping-panel-container",
        start: "-=100 top",
        end: "+=500",
        scrub: 0.5, 
        invalidateOnRefresh: true,
        markers: false,
    }
});
 
gsap.fromTo(".panel",
  {
    height: "0%", // initial collapsed height
    opacity: -0.2
  },
  {
    height: "100%", // full screen height
    opacity: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".helping-brand-section",
      start: "top top",
      end: "+=1500", // expand over one viewport height of scrolling
      scrub: 0.1, 
      pin: true,
      anticipatePin: 0.3,
      invalidateOnRefresh: true,
      markers: false,
      pinSpacing: true
    }
  }
);


// ScrollTrigger animation for .overlay opacity
gsap.to(".overlay h2", {
    opacity: 1,
    color: "#6D2732",
    ease: "power2.inOut",
    ease: "none", // make opacity directly tied to scroll position
    scrollTrigger: {
        trigger: ".helping-brand-section",
        start: "top top",
        end: "+=1200",
        scrub: 1,
        invalidateOnRefresh: true,
        markers: false,
    }
});
//******************* Helping Brand Section Animation **********************/

 


//--------------Smooth Scrolling with Lenis---------------- //
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
    smooth: true,
    smoothTouch: false,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

//--------------Smooth Scrolling with Lenis---------------- //