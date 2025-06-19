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
    const container = document.getElementById("service-marqueeInner-1");
    const text = container.querySelector(".marquee-text");
    initMarquee(container, text);

    window.addEventListener("resize", () => {
        const width = container.parentElement.offsetWidth;
        if (Math.abs(width - lastWidth) > 10) {
            lastWidth = width;
            initMarquee(container, text);
        }
    });
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
                            isMobile ? 0.90 : 0.90,
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
    const container = document.getElementById("service-marqueeInner-2");
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
 
/*******************  Gsap Marquee Animation (Service)- 2****************/





/*************  Gsap Marquee Brand-Reimaging (Service) ****************/
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

let lastWidth3 = 0;
window.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("service-marqueeInner-3");
    const text = container.querySelector(".brand-bgheading");
    initMarquee3(container, text);

    let resizeTimeout;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const width = container.parentElement.offsetWidth;
            if (Math.abs(width - lastWidth3) > 10) {
                lastWidth3 = width;
                initMarquee3(container, text);
            }
        }, 100);
    });
});
/*************  Gsap Marquee Brand-Reimaging(Service) ****************/



