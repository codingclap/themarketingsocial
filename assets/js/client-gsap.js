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
        duration: 20,
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
    const container = document.getElementById("client-marqueeInner-1");
    const text = container.querySelector(".marquee-text");
    initMarquee(container, text);

    let resizeTimeout;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const width = container.parentElement.offsetWidth;
            if (Math.abs(width - lastWidth) > 10) {
                lastWidth = width;
                initMarquee(container, text);
            }
        }, 100);
    });
});

/*******************  Gsap Marquee Animation(client)- 1****************/



/*************  Gsap Marquee Brand-Reimaging (Client) ****************/
 
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
        duration: 20,
        ease: "none",
        repeat: -1,
        force3D: true,
        overwrite: true,
        modifiers: {
            x: gsap.utils.unitize(val => parseFloat(val) % textWidth)
        }
    });
}

// Usage for marquee 3
let lastWidth3 = 0;
window.addEventListener("DOMContentLoaded", () => {
    const marquee3 = document.getElementById("client-marqueeInner-3");
    const text3 = marquee3.querySelector(".brand-bgheading");
    initMarquee3(marquee3, text3);

    let resizeTimeout3;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimeout3);
        resizeTimeout3 = setTimeout(() => {
            const width = marquee3.parentElement.offsetWidth;
            if (Math.abs(width - lastWidth3) > 10) {
                lastWidth3 = width;
                initMarquee3(marquee3, text3);
            }
        }, 100);
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
        { yPercent: isMobile ? 0 : moveYTop, xPercent: 0, opacity: isMobile ? 1 : 0 },
        {
            yPercent: isMobile ? 0 : 10,
            xPercent: isMobile ? 0 : 0,
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
    gsap.fromTo(".partners-section .logo.top2",
        { yPercent: isMobile ? 0 : moveYTop, xPercent: isMobile ? 0 : moveXLeft, opacity: isMobile ? 1 : 0 },
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
        { yPercent: isMobile ? 0 : moveYTop, xPercent: isMobile ? 0 : moveXLeft, opacity: isMobile ? 1 : 0 },
        {
            yPercent: isMobile ? 0 : 40,
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
    gsap.fromTo(".partners-section .logo.top4",
        { yPercent: isMobile ? 0 : moveYTop, xPercent: isMobile ? 0 : moveXRight, opacity: isMobile ? 1 : 0 },
        {
            yPercent: isMobile ? 0 : 10,
            xPercent: isMobile ? 0 : 0,
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
        { xPercent: isMobile ? 0 : moveXLeft, opacity: isMobile ? 1 : 0 },
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
        { yPercent: isMobile ? 0 : moveYTop, xPercent: isMobile ? 0 : moveXRight, opacity: isMobile ? 1 : 0 },
        {
            yPercent: isMobile ? 0 : -40,
            xPercent: isMobile ? 0 : 0,
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
        { yPercent: isMobile ? 0 : moveYBottom, xPercent: 0, opacity: isMobile ? 1 : 0 },
        {
            yPercent: isMobile ? 0 : 20,
            xPercent: isMobile ? 0 : 0,
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
        { yPercent: isMobile ? 0 : moveYBottom, xPercent: isMobile ? 0 : moveXLeft, opacity: isMobile ? 1 : 0 },
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
        { yPercent: isMobile ? 0 : moveYBottom, xPercent: isMobile ? 0 : moveXLeft, opacity: isMobile ? 1 : 0 },
        {
            yPercent: isMobile ? 0 : -25,
            xPercent: isMobile ? 0 : -90,
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

let partnerLogoResizeTimeout;

// Utility to detect mobile devices
function isMobile() {
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Initialize on load
window.addEventListener("load", () => {
    if (!isMobile()) {
        initPartnerLogos();
    }
});

function resetPartnerLogos() {
    // Reset transforms and opacity for all logos
    gsap.set(".partners-section .logo", {
        clearProps: "all"
    });
}

window.addEventListener("resize", () => {
    clearTimeout(partnerLogoResizeTimeout);
    partnerLogoResizeTimeout = setTimeout(() => {
        if (isMobile()) {
            // On mobile, just reset and skip GSAP/ScrollTrigger
            resetPartnerLogos();
            return;
        }
        // Kill all ScrollTriggers and tweens
        if (window.ScrollTrigger) ScrollTrigger.getAll().forEach(t => t.kill());
        gsap.killTweensOf(".partners-section .logo");
        resetPartnerLogos();
        // Re-initialize your GSAP logo animations
        initPartnerLogos();
    }, 50);
});
/****************** Client Partner Logs **************************/