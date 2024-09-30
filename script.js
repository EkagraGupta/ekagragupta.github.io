function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


// Function to scroll to the next section
function scrollToNextSection(arrow) {
  const currentSection = arrow.closest("section");
  const nextSection = currentSection.nextElementSibling;

  if (nextSection) {
    nextSection.scrollIntoView({ behavior: "smooth" });
  }
}
