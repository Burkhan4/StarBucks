const openBtn = document.getElementById("open-menu");
const closeBtn = document.getElementById("close-menu");
const sideMenu = document.getElementById("side-menu");
const overlay = document.getElementById("menu-overlay");

openBtn.addEventListener("click", () => {
  sideMenu.style.right = "0";
  overlay.classList.remove("hidden");
  overlay.classList.add("opacity-100");
  document.body.style.overflow = "hidden";
});

const closeMenu = () => {
  sideMenu.style.right = "-100%";
  overlay.classList.add("hidden");
  overlay.classList.remove("opacity-100");
  document.body.style.overflow = "";
};

closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);
