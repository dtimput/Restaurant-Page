import loadWebsite from "./website";
import loadHome from "./home";
import loadMenu from "./menu";
import loadAbout from "./about";

const initWebsite = (() => {
  loadWebsite();
  loadHome();

  const home = document.querySelector(".home");
  const menu = document.querySelector(".menu");
  const about = document.querySelector(".about");

  home.addEventListener("click", loadHome);
  menu.addEventListener("click", loadMenu);
  about.addEventListener("click", loadAbout);
})();
