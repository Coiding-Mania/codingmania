document.addEventListener("DOMContentLoaded", function() {
  var joinLink = document.getElementById("joinLink");
  var joinSection = document.getElementById("joinSection");

  joinLink.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default behavior of the link

    // Scroll to the Join Us section smoothly
    joinSection.scrollIntoView({ behavior: 'smooth' });
  });
});
