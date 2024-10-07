document.addEventListener("DOMContentLoaded", function () {
  // Select all anchor links
  const links = document.querySelectorAll("a");
  const loadingSpinner = document.getElementById("loadingSpinner");

  // Function to show the spinner
  function showSpinner() {
    loadingSpinner.style.display = "flex"; // Show spinner
  }

  // Add event listener to all links
  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      // Prevent the default link behavior (immidiate navigation)
      event.preventDefault;

      // Show the loading spinner when the user clicks a link
      showSpinner();

      //Use SetTimeout to delay the navigation, showing the spinner first
      setTimeout(() => {
        //Redirect to the href of the clicked link after 500ms
        window.location.href = link.href;
      }, 500); // Adjust time as necessary (500ms = 0.5 seconds)
    });
  });

  // Hide spinner after the page fully loads
  window.addEventListener("load", function () {
    loadingSpinner.style.display = "none"; // Hide spinner
  });
});
