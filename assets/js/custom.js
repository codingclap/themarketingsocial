document.addEventListener("DOMContentLoaded", function () {
  document.documentElement.classList.add('has-js');



  // Toggle Hamburger
  const toggler = document.querySelector(".custom-toggler");
  if (toggler) {
    toggler.addEventListener("click", function () {
      toggler.classList.toggle("open");
    });
  }

  // Panel Toggle
  const panels = document.querySelectorAll('.panel');
  panels.forEach(panel => {
    panel.addEventListener('click', () => {
      panels.forEach(p => p.classList.remove('active'));
      panel.classList.add('active');
    });
  });

  gsap.registerPlugin(ScrollTrigger);

  // MatchMedia for Responsive Animation
  ScrollTrigger.matchMedia({

    // Desktop
    "(min-width: 768px)": function () {
      ScrollTrigger.batch(".fade-animation", {
        start: "top 60%",
        onEnter: batch => {
          gsap.to(batch, {
            y: 0,
            autoAlpha: 1,
            duration: 1,
            ease: "power4.out",
            stagger: 0.3,
            force3D: true,
            immediateRender: false
          });
        },
        once: true
      });

      gsap.utils.toArray(".zoom-in").forEach(el => {
        gsap.to(el, {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power4.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none",
            once: true
          }
        });
      });

      gsap.utils.toArray(".zoom-in-slow").forEach(el => {
        gsap.to(el, {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power4.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none",
            once: true
          }
        });
      });

      gsap.utils.toArray(".zoom-in-delay").forEach(el => {
        gsap.set(el, {
          y: 420,
          opacity: 0,
          scale: 0.1,
        });
        gsap.to(el, {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power4.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none",
            once: true
          }
        });
      });

      gsap.to(".bg-image-layer", {
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".bg-zoom-section",
          start: "top 20%",
          toggleActions: "play none none none",
          once: true
        }
      });
    },

    // Mobile
    "(max-width: 767px)": function () {
      ScrollTrigger.batch(".fade-animation", {
        start: "top 70%",
        onEnter: batch => {
          gsap.to(batch, {
            y: 0,
            autoAlpha: 1,
            duration: 1,
            ease: "power4.out",
            stagger: 0.3,
            force3D: true,
            immediateRender: false
          });
        },
        once: true
      });

      gsap.utils.toArray(".zoom-in").forEach(el => {
        gsap.to(el, {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power4.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
            once: true
          }
        });
      });

      gsap.utils.toArray(".zoom-in-slow").forEach(el => {
        gsap.to(el, {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power4.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: el,
            start: "top 60%",
            toggleActions: "play none none none",
            once: true
          }
        });
      });

      gsap.utils.toArray(".zoom-in-delay").forEach(el => {
        gsap.set(el, {
          y: 420,
          opacity: 0,
          scale: 0.1,
        });

        gsap.to(el, {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: el,
            start: "top 82%",
            toggleActions: "play none none none",
            once: true
          }
        });
      });


      gsap.to(".bg-image-layer", {
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".bg-zoom-section",
          start: "top 50%", // adjusted for mobile
          toggleActions: "play none none none",
          once: true
        }
      });
    }

  });

  // ScrollTrigger refresh
  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });
});
