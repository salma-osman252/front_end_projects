const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarlinks = document.getElementsByClassName("center_part")[0];

toggleButton.addEventListener("click", () => {
  navbarlinks.classList.toggle("below");
});
