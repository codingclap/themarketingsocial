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