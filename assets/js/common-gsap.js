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
