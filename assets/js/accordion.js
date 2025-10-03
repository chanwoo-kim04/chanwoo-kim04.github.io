document.addEventListener("DOMContentLoaded", function() {
  var headers = document.querySelectorAll(".accordion-header");

  headers.forEach(function(header) {
    // Initially hide all panels
    var panel = header.nextElementSibling;
    panel.style.display = "none";

    header.addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  });
});
