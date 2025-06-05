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


/*******************  Gsap Marquee Animation(Service)- 1 ****************/
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
    const container = document.getElementById("service-marqueeInner-1");
    const text = container.querySelector(".marquee-text");
    initMarquee(container, text);
});


/*******************  Gsap Marquee Animation(Service)- 1****************/




/*******************  Service Card Sticky Animation ***************/
/*******************  Service Card Sticky Animation ***************/
gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline();
const cards = document.querySelectorAll('.service-card');

// Set initial states with performance optimizations
function setInitialStates() {
    // Force cleanup of any existing animations
    gsap.killTweensOf(cards);
    ScrollTrigger.getAll().forEach(st => st.kill());

    // Reset all cards to initial state
    cards.forEach(card => {
        // Clear all transform properties first
        card.style.transform = 'none';
        card.style.scale = 'none';

        gsap.set(card, {
            clearProps: "all",
            scale: 1,
            willChange: "transform",
            force3D: true,
            backfaceVisibility: "hidden",
            transformOrigin: "center center",
            transformStyle: "preserve-3d"
        });
    });
}

// Initialize ScrollTrigger with responsive values
function initScrollTriggers() {
    const isMobile = window.innerWidth < 768;

    cards.forEach((card, i) => {
        if (cards[i + 1]) {
            ScrollTrigger.create({
                trigger: cards[i + 1],
                start: isMobile ? "top 85%" : "top 90%",
                end: isMobile ? "top 30%" : "top 20%",
                scrub: isMobile ? 0.8 : 0.6,
                invalidateOnRefresh: true,
                onEnter: () => {
                    // Ensure clean state when entering viewport
                    gsap.set(card, { clearProps: "all" });
                },
                onLeave: () => {
                    // Reset when leaving viewport
                    gsap.set(card, { scale: 1 });
                },
                onUpdate: self => {
                    requestAnimationFrame(() => {
                        const smoothProgress = Math.round(self.progress * (isMobile ? 15 : 20)) / (isMobile ? 15 : 20);
                        const scaleValue = gsap.utils.interpolate(
                            1,
                            isMobile ? 0.95 : 0.8899,
                            smoothProgress
                        );

                        gsap.set(card, {
                            scale: scaleValue,
                            immediateRender: true,
                            overwrite: true
                        });
                    });
                }
            });
        }
    });
}

// Enhanced refresh function
const refresh = () => {
    // Kill all existing animations
    gsap.killTweensOf(cards);
    ScrollTrigger.getAll().forEach(st => st.kill());

    // Reset and reinitialize
    setInitialStates();
    initScrollTriggers();
    ScrollTrigger.refresh();
};

// Debounced refresh for resize
let refreshTimeout;
const debouncedRefresh = () => {
    if (refreshTimeout) clearTimeout(refreshTimeout);
    refreshTimeout = setTimeout(refresh, 250);
};

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    refresh();
});

// Handle resize
window.addEventListener('resize', debouncedRefresh, { passive: true });

// Handle visibility changes
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        refresh();
    }
});

// Cleanup
const cleanup = () => {
    if (refreshTimeout) clearTimeout(refreshTimeout);
    gsap.killTweensOf(cards);
    ScrollTrigger.getAll().forEach(st => st.kill());
    timeline.kill();
};

window.addEventListener('unload', cleanup);

/*******************  Service Card Sticky-  Animation ***************/



/*******************  Gsap Marquee Animation (Service)- 2 ****************/
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
        duration: 10,
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
    const marqueeInner = document.getElementById("service-marqueeInner-2");
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

/*******************  Gsap Marquee Animation (Service)- 2****************/





/*************  Gsap Marquee Brand-Reimaging (Service) ****************/
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
    const marqueeInner = document.getElementById("service-marqueeInner-3");
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

/*************  Gsap Marquee Brand-Reimaging(Service) ****************/



