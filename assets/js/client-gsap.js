/*************** Custom GSAP Animation for Header Image and Logo ****************/

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


/*******************  Gsap Marquee Animation(client)- 1 ****************/
function initMarquee(container, textEl) {
    const resetMarquee = () => {
        container.innerHTML = '';
        container.appendChild(textEl);
        textEl.style.whiteSpace = 'nowrap';

        let total = textEl.offsetWidth;
        const max = container.parentElement.offsetWidth * 2;

        while (total < max) {
            const clone = textEl.cloneNode(true);
            container.appendChild(clone);
            total += clone.offsetWidth;
        }

        gsap.set(container, {
            transform: "translate3d(-8.667%, 0, 0) scale3d(1,1,1) rotateX(0) rotateY(0) rotateZ(0) skew(0,0)",
            transformStyle: "preserve-3d",
            willChange: "transform",
            force3D: true
        });

        gsap.killTweensOf(container);
        gsap.to(container, {
            x: `-=${textEl.offsetWidth}`,
            duration: 10,
            ease: "none",
            repeat: -1,
            force3D: true,
            modifiers: {
                x: gsap.utils.unitize(val => parseFloat(val) % textEl.offsetWidth)
            }
        });
    };

    resetMarquee();
    window.addEventListener("resize", () => requestAnimationFrame(resetMarquee));
}

window.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("client-marqueeInner-1");
    const text = container.querySelector(".marquee-text");
    initMarquee(container, text);
});


/*******************  Gsap Marquee Animation(client)- 1****************/



/*************  Gsap Marquee Brand-Reimaging (Client) ****************/
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
        duration: 10,
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
    const marqueeInner = document.getElementById("client-marqueeInner-3");
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

/*************  Gsap Marquee Brand-Reimaging(Client) ****************/


/****************** Client Partner Logs **************************/
gsap.registerPlugin(ScrollTrigger);

function initPartnerLogos() {
    // Kill previous triggers/animations
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    gsap.killTweensOf(".partners-section .logo, .partners-section .center-heading");

    const isMobile = window.innerWidth <= 768;
    const steps = 30;

    // Responsive movement distances in percent
    const moveYTop = isMobile ? 0 : -30;
    const moveYBottom = isMobile ? 0 : 80;
    const moveXLeft = isMobile ? 0 : -80;
    const moveXRight = isMobile ? 0 : 30;

    // --- Center Heading Animation ---
    gsap.to(".partners-section .center-heading", {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".partners-section .circle-wrapper",
            start: isMobile ? "top 98%" : "top 90%",
            end: isMobile ? "top 90%" : "top 80%",
            scrub: true
        }
    });

    // --- Top Logos: Move Down in Steps ---
    gsap.fromTo(".partners-section .logo.top1",
        { yPercent: isMobile ? 0 : moveYTop, xPercent: 0, opacity: 0 },
        {
            yPercent: isMobile ? 0 : 35,
            xPercent: 0,
            opacity: 1,
            duration: 1,
            ease: isMobile ? "power2.out" : `steps(${steps})`,
            scrollTrigger: {
                trigger: ".partners-section .circle-wrapper",
                start: "top 83%",
                end: "top 30%",
                scrub: true
            }
        }
    );
    gsap.fromTo(".partners-section .logo.top2",
        { yPercent: isMobile ? 0 : moveYTop, xPercent: isMobile ? 0 : moveXLeft, opacity: 0 },
        {
            yPercent: isMobile ? 0 : 50,
            xPercent: isMobile ? 0 : -50,
            opacity: 1,
            duration: 1.1,
          ease: isMobile ? "power2.out" : `steps(${steps})`,
            scrollTrigger: {
                trigger: ".partners-section .circle-wrapper",
                start: "top 83%",
                end: "top 30%",
                scrub: true
            }
        }
    );
    gsap.fromTo(".partners-section .logo.top3",
        { yPercent: isMobile ? 0 : moveYTop, xPercent: isMobile ? 0 : moveXLeft, opacity: 0 },
        {
            yPercent: isMobile ? 0 : 40,
            xPercent: isMobile ? 0 : -50,
            opacity: 1,
            duration: 1.2,
            ease: isMobile ? "power2.out" : `steps(${steps})`,
            scrollTrigger: {
                trigger: ".partners-section .circle-wrapper",
                start: "top 83%",
                end: "top 30%",
                scrub: true
            }
        }
    );
    gsap.fromTo(".partners-section .logo.top4",
        { yPercent: isMobile ? 0 : moveYTop, xPercent: isMobile ? 0 : moveXRight, opacity: 0 },
        {
            yPercent: isMobile ? 0 : 10,
            xPercent: isMobile ? 0 : -5,
            opacity: 1,
            duration: 1.3,
           ease: isMobile ? "power2.out" : `steps(${steps})`,
            scrollTrigger: {
                trigger: ".partners-section .circle-wrapper",
                start: "top 83%",
                end: "top 30%",
                scrub: true
            }
        }
    );

    // --- Left Logo: Move Right in Steps ---
    gsap.fromTo(".partners-section .logo.left",
        { xPercent: isMobile ? 0 : moveXLeft, opacity: 0 },
        {

            xPercent: isMobile ? 0 : 10,
            opacity: 1,
            duration: 1.1,
            ease: isMobile ? "power2.out" : `steps(${steps})`,
            scrollTrigger: {
                trigger: ".partners-section .circle-wrapper",
                start: "top 83%",
                end: "top 30%",
                scrub: true
            }
        }
    );

    // --- Right Logo: Move Left in Steps ---
    gsap.fromTo(".partners-section .logo.right",
        { yPercent: isMobile ? 0 : moveYTop, xPercent: isMobile ? 0 : moveXRight, opacity: 0 },
        {
            yPercent: isMobile ? 0 : -40,
            xPercent: isMobile ? 0 : -25,
            opacity: 1,
            duration: 1.1,
            ease: isMobile ? "power2.out" : `steps(${steps})`,
            scrollTrigger: {
                trigger: ".partners-section .circle-wrapper",
                start: "top 83%",
                end: "top 30%",
                scrub: true
            }
        }
    );

    // --- Bottom Logos: Move Up in Steps ---
    gsap.fromTo(".partners-section .logo.bottom1",
        { yPercent: isMobile ? 0 : moveYBottom, xPercent: isMobile ? 0 : moveXLeft, opacity: 0 },
        {
             yPercent: isMobile ? 0 : 20,
            xPercent: isMobile ? 0 : 20,
            opacity: 1,
            duration: 1,
            ease: isMobile ? "power2.out" : `steps(${steps})`,
            scrollTrigger: {
                trigger: ".partners-section .circle-wrapper",
                start: "top 83%",
                end: "top 30%",
                scrub: true
            }
        }
    );
    gsap.fromTo(".partners-section .logo.bottom2",
        { yPercent: isMobile ? 0 : moveYBottom, xPercent: isMobile ? 0 : moveXLeft, opacity: 0 },
        {
            yPercent: isMobile ? 0 : -25,
            xPercent: isMobile ? 0 : -60,
            opacity: 1,
            duration: 1.1,
            ease: isMobile ? "power2.out" : `steps(${steps})`,
            scrollTrigger: {
                trigger: ".partners-section .circle-wrapper",
                start: "top 83%",
                end: "top 30%",
                scrub: true
            }
        }
    );
    gsap.fromTo(".partners-section .logo.bottom3",
        { yPercent: isMobile ? 0 : moveYBottom, xPercent: isMobile ? 0 : moveXLeft, opacity: 0 },
        {
            yPercent: isMobile ? 0 : -25,
            xPercent: isMobile ? 0 :-90,
            opacity: 1,
            duration: 1.2,
            ease: isMobile ? "power2.out" : `steps(${steps})`,
            scrollTrigger: {
                trigger: ".partners-section .circle-wrapper",
                start: "top 83%",
                end: "top 30%",
                scrub: true
            }
        }
    );
}

// Initialize on load
window.addEventListener("load", initPartnerLogos);
// Re-initialize on resize
window.addEventListener("resize", () => {
    setTimeout(initPartnerLogos, 100); // debounce for smoother experience
});
/****************** Client Partner Logs **************************/