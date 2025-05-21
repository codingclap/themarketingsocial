//-- Toggle Hamburger Animation -
  
    document.addEventListener("DOMContentLoaded", function () {
      const toggler = document.querySelector(".custom-toggler");
      toggler.addEventListener("click", function () {
        toggler.classList.toggle("open");
      });
    });
  