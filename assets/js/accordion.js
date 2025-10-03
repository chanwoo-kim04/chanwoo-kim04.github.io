document.addEventListener("DOMContentLoaded", function() {
  var headers = document.querySelectorAll(".accordion-header");

  headers.forEach(function(header) {
    // Hide all panels by default
    var panel = header.nextElementSibling;
    panel.style.display = "none";

    header.addEventListener("click", function() {
      // Toggle the 'active' class on the button
      this.classList.toggle("active");

      // Toggle the panel display
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  });
});
