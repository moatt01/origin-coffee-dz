// setup date
const date = (document.getElementById("dateAuto").innerHTML =
  new Date().getFullYear());

// setup nav
const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");

// show nav
navBtn.addEventListener("click", () => {
  navbar.classList.add("showNav");
});

// close nav when clicking the close button
navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});
