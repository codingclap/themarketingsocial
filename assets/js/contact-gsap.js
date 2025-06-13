 

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
 
 
/*******************  Gsap Vertical Slider Animation(contact) ****************/
 function initContactVerticalSlider() {
  const holder = document.querySelector('.contact-form-slides-holder');
  if (!holder) return;

  // Remove previous clones if any
  const slides = Array.from(holder.children).filter(el => !el.classList.contains('cloned'));
  // Remove all clones
  Array.from(holder.children).forEach(el => {
    if (el.classList.contains('cloned')) holder.removeChild(el);
  });

  // Clone all slides for seamless loop
  slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    clone.classList.add('cloned');
    holder.appendChild(clone);
  });

  // Calculate total height of original slides
  let totalHeight = 0;
  slides.forEach(slide => {
    totalHeight += slide.offsetHeight + parseInt(getComputedStyle(slide).marginBottom || 0, 10);
  });

  // Kill old tween if exists
  if (holder._marqueeTween) {
    holder._marqueeTween.kill();
    holder._marqueeTween = null;
  }
  gsap.set(holder, { y: 0, willChange: "transform", force3D: true });

  // Animate
  holder._marqueeTween = gsap.to(holder, {
    y: `-=${totalHeight}`,
    duration: 10,
    ease: "none",
    repeat: -1,
    force3D: true,
    overwrite: true,
    modifiers: {
      y: gsap.utils.unitize(val => parseFloat(val) % totalHeight)
    }
  });
}

// Call on load and resize (debounced)
window.addEventListener("DOMContentLoaded", initContactVerticalSlider);
window.addEventListener("resize", () => {
  setTimeout(initContactVerticalSlider, 200);
});



/*******************  Gsap Vertical Slider Animation(contact) ****************/