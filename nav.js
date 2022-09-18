//toggle navigation bar on mobile screen
const navigation = document.querySelector(".navigation-links");
const toggler = document.querySelector("#toggle-nav");
toggler.addEventListener("click", () => {
  navigation.classList.toggle("toggled");
  if (toggler.classList.contains("toggle-nav")) {
    toggler.classList.remove("toggle-nav");
    toggler.classList.add("toggle-nav-active");
  } else {
    toggler.classList.add("toggle-nav");
    toggler.classList.remove("toggle-nav-active");
  }

  
});
