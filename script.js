const menuOpen = document.getElementById("menuOpen");
const menuClose = document.getElementById("menuClose");
const mobileNav = document.getElementById("mobileNav");

menuOpen.addEventListener("click", () => {
  mobileNav.classList.add("active");
});

menuClose.addEventListener("click", () => {
  mobileNav.classList.remove("active");
});

