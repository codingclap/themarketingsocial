window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});

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


/*************  Gsap Marquee Animation- 1 ****************/
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
    duration: 5,
    ease: "linear",
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize(x => parseFloat(x) % originalText.offsetWidth)
    }
  });
});
/*************  Gsap Marquee Animation- 1****************/


/*************  Gsap Marquee Animation- 2 ****************/
window.addEventListener("load", () => {
  const marqueeInner = document.getElementById("marqueeInner-2");
  const originalText = marqueeInner.querySelector(".marquee-text-2");
  const containerWidth = document.querySelector(".scroller-section-footer").offsetWidth;

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
/*************  Gsap Marquee Animation- 2****************/


/*************  Gsap Marquee Brand-Reimaging ****************/
window.addEventListener("load", () => {
  const marqueeInner = document.getElementById("brand-reimaging-bgtext");
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
/*************  Gsap Marquee Brand-Reimaging ****************/



//************* GSAP ScrollTrigger for Counter Animation ****************/
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

//************* GSAP ScrollTrigger for Counter Animation ****************/


//*************** Navbar Scroll Effect  ***************************/ 
const target = document.getElementById("navbar-shadow-fixed");
let isScrolled = false;


  function updateShadow() {
    const scrollY = window.scrollY;

    if (scrollY > 50 && !isScrolled) {
      target.classList.add("navbar-shadow");
      isScrolled = true;
    } else if (scrollY <= 50 && isScrolled) {
      target.classList.remove("navbar-shadow");
      isScrolled = false;
    }
  }

  // Run on scroll and page load
  window.addEventListener("scroll", updateShadow);
  window.addEventListener("load", updateShadow);
 
//*************** Navbar Scroll Effect  ***************************/ 