/*************** Custom GSAP Animation for Header Image and Logo ****************/
gsap.to(".header-image", {
    rotation: 360,
    duration: 6,
    repeat: -1,
    ease: "none",
    transformOrigin: "50% 50%" // Ensures it rotates in place
});
/*************** Custom GSAP Animation for Header Image and Logo ****************/

/*******************  Gsap Marquee Animation(Home)- 1 ****************/
window.addEventListener("load", () => {
    const marqueeInner = document.getElementById("home-marqueeInner-1");
    const originalText = marqueeInner.querySelector(".marquee-text");
    const containerWidth = document.querySelector(".scroller-section").offsetWidth;

    // Clone enough times to fill + overflow the container
    let totalWidth = originalText.offsetWidth;
    while (totalWidth < containerWidth * 2) {
        const clone = originalText.cloneNode(true);
        marqueeInner.appendChild(clone);
        totalWidth += clone.offsetWidth;
    }

    gsap.to(marqueeInner, {
        x: `-=${originalText.offsetWidth}`,
        duration: 5,
        ease: "linear",
        repeat: -1,
        modifiers: {
            x: gsap.utils.unitize(x => parseFloat(x) % originalText.offsetWidth)
        }
    });
});
/*******************  Gsap Marquee Animation(Home)- 1****************/


/*******************  Gsap Marquee Animation(Home)- 2 ****************/
window.addEventListener("load", () => {
    const marqueeInner = document.getElementById("home-marqueeInner-2");
    const originalText = marqueeInner.querySelector(".marquee-text-2");
    const containerWidth = document.querySelector(".scroller-gif-section").offsetWidth;

    // Clone enough times to fill + overflow the container
    let totalWidth = originalText.offsetWidth;
    while (totalWidth < containerWidth * 2) {
        const clone = originalText.cloneNode(true);
        marqueeInner.appendChild(clone);
        totalWidth += clone.offsetWidth;
    }

    gsap.to(marqueeInner, {
        x: `-=${originalText.offsetWidth}`,
        duration: 5,
        ease: "linear",
        repeat: -1,
        modifiers: {
            x: gsap.utils.unitize(x => parseFloat(x) % originalText.offsetWidth)
        }
    });
});
/*******************  Gsap Marquee Animation (Home)- 2****************/




/*************  Gsap Marquee Brand-Reimaging (Home) ****************/
window.addEventListener("load", () => {
    const marqueeInner = document.getElementById("about-marqueeInner-3");
    const originalText = marqueeInner.querySelector(".brand-bgheading");
    const containerWidth = document.querySelector(".brand-reimaging-animation").offsetWidth;

    // Clone enough times to fill + overflow the container
    let totalWidth = originalText.offsetWidth;
    while (totalWidth < containerWidth * 2) {
        const clone = originalText.cloneNode(true);
        marqueeInner.appendChild(clone);
        totalWidth += clone.offsetWidth;
    }

    gsap.to(marqueeInner, {
        x: `-=${originalText.offsetWidth}`,
        duration: 5,
        ease: "linear",
        repeat: -1,
        modifiers: {
            x: gsap.utils.unitize(x => parseFloat(x) % originalText.offsetWidth)
        }
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
        start: "top 80%", // start when top of #counter hits 80% of viewport
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
        start: "top 80%", // start when top of #counter hits 80% of viewport
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
        start: "top 80%", // start when top of #counter hits 80% of viewport
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
gsap.set(".home-gif-left-shadow", { left: "0%", width: "25%", });
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
                duration: 1.5,
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
                duration: 1.5,
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

