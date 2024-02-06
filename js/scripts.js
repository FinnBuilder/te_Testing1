document.addEventListener("DOMContentLoaded", function() {
    // Get all toggle buttons
    const toggleButtons = document.querySelectorAll(".toggle");
  
    // Add click event listener to each toggle button
    toggleButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        // Get the content associated with the button
        const content = button.nextElementSibling;
  
        // Toggle the display of the content
        if (content.style.display === "none") {
          content.style.display = "block";
        } else {
          content.style.display = "none";
        }
      });
    });
  });
  