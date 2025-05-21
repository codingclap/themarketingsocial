// Custom GSAP Animation for Header Image and Logo
gsap.to(".header-image", {
     rotation: 360,
     duration: 6,
     repeat: -1,
     ease: "none",
     transformOrigin: "50% 50%" // Ensures it rotates in place
});

gsap.to(".navbar-brand-logo", {
     rotationY: 180,    // Flip 180 degrees along the Y-axis
     duration: 1.5,       // Duration for one flip
     repeat: -1,        // Infinite loop
     yoyo: true,        // Make the animation go back and forth
     ease: "none",      // Smooth constant motion
})
// Custom GSAP Animation for Header Image and Logo


  window.addEventListener("load", () => {
    const marqueeInner = document.getElementById("marqueeInner");
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
      duration: 6,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % originalText.offsetWidth)
      }
    });
  });
