window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});
document.documentElement.classList.add('has-js');
//-- Toggle Hamburger Animation --//
document.addEventListener("DOMContentLoaded", function () {
  const toggler = document.querySelector(".custom-toggler");
  toggler.addEventListener("click", function () {
    toggler.classList.toggle("open");
  });
});
//-- Toggle Hamburger Animation --//

//-- Verticle Bar expend( Helping Brand ) --//
const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
  panel.addEventListener('click', () => {
    panels.forEach(p => p.classList.remove('active'));
    panel.classList.add('active');

  });
});
//-- Verticle Bar expend( Helping Brand ) --//



//-------- Fade Up animation --------//

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.batch(".fade-animation", {
  start: "top 60%",
  onEnter: batch => {
    gsap.to(batch, {
      y: 0,
      autoAlpha: 1,
      duration: 1.2,
      ease: "power4.out",
      stagger: 0.3,
      overwrite: true,
      force3D: true,
      immediateRender: false
    });
  },
  once: true // trigger only once
});
//-------- Fade Up animation --------//



//-------- Zoom In animation --------//
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".zoom-in").forEach((el) => {
  gsap.to(el, {
    opacity: 1,
    scale: 1,
    duration: 1.2,
    ease: "power4.out",
    immediateRender: false, // ensure proper render on mid-load
    scrollTrigger: {
      trigger: el,
      start: "top 40%",
      toggleActions: "play none none none",
      once: true // Animate only once
    }
  });
});
//-------- Zoom In animation --------//

//-------- Scale In animation --------//
 gsap.registerPlugin(ScrollTrigger);

  gsap.to(".bg-image-layer", {
    scale: 1,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".bg-zoom-section",
      start: "top 20%",
      toggleActions: "play none none none",
      once: true
    }
  });

  // Refresh on load in case section is already in view
  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });

  //-------- Scale In animation --------//