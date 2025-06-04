/*************  Gsap Marquee Brand-Reimaging(About)- 1 ****************/
function setupMarquee(marqueeInner, originalText) {
    // Clear clones
    while (marqueeInner.children.length > 1) {
        marqueeInner.removeChild(marqueeInner.lastChild);
    }

    // Force layout update to get accurate width
    marqueeInner.style.transform = 'translateX(0)';
    originalText.style.whiteSpace = 'nowrap';

    const containerWidth = marqueeInner.parentElement.offsetWidth;
    let totalWidth = originalText.offsetWidth;

    // Clone until total width is enough
    while (totalWidth < containerWidth * 2) {
        const clone = originalText.cloneNode(true);
        marqueeInner.appendChild(clone);
        totalWidth += clone.offsetWidth;
    }

    // Smooth performance via GPU acceleration
    marqueeInner.style.willChange = 'transform';

    gsap.killTweensOf(marqueeInner);
    gsap.to(marqueeInner, {
        x: `-=${originalText.offsetWidth}`,
        duration: 10,
        ease: "none",
        repeat: -1,
        force3D: true,
        overwrite: true,
        modifiers: {
            x: gsap.utils.unitize(x => parseFloat(x) % originalText.offsetWidth)
        }
    });
}

// Setup marquee on load
window.addEventListener("load", () => {
    const marqueeInner = document.getElementById("about-marqueeInner-1");
    const originalText = marqueeInner.querySelector(".about-bgheading");

    setupMarquee(marqueeInner, originalText);

    // Responsive adjustment using requestAnimationFrame debounce
    let resizeFrame;
    window.addEventListener("resize", () => {
        if (resizeFrame) cancelAnimationFrame(resizeFrame);
        resizeFrame = requestAnimationFrame(() => {
            setupMarquee(marqueeInner, originalText);
        });
    });
});

/*************  Gsap Marquee Brand-Reimaging(About)- 1 ****************/

/*************  Gsap Marquee Animation(About)- 2 ****************/
function setupMarquee2(marqueeInner, originalText) {
  // Remove previous clones
  while (marqueeInner.children.length > 1) {
    marqueeInner.removeChild(marqueeInner.lastChild);
  }

  // Reset transform to ensure accurate measurements
  marqueeInner.style.transform = 'translateX(0)';
  originalText.style.whiteSpace = 'nowrap';

  const containerWidth = marqueeInner.parentElement.offsetWidth;
  let totalWidth = originalText.offsetWidth;

  // Clone elements to exceed container width
  while (totalWidth < containerWidth * 2) {
    const clone = originalText.cloneNode(true);
    marqueeInner.appendChild(clone);
    totalWidth += clone.offsetWidth;
  }

  marqueeInner.style.willChange = 'transform';

  gsap.killTweensOf(marqueeInner);
  gsap.to(marqueeInner, {
    x: `-=${originalText.offsetWidth}`,
    duration: 10,
    ease: "none",
    repeat: -1,
    force3D: true,
    overwrite: true,
    modifiers: {
      x: gsap.utils.unitize(x => parseFloat(x) % originalText.offsetWidth)
    }
  });
}

window.addEventListener("load", () => {
  const marqueeInner = document.getElementById("about-marqueeInner-2");
  const originalText = marqueeInner.querySelector(".about-marquee-text-2");

  setupMarquee2(marqueeInner, originalText);

  // Debounced resize using requestAnimationFrame
  let resizeFrame;
  window.addEventListener("resize", () => {
    if (resizeFrame) cancelAnimationFrame(resizeFrame);
    resizeFrame = requestAnimationFrame(() => {
      setupMarquee2(marqueeInner, originalText);
    });
  });
});

/*************  Gsap Marquee Animation (About)- 2 ****************/

/*************  Gsap Marquee Brand-Reimaging (About) - 3 ****************/
function setupMarquee3(marqueeInner, originalText) {
  // Remove existing clones (keep only the first/original)
  while (marqueeInner.children.length > 1) {
    marqueeInner.removeChild(marqueeInner.lastChild);
  }

  // Reset transform and prepare for width measurements
  marqueeInner.style.transform = 'translateX(0)';
  originalText.style.whiteSpace = 'nowrap';

  const containerWidth = marqueeInner.parentElement.offsetWidth;
  let totalWidth = originalText.offsetWidth;

  // Clone original text until it overflows the container 2x
  while (totalWidth < containerWidth * 2) {
    const clone = originalText.cloneNode(true);
    marqueeInner.appendChild(clone);
    totalWidth += clone.offsetWidth;
  }

  marqueeInner.style.willChange = 'transform';

  gsap.killTweensOf(marqueeInner);
  gsap.to(marqueeInner, {
    x: `-=${originalText.offsetWidth}`,
    duration: 10,
    ease: "none", // smoother than "linear"
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

  // Debounced resize listener using requestAnimationFrame
  let resizeFrame;
  window.addEventListener("resize", () => {
    if (resizeFrame) cancelAnimationFrame(resizeFrame);
    resizeFrame = requestAnimationFrame(() => {
      setupMarquee3(marqueeInner, originalText);
    });
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