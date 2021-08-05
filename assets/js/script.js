//Cambiar color de barra de navegación entre transparente y dark
var nav = document.querySelector("nav");
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 173) {
    nav.classList.add("bg-dark", "shadow");
  } else {
    nav.classList.remove("bg-dark", "shadow");
  }
});

//Hacer smooth-scroll
$(function () {
  $("a").click(function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var gato = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(gato).offset().top - 50,
        },
        800,
        function () {
          window.location.hash = gato;
        }
      );
    }
  });
});

//Tooltip (footer)
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
