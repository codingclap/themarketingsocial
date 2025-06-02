window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});


 gsap.to(".navbar-brand-logo", {
      rotationY: 180,    // Flip 180 degrees along the Y-axis
      duration: 1.5,       // Duration for one flip
      repeat: -1,        // Infinite loop
      yoyo: true,        // Make the animation go back and forth
      ease: "none",      // Smooth constant motion
    })
    // Custom GSAP Animation for Header Image and Logo

//*************** Navbar Scroll Effect  ***************************/ 
const target = document.getElementById("navbar-shadow-fixed");
let isScrolled = false;


  function updateShadow() {
    const scrollY = window.scrollY;

    if (scrollY > 50 && !isScrolled) {
      target.classList.add("navbar-shadow");
      isScrolled = true;
      target.classList.add("py-lg-0");
      target.classList.add("py-md-0");
      target.classList.add("py-0");
      target.classList.remove("py-0");
      target.classList.remove("py-md-2");
      target.classList.remove("py-lg-2");
    } else if (scrollY <= 50 && isScrolled) {
      target.classList.remove("navbar-shadow"); 
      target.classList.add("py-1");
      target.classList.add("py-md-2");
      target.classList.add("py-lg-2");
      isScrolled = false;
    }
  }

  // Run on scroll and page load
  window.addEventListener("scroll", updateShadow);
  window.addEventListener("load", updateShadow);
 
//*************** Navbar Scroll Effect  ***************************/ 
